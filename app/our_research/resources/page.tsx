"use client"
export default function Our_research() {
    return (
        <main className="pt-16 flex flex-col items-center bg-gradient-to-b from-white to-gray-100">
            <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-100 w-full max-w-5xl">

                <h1 className="text-3xl text-center font-bold mb-8 text-gray-800">Resources and Recycling</h1>

                {/* Card 1 */}
                <div className="bg-white p-6 mb-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">1. Mineral Exploration (Rare Earth Elements)</h2>
                    <p className="text-gray-700">
                        Studying mining processes for minerals such as tin, tantalum, niobium, and other valuable elements.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 mb-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">2. E-Waste Processing and Mineral Recovery</h2>
                    <p className="text-gray-700">
                        Studying methods for extracting valuable minerals from electronic waste.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 mb-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">3. Used Oil and Palm Oil Separation Technology</h2>
                    <p className="text-gray-700">
                        Developing technologies to convert used or waste oils into usable fuel.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 mb-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">4. Petroleum Refining with Advanced Technology</h2>
                    <p className="text-gray-700">
                        Developing more efficient and sustainable petroleum refining processes.
                    </p>
                </div>

            </section>
        </main>
    )
}
