'use client';

import Link from 'next/link';
import { Menu, X, Github, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        fetch('https://api.github.com/repos/karma1505/pitstop-backend')
            .then(res => res.json())
            .then(data => {
                if (data.stargazers_count) {
                    setStars(data.stargazers_count);
                }
            })
            .catch(() => setStars(null));
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-[#125EB5]">
                        PitStop <span className="text-gray-900">GMS</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#125EB5]">
                        Features
                    </Link>
                    <Link href="#suite" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#125EB5]">
                        The Suite
                    </Link>
                    <Link href="/downloads" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#125EB5]">
                        Downloads
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#125EB5]">
                        Contact
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/signup"
                        className="rounded-full bg-[#125EB5] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#0e4b91] hover:shadow-[0_4px_14px_0_rgba(18,94,181,0.39)]"
                    >
                        Get Started
                    </Link>

                    <Link
                        href="https://github.com/karma1505/pitstop-backend"
                        target="_blank"
                        className="hidden items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 lg:flex"
                    >
                        <Github className="h-4 w-4" />
                        <span>pitstop-backend</span>
                        <div className="mx-1 h-4 w-[1px] bg-gray-300" />
                        <div className="flex items-center gap-1 text-gray-600">
                            <Star className="h-3.5 w-3.5 fill-current" />
                            <span>{stars ?? 'Star'}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
