import { motion, useInView, easeOut, Variants } from "framer-motion";
import Image from "next/image";

const teamVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: easeOut,
        },
    },
};

export default function OurTeam() {
    return (
        <section className="w-full max-w-6xl py-12 px-6 mx-auto">
            <motion.div
                variants={teamVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-3xl font-semibold text-center mb-12">OUR TEAM</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                {[
                    {
                        src: "/leader/ceo.jpg",
                        name: "Mr. Phornpisut Palanugoolsagul",
                        position: "Co-Founder & CEO",
                        details: "A logistics and supply chain expert.",
                    },
                    {
                        src: "/leader/coo.jpg",
                        name: "Mr. Kavee Rakngern",
                        position: "Co-Founder & COO",
                        details: "Specialist in Automation Systems & Graphene Production.",
                    },
                    {
                        src: "/leader/senior.jpg",
                        name: "Mr. Professor Dr. Pichatt Palanugool",
                        position: "Senior Advisor",
                        details: "Expert in Graphene Materials, nanotechnology innovations, and industrial applications.",
                    },
                ].map((member, index) => (
                    <motion.div
                        key={index}
                        variants={teamVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-2xl"
                    >
                        <div className="w-45 h-45 mb-4 overflow-hidden rounded-full shadow-md">
                            <Image src={member.src} alt={member.name} width={192} height={320} />
                        </div>

                        <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                        <p className="text-gray-500 text-sm">{member.position}</p>
                        <p className="text-gray-400 text-xs mt-2">{member.details}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
