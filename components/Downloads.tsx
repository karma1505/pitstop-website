
import { Smartphone, Check } from 'lucide-react';
import Image from 'next/image';

export default function Downloads() {
    return (
        <section id="downloads" className="py-24 bg-gray-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">

                    <div className="mb-12 lg:mb-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                            Manage your garage from anywhere
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Download the PitStop GMS app for iOS and Android. Stay connected to your business operations on the go.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <button className="transition-transform hover:-translate-y-1 hover:shadow-lg">
                                <Image
                                    src="/images/appledark.svg"
                                    alt="Download on the App Store"
                                    width={240}
                                    height={75}
                                    className="h-[75px] w-auto"
                                />
                            </button>
                            <button className="transition-transform hover:-translate-y-1 hover:shadow-lg">
                                <Image
                                    src="/images/google-play-badge.svg"
                                    alt="Get it on Google Play"
                                    width={240}
                                    height={75}
                                    className="h-[75px] w-auto"
                                />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#125EB5]/10 text-[#125EB5]">
                                    <Check className="h-4 w-4" />
                                </div>
                                <span className="text-gray-700">Real-time inventory updates</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#125EB5]/10 text-[#125EB5]">
                                    <Check className="h-4 w-4" />
                                </div>
                                <span className="text-gray-700">Instant job card creation</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#125EB5]/10 text-[#125EB5]">
                                    <Check className="h-4 w-4" />
                                </div>
                                <span className="text-gray-700">Customer notifications</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0 relative">
                        <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#125EB5]/5 blur-[60px]" />
                        <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                            {/* Phone Screen Mockup */}
                            <div className="w-full h-full bg-white flex flex-col">
                                <div className="h-6 bg-black w-full absolute top-0 left-0 z-20 rounded-t-[2.5rem]">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-32 bg-black rounded-b-xl"></div>
                                </div>

                                <div className="flex-1 p-4 pt-10 overflow-hidden">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                                        <div className="text-xs font-bold text-gray-900">PitStop GMS</div>
                                        <div className="h-6 w-6 rounded-full bg-gray-100"></div>
                                    </div>

                                    <div className="h-32 rounded-xl bg-[#125EB5]/10 mb-4 p-4">
                                        <div className="h-2 w-12 bg-[#125EB5]/20 rounded mb-2"></div>
                                        <div className="h-8 w-24 bg-[#125EB5] rounded mb-2"></div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="h-24 rounded-xl bg-gray-50 border border-gray-100"></div>
                                        <div className="h-24 rounded-xl bg-gray-50 border border-gray-100"></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="h-24 rounded-xl bg-gray-50 border border-gray-100"></div>
                                        <div className="h-24 rounded-xl bg-gray-50 border border-gray-100"></div>
                                    </div>
                                </div>

                                <div className="h-16 bg-gray-50 border-t border-gray-100 flex justify-around items-center px-6">
                                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
