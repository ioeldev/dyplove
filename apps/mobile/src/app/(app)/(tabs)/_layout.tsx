import { Tabs } from 'expo-router';
import { SettingsIcon, UserIcon } from 'lucide-react-native';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShadowVisible: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					headerLeft: () => (
						<Avatar alt="User Avatar" className="mx-4">
							<AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
							<AvatarFallback>
								<UserIcon size={24} color="black" />
							</AvatarFallback>
						</Avatar>
					),
					headerRight: () => (
						<Button variant="ghost" size="icon" className="mx-4">
							<SettingsIcon size={24} color="black" />
						</Button>
					),
				}}
			/>
			<Tabs.Screen name="settings" options={{ title: 'Settings' }} />
		</Tabs>
	);
}
