"use client"
export default function Our_research() {
    return (
        <main className="pt-16 flex flex-col items-center bg-gradient-to-b from-white to-gray-100">
            <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-100 w-full max-w-5xl">

                <h1 className="text-3xl text-center font-bold mb-8 text-gray-800">Polymers and Coatings</h1>

                {/* Card 1 */}
                <div className="bg-white p-6 mb-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">1. Polymer/Coating + GO/rGO Research Project</h2>
                    <p className="text-gray-700">
                        Developing wood coating solutions for furniture and engineered wood products to prevent 
                        cracking and protect against sunlight and rain damage.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 mb-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">2. Metal Surface Coating for Saw Blades + GO/rGO Research Project</h2>
                    <p className="text-gray-700">
                        Developing coating solutions for wood-cutting saw blades to reduce wear, extend service life, 
                        and lower furniture production costs.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 mb-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">3. Titanium Dioxide + GO/rGO Composite Study</h2>
                    <p className="text-gray-700">
                        Developing coating materials for solar panels and other energy-related applications.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 mb-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">4. Coating Technology for Solar Panels and Other Materials</h2>
                    <p className="text-gray-700">
                        Developing advanced surface coating technologies to enhance efficiency and durability.
                    </p>
                </div>

            </section>
        </main>
    )
}
