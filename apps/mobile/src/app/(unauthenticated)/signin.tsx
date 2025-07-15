import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Text } from '~/components/ui/text';
import { auth } from '~/lib/firebase';
import { useAuth } from '~/providers/auth-provider';

export default function SignIn() {
	const [isLoading, setIsLoading] = useState(false);
	const { emailVerifRequired, isReady } = useAuth();

	const loginFormSchema = z.object({
		email: z.email({ message: 'Invalid email address' }),
		password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
	});

	type LoginFormType = z.infer<typeof loginFormSchema>;

	const { control, handleSubmit, setError } = useForm<LoginFormType>({
		resolver: zodResolver(loginFormSchema),
	});

	const onSubmit: SubmitHandler<LoginFormType> = async (data: LoginFormType) => {
		setIsLoading(true);
		try {
			const result = await signInWithEmailAndPassword(auth, data.email, data.password);
			const { user } = result;
			if (!user.emailVerified) {
				setError('email', { message: 'Your email is not verified. Please verify your email address' });
			}
		} catch (error) {
			if (error instanceof FirebaseError) {
				Alert.alert('Sign In Error', error.message);
			}
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		console.log('emailVerifRequired>>', emailVerifRequired);
	}, [emailVerifRequired]);

	return (
		<SafeAreaView className="flex-1 bg-background">
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
				<ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1 px-6" keyboardShouldPersistTaps="handled">
					<View className="flex-1 justify-center py-8">
						<View className="mb-8">
							<Text className="text-3xl font-bold text-center mb-2">Welcome back</Text>
							<Text className="text-muted-foreground text-center text-base">Sign in to your account to continue</Text>
						</View>

						<Card className="w-full">
							<CardHeader>
								<CardTitle>Sign In</CardTitle>
								<CardDescription>Enter your email and password to access your account</CardDescription>
							</CardHeader>
							<CardContent className="gap-4">
								<Controller
									name="email"
									control={control}
									render={({ field: { onChange, value }, fieldState: { error } }) => (
										<View className="gap-2">
											<Label nativeID="email">Email</Label>
											<Input
												aria-labelledby="email"
												placeholder="Enter your email"
												value={value}
												onChangeText={onChange}
												keyboardType="email-address"
												autoCapitalize="none"
												autoComplete="email"
												editable={!isLoading}
											/>
											{error && <Text className="text-red-500">{error.message}</Text>}
										</View>
									)}
								/>

								<Controller
									name="password"
									control={control}
									render={({ field: { onChange, value }, fieldState: { error } }) => (
										<View className="gap-2">
											<Label nativeID="password">Password</Label>
											<Input
												aria-labelledby="password"
												placeholder="Enter your password"
												value={value}
												onChangeText={onChange}
												secureTextEntry
												autoComplete="password"
												editable={!isLoading}
											/>
											{error && <Text className="text-red-500">{error.message}</Text>}
										</View>
									)}
								/>

								<Button onPress={handleSubmit(onSubmit)} disabled={isLoading} className="mt-4">
									<Text>{isLoading ? 'Signing in...' : 'Sign In'}</Text>
								</Button>

								<View className="relative my-6">
									<View className="absolute inset-0 flex items-center">
										<View className="w-full border-t border-border" />
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
