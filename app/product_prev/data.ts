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
            "/products/grbg_brown/1.png",
            "/products/grbg_brown/2.png",
            "/products/grbg_brown/3.png",
            "/products/grbg_brown/4.png",
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
            "/products/grbg_gray/1.png",
            "/products/grbg_gray/2.png",
            "/products/grbg_gray/3.png",
            "/products/grbg_gray/4.png",
            
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
        image: "/products/go_water/GO_1000ml.png", //"/products/rgo_water/rGO_1000ml.png",
        graph_img: [
            "/products/grbt_brown/1.png",
            "/products/grbt_brown/2.png",
            "/products/grbt_brown/3.png",
            "/products/grbt_brown/4.png",
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
        image: "/products/rgo_water/rGO_1000ml.png", //"/products/go_water/GO_1000ml.png",
        graph_img: [
            "/products/grbt_yellow/1.png",
            "/products/grbt_yellow/2.png",
            "/products/grbt_yellow/3.png",
            "/products/grbt_yellow/4.png",
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
