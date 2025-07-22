import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '~/components/ui/text';

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<SafeAreaView className="flex-1 items-center justify-center">
				<Text className="text-2xl font-bold mb-2">Page Not Found</Text>
				<Text className="text-gray-600 mb-8 text-center px-4">
					Sorry, the page you're looking for doesn't exist or has been moved.
				</Text>

				<Link href="/" replace className="bg-primary px-6 py-3 rounded-full">
					<Text className="text-white font-medium">Return to Home</Text>
				</Link>
			</SafeAreaView>
		</>
	);
}
