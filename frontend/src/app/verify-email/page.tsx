'use client';

import { type Auth, applyActionCode } from 'firebase/auth';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';

async function handleVerifyEmail(auth: Auth, actionCode: string) {
	try {
		await applyActionCode(auth, actionCode);
		return { success: true };
	} catch (error) {
		console.log('Error verifying email:', error);
		return { success: false, error };
	}
}

export default function VerifyEmail() {
	const [verificationState, setVerificationState] = useState<'loading' | 'success' | 'error'>('loading');
	const [continueUrl, setContinueUrl] = useState<string | null>(null);
	const searchParams = useSearchParams();

	useEffect(() => {
		const verifyEmail = async () => {
			const mode = searchParams.get('mode');
			const actionCode = searchParams.get('oobCode');
			const continueUrl = searchParams.get('continueUrl');

			if (mode !== 'verifyEmail' || !actionCode) {
				setVerificationState('error');
				return;
			}

			setContinueUrl(continueUrl);
			const result = await handleVerifyEmail(auth, actionCode);
			console.log(result);
			setVerificationState(result.success ? 'success' : 'error');
		};

		verifyEmail();
	}, [searchParams]);

	const handleContinue = () => {
		if (continueUrl) {
			window.location.href = continueUrl;
		} else {
			// Fallback to home page if no continue URL is provided
			window.location.href = '/';
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<div className="max-w-md w-full space-y-4">
				{verificationState === 'loading' && (
					<Alert>
						<AlertTitle>Verifying your email</AlertTitle>
						<AlertDescription>Please wait while we verify your email address...</AlertDescription>
					</Alert>
				)}

				{verificationState === 'success' && (
					<Alert className="border-green-500">
						<CheckCircle2 className="h-4 w-4 text-green-500" />
						<AlertTitle>Email Verified!</AlertTitle>
						<AlertDescription>
							Your email has been successfully verified. You can now return to the app.
						</AlertDescription>
					</Alert>
				)}

				{verificationState === 'error' && (
					<Alert className="border-red-500">
						<XCircle className="h-4 w-4 text-red-500" />
						<AlertTitle>Verification Failed</AlertTitle>
						<AlertDescription>
							We couldn't verify your email address. The link may be invalid or expired. Please try requesting a new
							verification email.
						</AlertDescription>
					</Alert>
				)}

				<Button onClick={handleContinue} className="w-full" variant="default">
					Return to App
				</Button>
			</div>
		</div>
	);
}
