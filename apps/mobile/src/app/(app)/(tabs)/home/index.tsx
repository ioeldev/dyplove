import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Tile } from '~/components/tile';
import { Checkbox } from '~/components/ui/checkbox';
import { Text } from '~/components/ui/text';
import { Calendar } from '~/lib/icons/Calendar';
import { DollarSign } from '~/lib/icons/DollarSign';

export default function Screen() {
	const [checked, setChecked] = useState(false);
	const { t } = useTranslation();

	return (
		<View className="flex-1">
			<View className="flex-1">
				{/* Upcoming Section */}
				<View className="p-5">
					<Text className="text-2xl font-bold text-card-foreground mb-3">{t('home.upcoming')}</Text>
					{/* Wedding Ceremony */}
					<Tile
						title="Wedding Ceremony"
						icon={<Calendar size={16} className="text-card-foreground" />}
						iconContainerClassName=""
						description={
							<View>
								<Text className="text-sm font-bold text-card-foreground">10:00 AM</Text>
							</View>
						}
					/>

					{/* Reception */}
					<Tile
						title="Reception"
						icon={<Calendar size={16} className="text-card-foreground" />}
						description={
							<View>
								<Text className="text-sm font-bold text-card-foreground">12:00 PM</Text>
							</View>
						}
					/>

					{/* Payment - Catering */}
					<Tile
						title="Payment - Catering"
						icon={<DollarSign size={16} className="text-card-foreground" />}
						description={
							<View>
								<Text className="text-sm font-bold text-card-foreground">$4,000{'\n'}Sophia & Carson</Text>
							</View>
						}
					/>
				</View>

				{/* Tasks Section */}
				<View className="p-5 pt-0">
					<Text className="text-2xl font-bold text-card-foreground mb-3">{t('home.tasks')}</Text>

					{/* Task Item */}
					<Tile
						title="Confirm catering menu"
						icon={<Checkbox checked={checked} onCheckedChange={() => setChecked(!checked)} />}
						iconContainerClassName="bg-transparent"
						description={<Text className="text-sm font-bold text-card-foreground">Eden</Text>}
					/>
				</View>
			</View>
		</View>
	);
}
