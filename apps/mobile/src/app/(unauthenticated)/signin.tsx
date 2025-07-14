import { Link, router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import {
	Alert,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Text } from '~/components/ui/text';
import { auth } from '~/lib/firebase';

export default function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSignIn = async () => {
		if (!email || !password) {
			Alert.alert('Error', 'Please fill in all fields');
			return;
		}

		setIsLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
			// Navigation will be handled by auth state change
			router.replace('/(app)');
		} catch (error: any) {
			Alert.alert('Sign In Error', error?.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<SafeAreaView className="flex-1 bg-background">
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				className="flex-1"
			>
				<ScrollView
					contentContainerStyle={{ flexGrow: 1 }}
					className="flex-1 px-6"
					keyboardShouldPersistTaps="handled"
				>
					<View className="flex-1 justify-center py-8">
						<View className="mb-8">
							<Text className="text-3xl font-bold text-center mb-2">
								Welcome back
							</Text>
							<Text className="text-muted-foreground text-center text-base">
								Sign in to your account to continue
							</Text>
						</View>

						<Card className="w-full">
							<CardHeader>
								<CardTitle>Sign In</CardTitle>
								<CardDescription>
									Enter your email and password to access your account
								</CardDescription>
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
										autoComplete="password"
										editable={!isLoading}
									/>
								</View>

								<Button
									onPress={handleSignIn}
									disabled={isLoading}
									className="mt-4"
								>
									<Text>{isLoading ? 'Signing in...' : 'Sign In'}</Text>
								</Button>

								<View className="relative my-6">
									<View className="absolute inset-0 flex items-center">
										<View className="w-full border-t border-border" />
									</View>
									<View className="relative flex justify-center text-xs uppercase">
										<Text className="bg-background px-2 text-muted-foreground">
											Or continue with
										</Text>
									</View>
								</View>

								<View className="gap-3">
									<Button
										variant="outline"
										disabled={true}
										className="opacity-50"
									>
										<Text className="text-muted-foreground">
											Continue with Google
										</Text>
									</Button>
									<Button
										variant="outline"
										disabled={true}
										className="opacity-50"
									>
										<Text className="text-muted-foreground">
											Continue with Apple
										</Text>
									</Button>
								</View>

								<View className="mt-6 text-center">
									<Text className="text-muted-foreground">
										Don't have an account?{' '}
										<Link href="/signup" asChild>
											<Text className="text-primary font-medium">Sign up</Text>
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
