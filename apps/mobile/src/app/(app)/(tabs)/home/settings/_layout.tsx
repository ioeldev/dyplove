import { router, Stack } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

export default function SettingsLayout() {
	// const { t } = useTranslation();

	return (
		<Stack
			screenOptions={{
				headerShown: true,
				headerBackTitle: 'Back',
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					// headerLargeTitle: true,
					headerShadowVisible: false,
					headerTitle: 'Settings',
					headerTitleAlign: 'center',
					// headerSearchBarOptions: {
					//     placeholder: "Rechercher",
					// },
					headerLeft: () => <ChevronLeft onPress={() => router.back()} />,
				}}
			/>
		</Stack>
	);
}
