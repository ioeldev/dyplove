import { useUserQuery } from '@dyplove/graphql-api/user.generated';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { useAuth } from '~/providers/auth-provider';

export default function Settings() {
	const { data, loading, error } = useUserQuery();
	const { user, signOut } = useAuth();

	const handleSignOut = async () => {
		await signOut();
	};

	return (
		<SafeAreaView className="flex-1 p-4">
			<Text className="text-2xl font-bold mb-4">Settings</Text>

			{user && (
				<View className="mb-6">
					<Text className="text-base mb-2">Signed in as:</Text>
					<Text className="text-muted-foreground">{user.email}</Text>
				</View>
			)}

			<Button onPress={handleSignOut} variant="destructive">
				<Text>Sign Out</Text>
			</Button>
		</SafeAreaView>
	);
}
