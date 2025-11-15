"use client";
import { motion } from "framer-motion";

export default function Our_research() {
    return (
        <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
            
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-10 text-gray-800 tracking-wide"
            >
                Electrical and Energy Research
            </motion.h1>

            <section className="px-6 md:px-10 max-w-5xl w-full grid gap-8">

                {/* Card 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        1. Aluminum Electrical Wire + rGO Research Project
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Developing aluminum electrical wires reinforced with reduced graphene oxide
                        (rGO) as a cost-effective alternative to copper. The goal is to reduce production
                        costs while maintaining high electrical conductivity and long-term stability.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        2. Graphene Battery Technology
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Developing next-generation energy storage systems using graphene materials,
                        offering faster charging, higher capacity, and improved thermal stability.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        3. Hydrogen Production from Seawater
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Research on clean hydrogen production technologies that use seawater as a
                        sustainable resource—minimizing freshwater consumption while supporting
                        global energy transition.
                    </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        4. Agri-Voltaic Technology
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Integrating agricultural crop production with solar energy systems to
                        maximize land usage, generate renewable electricity, and support
                        sustainable farming.
                    </p>
                </motion.div>

                {/* Card 5 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        5. Renewable Energy Development
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Researching advanced renewable energy systems including solar, wind, and
                        hydrogen-based technologies to accelerate clean energy adoption.
                    </p>
                </motion.div>

            </section>
        </main>
    );
}
