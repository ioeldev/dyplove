import { View } from 'react-native';
import { cn } from '~/lib/utils';
import { Text } from './ui/text';

type TileProps = {
	title: string;
	description: string | React.ReactNode;
	icon: React.ReactNode;
	iconContainerClassName?: string;
};

export const Tile = ({ title, description, icon, iconContainerClassName }: TileProps) => {
	return (
		<View className="flex-row items-center gap-4 mb-4">
			<View className={cn('w-12 h-12 bg-card rounded-lg items-center justify-center', iconContainerClassName)}>
				{icon}
			</View>
			<View>
				<Text className="text-base font-bold text-card-foreground">{title}</Text>
				<Text className="text-sm font-bold text-card-foreground">{description}</Text>
			</View>
		</View>
	);
};
