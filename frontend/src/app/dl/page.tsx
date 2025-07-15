'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DeepLinkPage() {
	const router = useRouter();

	useEffect(() => {
		// Try to open the deeplink
		window.location.href = 'dyplove://signin';

		// Fallback - if the app is not installed, redirect to home after a short delay
		const fallbackTimer = setTimeout(() => {
			router.push('/');
		}, 2000);

		return () => clearTimeout(fallbackTimer);
	}, [router]);

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-2xl font-semibold mb-4">Opening Dyplove App...</h1>
				<p className="text-gray-600">
					If the app doesn't open automatically, please make sure it's installed on your device.
				</p>
			</div>
		</div>
	);
}
