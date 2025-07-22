import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeToggle } from '~/components/ThemeToggle';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { useAuth } from '~/providers/auth-provider';

export default function Settings() {
	const { user, signOut } = useAuth();

	const handleSignOut = async () => {
		await signOut();
	};

	if (!user) {
		return null;
	}

	return (
		<SafeAreaView className="flex-1 p-4 gap-4" edges={[]}>
			{user && (
				<View className="mb-6">
					<Text className="text-base mb-2">Signed in as:</Text>
					<Text className="text-muted-foreground">{user.email}</Text>
				</View>
			)}

			<View className="flex-row items-center gap-2">
				<Text className="text-base">Theme</Text>
				<ThemeToggle />
			</View>

			<Button onPress={handleSignOut} variant="destructive">
				<Text>Sign Out</Text>
			</Button>
		</SafeAreaView>
	);
}
