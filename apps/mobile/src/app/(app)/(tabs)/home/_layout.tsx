import { router, Stack } from 'expo-router';
import { UserIcon } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Settings } from '~/lib/icons/Settings';

export default function HomeLayout() {
	const { t } = useTranslation();

	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: t('navigation.tabs.home'),
					headerLeft: () => (
						<Avatar alt="User Avatar" className="mx-4">
							<AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
							<AvatarFallback>
								<UserIcon size={24} color="black" />
							</AvatarFallback>
						</Avatar>
					),
					headerRight: () => (
						<Button variant="ghost" size="icon" className="mx-4" onPress={() => router.push('/home/settings')}>
							<Settings size={24} className="text-foreground" />
						</Button>
					),
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen
				name="settings"
				options={{
					presentation: 'modal',
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
