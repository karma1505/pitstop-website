import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Check, HelpCircle } from 'lucide-react';

export const metadata = {
    title: 'Pricing - PitStop GMS',
    description: 'Choose the right plan for your garage management needs. Currently in MVP phase.',
};

const plans = [
    {
        name: 'Personal',
        description: 'Perfect for hobbyists and small home garages.',
        features: [
            'Up to 50 active job cards',
            'Basic inventory management',
            'Digital invoicing',
            '1 User account'
        ]
    },
    {
        name: 'Pro',
        description: 'For growing independent workshops.',
        features: [
            'Unlimited job cards',
            'Advanced inventory tracking',
            'Customer CRM',
            'SMS & Email notifications',
            '3 User accounts',
            'Basic reporting'
        ]
    },
    {
        name: 'Pro+',
        description: 'For established service centers requiring efficiency.',
        features: [
            'Everything in Pro',
            'Multi-bay management',
            'Technician performance tracking',
            'Automated service reminders',
            'Advanced financial reports',
            '10 User accounts',
            'Priority Email Support'
        ],
        highlight: true
    },
    {
        name: 'Enterprise',
        description: 'Custom solutions for large chains and franchises.',
        features: [
            'Everything in Pro+',
            'Multi-branch management',
            'Custom API integrations',
            'Dedicated account manager',
            'White-label options',
            'Unlimited users',
            '24/7 Phone Support'
        ]
    }
];

export default function Pricing() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-24 pb-16">
                <div className="px-6 py-12 lg:px-8 mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            <span className="text-[#125EB5]">Plans for </span>garages of all sizes
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We are currently in our <strong>MVP (Minimum Viable Product) Phase</strong>.
                            <br className="hidden sm:inline" />
                            During this period, all accounts are granted early access. Pricing structures will be finalized and announced as we exit the MVP phase.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-none lg:grid-cols-4 lg:gap-x-8">
                        {plans.map((plan, planIdx) => (
                            <div
                                key={plan.name}
                                className={`relative flex flex-col rounded-3xl p-8 ring-1 xl:p-10 ${plan.highlight
                                    ? 'bg-gray-900 ring-gray-900 shadow-xl scale-105 z-10'
                                    : 'bg-white ring-gray-200 hover:ring-[#125EB5]/30 transition-all'
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={plan.name}
                                        className={`text-lg font-semibold leading-8 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}
                                    >
                                        {plan.name}
                                    </h3>
                                    {plan.highlight && (
                                        <span className="rounded-full bg-[#125EB5] px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                                            Recommended
                                        </span>
                                    )}
                                </div>

                                <p className={`mt-4 text-sm leading-6 ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {plan.description}
                                </p>

                                <div className="mt-6 flex flex-col items-baseline gap-x-1">
                                    <span className={`text-3xl font-bold tracking-tight ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                                        TBD
                                    </span>
                                    <span className={`text-sm font-semibold leading-6 ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                                        /month
                                    </span>
                                </div>

                                <p className={`mt-1 text-xs ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                    Pricing revealed post-MVP
                                </p>

                                <a
                                    href="/signup"
                                    aria-describedby={plan.name}
                                    className={`mt-6 block rounded-full px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${plan.highlight
                                        ? 'bg-[#125EB5] text-white shadow-sm hover:bg-[#0e4b91] focus-visible:outline-[#125EB5]'
                                        : 'bg-[#125EB5]/10 text-[#125EB5] hover:bg-[#125EB5]/20 focus-visible:outline-[#125EB5]'
                                        }`}
                                >
                                    Get Early Access
                                </a>

                                <ul role="list" className={`mt-8 space-y-3 text-sm leading-6 ${plan.highlight ? 'text-gray-300' : 'text-gray-600'} xl:mt-10`}>
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check className={`h-6 w-5 flex-none ${plan.highlight ? 'text-white' : 'text-[#125EB5]'}`} aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-center">
                        <div className="rounded-2xl bg-gray-50 p-6 sm:p-10 max-w-4xl w-full border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-blue-100 rounded-full text-[#125EB5]">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">Have questions about the MVP pricing?</h4>
                                    <p className="text-gray-600 mt-1">We're transparent about our roadmap. Contact our team to understand what's coming next.</p>
                                </div>
                            </div>
                            <a href="/contact" className="whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
