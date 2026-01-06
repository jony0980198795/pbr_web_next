export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    graph_img: string[];
    details: {
        highlight: string;
        packagingSize: string[];
        properties: {
            sheetSize: string;
            layer: string;
            reductionProcess: string;
            color: string;
            smell: string;
            waterSolubility: string;
        };
        elementalAnalysis: {
            carbon: string;
            oxygen: string;
        };
        specifications: {
            electricalConductivity: string;
            specificSurfaceArea: string;
            purity: string;
        };
        applications: string[];
    };
}

export const products: Product[] = [
    {
        id: "001",
        name: "Graphene Oxide Powder",
        description:
            "High-purity Graphene Oxide Powder engineered for exceptional dispersion and surface activity. Ideal for advanced applications in composites, coatings, energy storage, and research development. Ensures consistent quality, scalability, and superior performance.",
        image: "/products/black.jpg",
        graph_img: [
            "/products/go_powder/5.png",
            "/products/go_powder/4.png",
            "/products/go_powder/3.png",
            "/products/go_powder/2.png",
        ],
        details: {
            highlight: "High conductivity, enhanced stability, engineered for advanced technology applications.",
            packagingSize: ["1 g", "100 g", "500 g", "1,000 g"],
            properties: {
                sheetSize: "≈ 4–6 μm",
                layer: "3–5",
                reductionProcess: "Hummer's Method",
                color: "Brown",
                smell: "Odorless",
                waterSolubility: "Soluble",
            },

            elementalAnalysis: {
                carbon: "65.7%",
                oxygen: "34.3%",
            },

            specifications: {
                electricalConductivity: "≈ 100 S/m",
                specificSurfaceArea: "100-300 m²/g",
                purity: ">99%",
            },

            applications: [
                "Supercapacitors",
                "Catalyst",
                "Biomaterials",
                "Tensile strength and Elasticity",
                "Membranes and coating"
            ],
        },
    },
    {
        id: "002",
        name: "Reduced Graphene Oxide Powder",
        description:
            "With high conductivity and enhanced stability. Engineered for advanced applications in electronics, energy storage, sensors, and high-performance composites, ensuring consistent quality and superior functionality",
        image: "/products/braw.jpg",
        graph_img: [
            "/products/rgo_powder/10.png",
            "/products/rgo_powder/9.png",
            "/products/rgo_powder/8.png",
            "/products/rgo_powder/7.png",
            
        ],
        details: {
            highlight: "High conductivity, enhanced stability, engineered for advanced technology applications.",

            packagingSize: ["1 g", "100 g", "500 g", "1,000 g"],

            properties: {
                sheetSize: "≈ 4–6 μm",
                layer: "3–5",
                reductionProcess: "Chemical method",
                color: "Black",
                smell: "Odorless",
                waterSolubility: "Insoluble",
            },

            elementalAnalysis: {
                carbon: "81.9%",
                oxygen: "18.1%",
            },

            specifications: {
                electricalConductivity: "≈ 100–1,000 S/m",
                specificSurfaceArea: "500–700 m²/g",
                purity: ">99%",
            },

            applications: [
                "Supercapacitors",
                "Catalyst",
                "Solar energy",
                "Semiconductor chips",
                "Conductive film",
                "Computer memory",
                "Biomaterials",
                "Transparent conductive coating",
            ],
        },
    },
    {
        id: "003",
        name: "Graphene Oxide Dispersion in H₂O",
        description:
            "High-purity dispersion ready for advanced applications in coatings, composites, energy storage, and research. Ensures uniform performance and superior processability",
        image: "/products/grbt_brown/3.png",
        graph_img: [
            "/products/go_water/1.png",
            "/products/go_water/4.png",
            "/products/go_water/2.png",
            "/products/go_water/3.png",
        ],
        details: {
            highlight: "High conductivity, enhanced stability, engineered for advanced technology applications.",

            packagingSize: ["100 ml", "500 ml", "1,000 ml","5,000 ml","Concentration 8 mg/ml"],

            properties: {
                sheetSize: "≈ 4–6 μm",
                layer: "3–5",
                reductionProcess: "Hummer's method",
                color: "Brown",
                smell: "Odorless",
                waterSolubility: "Soluble",
            },

            elementalAnalysis: {
                carbon: "65.7%",
                oxygen: "34.3%",
            },

            specifications: {
                electricalConductivity: "100 S/m",
                specificSurfaceArea: "100–300 m²/g",
                purity: ">99%",
            },

            applications: [
                "Supercapacitors",
                "Catalyst",
                "Biomaterials",
                "Tensile strength and Elasticity",
                "Membranes and coating"
            ],
        },
    },
    {
        id: "004",
        name: "Reduced Graphene Oxide Dispersion in H₂O",
        description:
            "Highly conductive, stable dispersion engineered for advanced applications in electronics, energy storage, sensors, and high-performance composites. Ensures consistent quality and superior processability",
        image: "/products/grbt_yellow/3.png",
        graph_img: [
            "/products/rgo_water/6.png",
            "/products/rgo_water/9.png",
            "/products/rgo_water/7.png",
            "/products/rgo_water/8.png",
        ],
        details: {
            highlight: "High conductivity, enhanced stability, engineered for advanced technology applications.",

            packagingSize: ["100 ml", "500 ml", "1,000 ml","5,000 ml","Concentration 2 mg/ml"],

            properties: {
                sheetSize: "≈ 4–6 μm",
                layer: "3–5",
                reductionProcess: "Hummer's method",
                color: "Black",
                smell: "Odorless",
                waterSolubility: "Insoluble",
            },

            elementalAnalysis: {
                carbon: "81.9%",
                oxygen: "18.1%",
            },

            specifications: {
                electricalConductivity: "≈ 100–1,000 S/m",
                specificSurfaceArea: "500–700 m²/g",
                purity: ">99%",
            },

            applications: [
                "Supercapacitors",
                "Catalyst",
                "Solar energy",
                "Semiconductor chips",
                "Conductive film",
                "Computer memory",
                "Biomaterials",
                "Transparent conductive coating",
            ],
        },
    },
];
