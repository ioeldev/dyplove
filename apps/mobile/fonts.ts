import { platformSelect } from 'nativewind/theme';

export const fonts = {
	'jakarta-light': platformSelect({
		android: 'PlusJakartaSans_300Light',
		ios: 'PlusJakartaSans-Light',
	}),
	'jakarta-regular': platformSelect({
		android: 'PlusJakartaSans_400Regular',
		ios: 'PlusJakartaSans-Regular',
	}),
	'jakarta-medium': platformSelect({
		android: 'PlusJakartaSans_500Medium',
		ios: 'PlusJakartaSans-Medium',
	}),
	'jakarta-semibold': platformSelect({
		android: 'PlusJakartaSans_600SemiBold',
		ios: 'PlusJakartaSans-SemiBold',
	}),
	'jakarta-bold': platformSelect({
		android: 'PlusJakartaSans_700Bold',
		ios: 'PlusJakartaSans-Bold',
	}),
	'jakarta-extrabold': platformSelect({
		android: 'PlusJakartaSans_800ExtraBold',
		ios: 'PlusJakartaSans-ExtraBold',
	}),
	'jakarta-black': platformSelect({
		android: 'PlusJakartaSans_900Black',
		ios: 'PlusJakartaSans-Black',
	}),
	'jakarta-light-italic': platformSelect({
		android: 'PlusJakartaSans_300Light_Italic',
		ios: 'PlusJakartaSans-LightItalic',
	}),
	'jakarta-regular-italic': platformSelect({
		android: 'PlusJakartaSans_400Regular_Italic',
		ios: 'PlusJakartaSans-RegularItalic',
	}),
	'jakarta-medium-italic': platformSelect({
		android: 'PlusJakartaSans_500Medium_Italic',
		ios: 'PlusJakartaSans-MediumItalic',
	}),
	'jakarta-semibold-italic': platformSelect({
		android: 'PlusJakartaSans_600SemiBold_Italic',
		ios: 'PlusJakartaSans-SemiBoldItalic',
	}),
	'jakarta-bold-italic': platformSelect({
		android: 'PlusJakartaSans_700Bold_Italic',
		ios: 'PlusJakartaSans-BoldItalic',
	}),
	'jakarta-extrabold-italic': platformSelect({
		android: 'PlusJakartaSans_800ExtraBold_Italic',
		ios: 'PlusJakartaSans-ExtraBoldItalic',
	}),
	'jakarta-black-italic': platformSelect({
		android: 'PlusJakartaSans_900Black_Italic',
		ios: 'PlusJakartaSans-BlackItalic',
	}),
};
