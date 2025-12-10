import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white text-gray-900">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#125EB5]/5 blur-[100px]" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center rounded-full border border-[#125EB5]/20 bg-[#125EB5]/5 px-3 py-1 text-sm font-medium text-[#125EB5] mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-[#125EB5] mr-2 animate-pulse"></span>
                    Launching 1/2/2026
                </div>

                <h1 className="mx-auto max-w-5xl text-5xl font-extrabold tracking-tight sm:text-7xl">
                    The Future of <br />
                    <span className="text-[#125EB5]">
                        Garage Management
                    </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                    PitStop GMS simplifies your garage operations with intelligent inventory, job cards, and billing.
                    Part of the powerful PitStop Suite.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="group flex h-12 items-center gap-2 rounded-full bg-[#125EB5] px-8 text-sm font-semibold text-white transition-all hover:bg-[#0e4b91] hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                        Join Waitlist
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="flex h-12 items-center gap-2 rounded-full border border-gray-200 bg-white px-8 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-300">
                        <Play className="h-4 w-4 fill-current" />
                        View Demo
                    </button>
                </div>

                {/* YouTube Video Embed */}
                <div className="mt-20 relative mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl shadow-gray-200/50">
                    <div className="aspect-video w-full rounded-xl overflow-hidden relative bg-gray-100">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=0"
                            title="PitStop GMS Preview"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
