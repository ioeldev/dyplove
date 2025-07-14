import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '~/components/ui/text';

export default function Blog() {
	console.log('Blog');
	return (
		<SafeAreaView className="flex-1 p-4">
			<Text className="text-4xl font-bold">Blog</Text>
		</SafeAreaView>
	);
}
