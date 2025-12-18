'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
    {
        question: "What is PitStop GMS and who is it for?",
        answer: "PitStop GMS (Garage Management System) is an all-in-one platform designed to streamline operations for automotive workshops, service centers, and detailing studios. It helps you manage job cards, inventory, customer relationships, and invoicing from a single dashboard."
    },
    {
        question: "Is PitStop GMS free to use?",
        answer: "Currently, we are in our MVP (Minimum Viable Product) phase, and access is available through our early access program. We offer different tiers including a Personal plan for smaller setups. Pricing details for the full release will be announced soon."
    },
    {
        question: "Can I use PitStop on my mobile device?",
        answer: "Absolutely! PitStop GMS is fully responsive and comes with a dedicated mobile app for both iOS and Android devices. You can manage your garage, check inventory, and update job status on the go."
    },
    {
        question: "Does it support multiple workshops or branches?",
        answer: "Yes, our Pro+ and Enterprise plans are primarily built for multi-site operations. You can manage multiple branches from a single admin account, assign specific staff to locations, and get consolidated reports."
    },
    {
        question: "How secure is my garage and customer data?",
        answer: "Security is our top priority. We use industry-standard encryption for data transmission and storage. Your customer data, financial records, and business insights are backed up regularly and protected against unauthorized access."
    },
    {
        question: "How can I get support if I face an issue?",
        answer: "We offer dedicated support channels based on your plan. All users have access to our help documentation and community forums. Pro and Enterprise users receive priority email and phone support for faster resolution."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently asked <span className="text-[#125EB5]">questions</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Everything you need to know about PitStop GMS. Can't find the answer you're looking for? Feel free to contact us.
                    </p>
                </div>

                <div className="mx-auto max-w-3xl divide-y divide-gray-200">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-6">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-start justify-between text-left focus:outline-none group"
                            >
                                <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-[#125EB5]' : 'text-gray-900 group-hover:text-[#125EB5]'}`}>
                                    {faq.question}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                    <Plus
                                        className={`h-6 w-6 transform transition-transform duration-300 ease-in-out text-[#125EB5] ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}
                                    />
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                                    }`}
                            >
                                <p className="text-base leading-relaxed text-gray-600">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
