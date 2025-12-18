'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { jwtDecode } from "jwt-decode";
import Navbar from '../../components/Navbar';

declare global {
    interface Window {
        google: any;
    }
}

export default function Signup() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGoogleCallback = async (response: any) => {
        setLoading(true);
        setError('');

        try {
            // In a real app, send specific token to backend
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ credential: response.credential }),
            });

            if (!res.ok) {
                throw new Error('Authentication failed');
            }

            const data = await res.json();

            // Decode to show user name (simulated success)
            const decoded: any = jwtDecode(response.credential);
            console.log("Logged in as: ", decoded.name);

            // Redirect to dashboard or home
            router.push('/');

        } catch (err) {
            console.error(err);
            setError('Failed to log in. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const initializeGoogleOneTap = () => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                callback: handleGoogleCallback,
                auto_select: true, // This enables the "Pinterest-like" automatic selection
                cancel_on_tap_outside: false,
                context: 'signup',
            });

            // Render the button as a fallback/primary option
            window.google.accounts.id.renderButton(
                document.getElementById("google-btn-container"),
                {
                    theme: "outline",
                    size: "large",
                    width: "100%",
                    text: "continue_with",
                    shape: "circle",
                    logo_alignment: "left"
                }
            );

            // Access the One Tap UI
            window.google.accounts.id.prompt((notification: any) => {
                if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                    console.log("One Tap skipped or not displayed");
                }
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <Script
                src="https://accounts.google.com/gsi/client"
                strategy="afterInteractive"
                onLoad={initializeGoogleOneTap}
            />

            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Welcome to PitStop
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Manage your garage with efficiency and ease.
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
                            {error}
                        </div>
                    )}

                    <div className="mt-8 space-y-4">
                        {/* Google Button Container */}
                        <div id="google-btn-container" className="w-full flex justify-center h-[44px]">
                            {/* The Google library injects the button here */}
                            <div className="w-full h-full bg-gray-100 animate-pulse rounded-full flex items-center justify-center text-gray-400 text-sm">
                                Loading Google login...
                            </div>
                        </div>

                        {/* Apple Button (Mock) */}
                        <button
                            onClick={() => setError("Apple Sign-In requires Apple Developer configuration.")}
                            className="w-full flex items-center justify-center gap-3 bg-black text-white hover:bg-gray-900 transition-colors h-[44px] rounded-full font-medium text-sm px-5"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.62 4.37-1.4 1.84.15 3.3.74 4.09 1.86-3.48 2.08-2.67 7.02.89 8.58-.56 1.34-1.28 2.5-2.25 3.19h-.18zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                            Continue with Apple
                        </button>
                    </div>

                    <div className="relative mt-8">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm font-medium leading-6">
                            <span className="bg-white px-6 text-gray-400">or</span>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-xs text-gray-500">
                        By continuing, you agree to our{' '}
                        <Link href="/legal/terms_conditions.pdf" target="_blank" className="font-semibold text-[#125EB5] hover:text-blue-500">
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/legal/privacy_policy.pdf" target="_blank" className="font-semibold text-[#125EB5] hover:text-blue-500">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </main>
        </div>
    );
}
