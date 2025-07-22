import { Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { BriefcaseBusinessIcon } from '~/lib/icons/BriefcaseBusiness';
import { DollarSign } from '~/lib/icons/DollarSign';
import { FileIcon } from '~/lib/icons/File';
import { HomeIcon } from '~/lib/icons/Home';
import { UsersRoundIcon } from '~/lib/icons/UsersRound';
import { cn } from '~/lib/utils';

export default function TabsLayout() {
	const { t } = useTranslation();

	const _TabIcon = ({ icon: Icon, focused }: { icon: any; focused: boolean }) => (
		<View className={cn('rounded-2xl p-3', focused && 'bg-card')}>
			<Icon size={24} className="text-foreground" />
		</View>
	);

	return (
		<Tabs
			screenOptions={{
				headerShadowVisible: false,
				tabBarShowLabel: false,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					headerShown: false,
					title: t('navigation.tabs.home'),
					tabBarIcon: ({ focused }) => <_TabIcon icon={HomeIcon} focused={focused} />,
				}}
			/>
			<Tabs.Screen
				name="clients"
				options={{
					title: t('navigation.tabs.clients'),
					tabBarIcon: ({ focused }) => <_TabIcon icon={UsersRoundIcon} focused={focused} />,
				}}
			/>
			<Tabs.Screen
				name="providers"
				options={{
					title: t('navigation.tabs.providers'),
					tabBarIcon: ({ focused }) => <_TabIcon icon={BriefcaseBusinessIcon} focused={focused} />,
				}}
			/>
			<Tabs.Screen
				name="documents"
				options={{
					title: t('navigation.tabs.documents'),
					tabBarIcon: ({ focused }) => <_TabIcon icon={FileIcon} focused={focused} />,
				}}
			/>
			<Tabs.Screen
				name="finances"
				options={{
					title: t('navigation.tabs.finances'),
					tabBarIcon: ({ focused }) => <_TabIcon icon={DollarSign} focused={focused} />,
				}}
			/>
		</Tabs>
	);
}
