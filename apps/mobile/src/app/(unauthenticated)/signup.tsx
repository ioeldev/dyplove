import { Link, router } from 'expo-router';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Text } from '~/components/ui/text';
import { auth } from '~/lib/firebase';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSignUp = async () => {
		if (!email || !password || !confirmPassword) {
			Alert.alert('Error', 'Please fill in all fields');
			return;
		}

		if (password !== confirmPassword) {
			Alert.alert('Error', 'Passwords do not match');
			return;
		}

		if (password.length < 6) {
			Alert.alert('Error', 'Password must be at least 6 characters long');
			return;
		}

		setIsLoading(true);
		try {
			const result = await createUserWithEmailAndPassword(auth, email, password);
			await sendEmailVerification(result.user, {
				url: `https://dyplove.com/dl`,
			});
			// Navigation will be handled by auth state change
			// router.replace('/(app)');
			Alert.alert(
				'Sign Up Success',
				'Please check your email for verification, once verified you can proceed to sign in',
			);
			router.replace('/signin');
		} catch (error) {
			let errorMessage = 'An error occurred during sign up';

			if (error instanceof FirebaseError) {
				switch (error.code) {
					case 'auth/email-already-in-use':
						errorMessage = 'An account with this email already exists';
						break;
					case 'auth/invalid-email':
						errorMessage = 'Invalid email address';
						break;
					case 'auth/weak-password':
						errorMessage = 'Password is too weak. Please choose a stronger password';
						break;
					case 'auth/operation-not-allowed':
						errorMessage = 'Email/password accounts are not enabled';
						break;
					default:
						errorMessage = error.message || errorMessage;
				}
			}
			console.log(error);
			Alert.alert('Sign Up Error', errorMessage);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<SafeAreaView className="flex-1 bg-background">
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
				<ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1 px-6" keyboardShouldPersistTaps="handled">
					<View className="flex-1 justify-center py-8">
						<View className="mb-8">
							<Text className="text-3xl font-bold text-center mb-2">Create account</Text>
							<Text className="text-muted-foreground text-center text-base">
								Sign up to get started with your account
							</Text>
						</View>

						<Card className="w-full">
							<CardHeader>
								<CardTitle>Sign Up</CardTitle>
								<CardDescription>Create a new account to access all features</CardDescription>
							</CardHeader>
							<CardContent className="gap-4">
								<View className="gap-2">
									<Label nativeID="email">Email</Label>
									<Input
										aria-labelledby="email"
										placeholder="Enter your email"
										value={email}
										onChangeText={setEmail}
										keyboardType="email-address"
										autoCapitalize="none"
										autoComplete="email"
										editable={!isLoading}
									/>
								</View>

								<View className="gap-2">
									<Label nativeID="password">Password</Label>
									<Input
										aria-labelledby="password"
										placeholder="Enter your password"
										value={password}
										onChangeText={setPassword}
										secureTextEntry
										autoComplete="new-password"
										editable={!isLoading}
									/>
								</View>

								<View className="gap-2">
									<Label nativeID="confirmPassword">Confirm Password</Label>
									<Input
										aria-labelledby="confirmPassword"
										placeholder="Confirm your password"
										value={confirmPassword}
										onChangeText={setConfirmPassword}
										secureTextEntry
										autoComplete="new-password"
										editable={!isLoading}
									/>
								</View>

								<Button onPress={handleSignUp} disabled={isLoading} className="mt-4">
									<Text>{isLoading ? 'Creating account...' : 'Sign Up'}</Text>
								</Button>

								<View className="relative my-6">
									<View className="absolute inset-0 flex items-center">
										<View className="w-full border-t " />
									</View>
									<View className="relative flex justify-center text-xs uppercase">
										<Text className="bg-background px-2 text-muted-foreground">Or continue with</Text>
									</View>
								</View>

								<View className="gap-3">
									<Button variant="outline" disabled={true} className="opacity-50">
										<Text className="text-muted-foreground">Continue with Google</Text>
									</Button>
									<Button variant="outline" disabled={true} className="opacity-50">
										<Text className="text-muted-foreground">Continue with Apple</Text>
									</Button>
								</View>

								<View className="mt-6 text-center">
									<Text className="text-muted-foreground">
										Already have an account?{' '}
										<Link href="/(unauthenticated)/signin" asChild>
											<Text className="text-primary font-medium">Sign in</Text>
										</Link>
									</Text>
								</View>
							</CardContent>
						</Card>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}
