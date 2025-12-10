import { Box, ClipboardList, Users, IndianRupee } from 'lucide-react';

const features = [
    {
        title: "Smart Inventory",
        description: "Real-time tracking of spare parts with automated reordering levels. Never run out of stock again.",
        icon: Box,
    },
    {
        title: "Job Card Management",
        description: "Create, track, and close job cards digitally. Capture vehicle details and customer signatures effortlessly.",
        icon: ClipboardList,
    },
    {
        title: "Customer CRM",
        description: "Keep your customers engaged with automated service reminders, status updates, and loyalty programs.",
        icon: Users,
    },
    {
        title: "Billing & Invoicing",
        description: "Generate GST-compliant invoices instantly. Integrated with payment gateways for faster collections.",
        icon: IndianRupee,
    }
]

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to run your garage</h2>
                    <p className="mt-4 text-lg text-gray-600">Streamline operations and boost profitability with our comprehensive toolset.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group relative rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition-all hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-[#125EB5]/10">
                            <div className={`mb-6 inline-flex rounded-xl bg-[#125EB5]/10 p-3 text-[#125EB5]`}>
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
