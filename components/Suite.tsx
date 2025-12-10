
import { Wrench, Car, ShoppingCart, Settings } from 'lucide-react';

const products = [
    {
        name: 'PitStop DMS',
        description: 'Comprehensive Dealer Management System for automotive dealerships.',
        icon: ShoppingCart,
        badge: 'Dealer'
    },
    {
        name: 'PitStop GMS',
        description: 'Advanced Garage Management System for modern service centers.',
        icon: Wrench,
        badge: 'Garage',
        active: true
    },
    {
        name: 'PitStop FMS',
        description: 'Fleet Management System for tracking and maintaining vehicle fleets.',
        icon: Car,
        badge: 'Fleet'
    },
    {
        name: 'PitStop SPMS',
        description: 'Spare Parts Management System for inventory optimization.',
        icon: Settings,
        badge: 'Spare Parts'
    }
];

export default function Suite() {
    return (
        <section id="suite" className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 md:flex md:items-center md:justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            The PitStop Suite
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            An integrated ecosystem of tools designed for the entire automotive industry.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all 
                        ${product.active
                                    ? 'bg-white border-[#125EB5] shadow-lg shadow-[#125EB5]/10 ring-1 ring-[#125EB5]'
                                    : 'bg-white border-gray-200 hover:border-[#125EB5]/50 hover:shadow-md'
                                }`}
                        >
                            <div>
                                <div className={`mb-4 inline-flex rounded-lg p-3 ${product.active ? 'bg-[#125EB5] text-white' : 'bg-gray-100 text-gray-600'}`}>
                                    <product.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                            <div className="mt-6">
                                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${product.active ? 'bg-[#125EB5]/10 text-[#125EB5]' : 'bg-gray-100 text-gray-700'}`}>
                                    {product.badge}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
