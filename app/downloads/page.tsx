
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smartphone, Monitor, Globe, Download, Apple } from 'lucide-react';
import Image from 'next/image';

export default function DownloadsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Download <span className="text-[#125EB5]">PitStop GMS</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                            Get the app on your mobile device to manage your garage on the go. Desktop and Web versions coming soon!
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Mobile Downloads */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-3">
                            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <Smartphone className="h-6 w-6 text-[#125EB5]" />
                                    Mobile Platforms
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* iOS */}
                                    <div className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="mb-4">
                                            <h3 className="font-bold text-gray-900 text-lg">
                                                <span className="bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                                                    For iPhone and iPad
                                                </span>
                                            </h3>
                                            <p className="text-sm text-gray-500">iOS 15.0+</p>
                                        </div>
                                        <button className="w-full flex justify-start transition-transform hover:-translate-y-1">
                                            <Image
                                                src="/images/appledark.svg"
                                                alt="Download on the App Store"
                                                width={240}
                                                height={75}
                                                className="h-[75px] w-auto"
                                            />
                                        </button>
                                    </div>

                                    {/* Android */}
                                    <div className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="mb-4">
                                            <h3 className="font-bold text-gray-900 text-lg">
                                                <span className="bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                                                    For Android Devices
                                                </span>
                                            </h3>
                                            <p className="text-sm text-gray-500">Android 10.0+</p>
                                        </div>
                                        <button className="w-full flex justify-start transition-transform hover:-translate-y-1">
                                            <Image
                                                src="/images/google-play-badge.svg"
                                                alt="Get it on Google Play"
                                                width={240}
                                                height={75}
                                                className="h-[75px] w-auto"
                                            />
                                        </button>
                                    </div>

                                    {/* APK Direct */}
                                    <div className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="mb-4">
                                            <h3 className="font-bold text-gray-900 text-lg">
                                                <span className="bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                                                    Direct APK Download
                                                </span>
                                            </h3>
                                            <p className="text-sm text-gray-500">Universal v1.0.0</p>
                                        </div>
                                        <button className="w-full flex justify-start transition-transform hover:-translate-y-1">
                                            <Image
                                                src="/images/image 20.svg"
                                                alt="Download APK"
                                                width={240}
                                                height={75}
                                                className="h-[75px] w-auto rounded-xl"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coming Soon Section */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 opacity-75">
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                                            <Monitor className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Windows PC</h3>
                                            <p className="text-sm text-gray-500">Native Desktop App</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        A powerful desktop experience for heavy-duty garage management. Coming soon to Windows.
                                    </p>
                                </div>
                                <div className="mt-4 inline-flex items-center justify-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                                    Coming Soon
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-gray-200 opacity-75">
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                                            <Globe className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Web App</h3>
                                            <p className="text-sm text-gray-500">Browser Based</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Access your dashboard from any browser without installation. Coming soon.
                                    </p>
                                </div>
                                <div className="mt-4 inline-flex items-center justify-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                                    Coming Soon
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
