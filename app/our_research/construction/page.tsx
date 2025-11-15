"use client";
import { motion } from "framer-motion";

export default function Our_research() {
    return (
        <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
            
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-10 text-gray-800 tracking-wide"
            >
                Construction Materials and Concrete Research
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
                        1. Cement / Graphene Oxide (GO) Research Project
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Developing advanced cement for concrete flooring applications including
                        residential buildings, industrial areas, and roadways. This research aims to
                        enhance mechanical strength, improve durability, reduce long-term
                        maintenance, and increase production efficiency through the integration of
                        Graphene Oxide (GO).
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
                        2. Wood + GO/rGO Research Project
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Aiming to enhance fire resistance of wood materials used in construction
                        and furniture. The integration of GO/rGO significantly reduces flame
                        propagation, making this technology ideal for structural components such
                        as walls, floors, columns, and interior decorative elements.
                    </p>
                </motion.div>

            </section>
        </main>
    );
}
