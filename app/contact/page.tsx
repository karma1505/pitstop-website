
'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Get in <span className="text-[#125EB5]">Touch</span>
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                            Have questions about PitStop GMS? We're here to help you get started.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Sales</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#125EB5]/10 text-[#125EB5]">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-semibold text-gray-900">Phone Support</h4>
                                            <p className="text-sm text-gray-500 mt-1">Mon-Fri from 9am to 6pm</p>
                                            <a href="tel:+919999098900" className="block mt-2 text-[#125EB5] font-medium hover:underline">
                                                +91 99990 98900
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#125EB5]/10 text-[#125EB5]">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-semibold text-gray-900">Email</h4>
                                            <p className="text-sm text-gray-500 mt-1">For general inquiries</p>
                                            <a href="mailto:karmanyasingh8@gmail.com" className="block mt-2 text-[#125EB5] font-medium hover:underline">
                                                karmanyasingh8@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Chat with Us</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <a
                                        href="https://wa.me/919999098900"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group"
                                    >
                                        <div className="h-8 w-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                                            <MessageCircle className="h-4 w-4" />
                                        </div>
                                        <span className="font-medium text-gray-900">WhatsApp</span>
                                    </a>

                                    <a
                                        href="https://t.me/+919999098900"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-[#0088cc] hover:bg-[#0088cc]/5 transition-all group"
                                    >
                                        <div className="h-8 w-8 rounded-full bg-[#0088cc]/10 flex items-center justify-center text-[#0088cc] group-hover:bg-[#0088cc] group-hover:text-white transition-colors">
                                            <Send className="h-4 w-4" />
                                        </div>
                                        <span className="font-medium text-gray-900">Telegram</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                            First name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#125EB5] sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Last name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#125EB5] sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#125EB5] sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#125EB5] sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-[#125EB5] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0e4b91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#125EB5] transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
