import '../global.css';

import { ApolloProvider } from '@apollo/client';
import {
	DarkTheme,
	DefaultTheme,
	type Theme,
	ThemeProvider,
} from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import * as React from 'react';
import { Platform, View } from 'react-native';
import { SystemBars } from 'react-native-edge-to-edge';
import { Text } from '~/components/ui/text';
import { apolloClient } from '~/lib/apollo';
// import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from '~/lib/useColorScheme';
import { AuthProvider, useAuth } from '~/providers/auth-provider';

const LIGHT_THEME: Theme = {
	...DefaultTheme,
	colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
	...DarkTheme,
	colors: NAV_THEME.dark,
};

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

const usePlatformSpecificSetup = Platform.select({
	web: useSetWebBackgroundClassName,
	android: useSetAndroidNavigationBar,
	default: noop,
});

function RootLayoutNav() {
	const { user, loading } = useAuth();

	if (loading) {
		return (
			<View className="flex-1 justify-center items-center bg-background">
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Protected guard={!!user}>
				<Stack.Screen name="(app)" />
			</Stack.Protected>
			<Stack.Protected guard={!user}>
				<Stack.Screen name="(unauthenticated)" />
			</Stack.Protected>
		</Stack>
	);
}

export default function RootLayout() {
	usePlatformSpecificSetup();
	const { isDarkColorScheme } = useColorScheme();

	return (
		<ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
			<ApolloProvider client={apolloClient}>
				<AuthProvider>
					<SystemBars style="auto" />
					<RootLayoutNav />
					<PortalHost />
				</AuthProvider>
			</ApolloProvider>
		</ThemeProvider>
	);
}

const useIsomorphicLayoutEffect =
	Platform.OS === 'web' && typeof window === 'undefined'
		? React.useEffect
		: React.useLayoutEffect;

function useSetWebBackgroundClassName() {
	useIsomorphicLayoutEffect(() => {
		// Adds the background color to the html element to prevent white background on overscroll.
		document.documentElement.classList.add('bg-background');
	}, []);
}

function useSetAndroidNavigationBar() {
	React.useLayoutEffect(() => {
		// setAndroidNavigationBar(Appearance.getColorScheme() ?? 'light');
	}, []);
}

function noop() {}
