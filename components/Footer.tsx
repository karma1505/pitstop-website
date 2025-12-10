import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-gray-200 bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-xl font-bold tracking-tighter text-[#125EB5]">
                            PitStop <span className="text-gray-900">GMS</span>
                        </span>
                        <p className="mt-2 text-sm text-gray-500">
                            Part of the PitStop Suite by Nimbus Technologies Private Limited.
                        </p>
                    </div>
                    <div className="flex gap-8 text-sm text-gray-600">
                        <Link href="#" className="hover:text-[#125EB5] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#125EB5] transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-[#125EB5] transition-colors">Contact Support</Link>
                    </div>
                    <div className="flex gap-4">
                        {/* Social placeholders */}
                        <div className="h-8 w-8 rounded-full bg-gray-100 hover:bg-[#125EB5]/10 hover:text-[#125EB5] flex items-center justify-center cursor-pointer transition-colors">
                            <div className="h-4 w-4 bg-current opacity-20" />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-gray-100 hover:bg-[#125EB5]/10 hover:text-[#125EB5] flex items-center justify-center cursor-pointer transition-colors">
                            <div className="h-4 w-4 bg-current opacity-20" />
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-xs text-gray-500 flex flex-col gap-2">
                    <p>© {new Date().getFullYear()} PitStop Suite. All rights reserved.</p>
                    <p>Made with ❤️ in India</p>
                </div>
            </div>
        </footer>
    )
}