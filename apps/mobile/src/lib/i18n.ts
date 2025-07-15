import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from '../locales/en/translation.json';
import fr from '../locales/fr/translation.json';
import he from '../locales/he/translation.json';

type SupportedLanguage = 'en-US' | 'fr-FR' | 'he-IL';

const resources = {
	'en-US': {
		translation: en,
	},
	'fr-FR': {
		translation: fr,
	},
	'he-IL': {
		translation: he,
	},
};

const defaultNS = 'translation';

// Function to get the initial language
const getInitialLanguage = async (): Promise<SupportedLanguage> => {
	try {
		// First try to get from storage
		// const storedLanguage = await getDefaultLanguage();
		// if (storedLanguage) {
		// 	return storedLanguage;
		// }

		// If not in storage, try to detect from device
		const deviceLocale = Localization.getLocales()[0];
		const deviceLanguage = deviceLocale?.languageTag;

		// Map device language to supported languages
		if (deviceLanguage?.startsWith('en')) {
			return 'en-US';
		} else if (deviceLanguage?.startsWith('fr')) {
			return 'fr-FR';
		} else if (deviceLanguage?.startsWith('he')) {
			return 'he-IL';
		}

		// Default fallback
		return 'fr-FR';
	} catch (error) {
		console.error('Error getting initial language:', error);
		return 'fr-FR';
	}
};

// Initialize i18n
const initI18n = async () => {
	const initialLanguage = await getInitialLanguage();

	await i18n.use(initReactI18next).init({
		resources,
		lng: initialLanguage,
		fallbackLng: 'fr-FR',
		// debug: __DEV__,
		debug: false,
		interpolation: {
			escapeValue: false, // React already escapes values
		},
		react: {
			useSuspense: false, // Important for React Native
		},
		defaultNS,
	});

	// Save the language to storage if it wasn't already there
	// await setDefaultLanguage(initialLanguage);
};

// Function to change language
export const changeLanguage = async (language: SupportedLanguage) => {
	await i18n.changeLanguage(language);
	// await setDefaultLanguage(language);
};

// Export the resources and defaultNS for type definitions
export { resources, defaultNS };
export { initI18n };
export default i18n;
