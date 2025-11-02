import {FaHistory} from "react-icons/fa";

export default function Story(){
    return (
        <section className="w-full max-w-6xl mx-auto py-16 px-6 bg-gray-50 rounded-2xl shadow-lg">
        {/* Title with Icon */}
        <div className="flex items-center mb-8 justify-center">
          <FaHistory className="text-3xl text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-800">OUR STORY</h1>
        </div>

        {/* Story Text */}
        <p className="text-gray-700 text-lg leading-relaxed space-y-4">
          Founded in 2023 by a team of industry experts, PBR Automation Co., Ltd. specializes in the design and manufacturing
          of advanced industrial machinery for both domestic and international markets.

          The company has expanded its expertise into graphene material research, including graphene oxide (GO) and reduced graphene oxide (rGO),
          in collaboration with Professor Dr. Pichatt Palanugool, a leading nanotechnology specialist.

          To strengthen logistics operations, PBR Automation has formed a strategic partnership with Pisut Logistics Public Company Limited,
          focusing on developing a modern container yard in the Laem Chabang Port area to support the Industry 4.0 era.

          Additionally, the company works closely with Thai Mechatronics Co., Ltd., led by Mr. Kavee Rakngern, an expert in automation
          and graphene production systems, to drive innovation in industrial-scale graphene technology and research equipment development.

          With a vision to create high-performance and sustainable graphene materials,
          PBR Automation Co., Ltd. is dedicated to developing cost-effective, durable, and eco-friendly solutions for diverse industrial applications.

          Our key products include Graphene Oxide (GO) and Reduced Graphene Oxide (rGO) —
          available in both powder and aqueous suspension forms.

          Currently, PBR Automation is expanding its capabilities in automated manufacturing and industrial-scale graphene production
          to meet the growing global demand for advanced material innovation.
        </p>
      </section>
    )
}