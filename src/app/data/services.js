import {
  Ship,
  Plane,
  Truck,
  FileCheck2,
  PackageSearch,
} from "lucide-react";

export const services = [
  {
    id: "ocean",
    slug: "ocean-freight",
    title: "Ocean Freight",
    description:
      "Cost-effective sea freight solutions for full container and LCL shipments worldwide.",
    longDescription:
      "Our ocean freight service provides reliable and economical global shipping solutions for businesses of all sizes. Through strong partnerships with leading shipping lines, we offer flexible FCL and LCL options, optimized routing, and full documentation support. Whether you are shipping large volumes or smaller consolidated cargo, we ensure safe handling, competitive pricing, and predictable transit times across major global trade lanes.",
    heroImage: "/ocean.jpg",
    icon: Ship,
    features: [
      "Full Container Load (FCL) and Less than Container Load (LCL) solutions",
      "Global carrier partnerships ensuring competitive transit times and rates",
      "Door-to-port and door-to-door shipping options",
      "Cargo consolidation, tracking, and documentation management",
    ],
  },

  {
    id: "air",
    slug: "air-freight",
    title: "Air Freight",
    description:
      "Fast and reliable air cargo services for time-critical shipments.",
    longDescription:
      "Our air freight solutions are designed for speed, reliability, and flexibility. We manage urgent and high-value shipments through trusted airline partners and global airport networks. From pickup to delivery, we ensure priority handling, real-time communication, and full documentation support to guarantee your cargo arrives safely and on schedule.",
    heroImage: "/air.jpg",
    icon: Plane,
    features: [
      "Express and standard air cargo services worldwide",
      "Priority handling for urgent and time-critical shipments",
      "Secure packaging, handling, and airport coordination",
      "Real-time shipment visibility and status updates",
    ],
  },

  {
    id: "inland",
    slug: "inland-transportation",
    title: "Inland Transportation",
    description:
      "Secure inland transport connecting ports, airports, and final destinations.",
    longDescription:
      "We provide dependable inland transportation that connects ports, airports, warehouses, and final delivery locations. Our trucking partners and logistics network ensure safe cargo movement, flexible scheduling, and reliable last-mile delivery tailored to your operational needs.",
    heroImage: "/inland.jpg",
    icon: Truck,
    features: [
      "Reliable trucking network for port and airport connectivity",
      "Last-mile delivery to warehouses, factories, and distribution centers",
      "Flexible scheduling for full truckload (FTL) and less-than-truckload (LTL)",
      "Safe cargo handling with professional drivers and fleet partners",
    ],
  },

  {
    id: "customs",
    slug: "customs-clearance",
    title: "Customs Clearance",
    description:
      "End-to-end customs clearance ensuring compliance and smooth cargo release.",
    longDescription:
      "Our customs clearance experts simplify complex regulations and documentation requirements. We handle import and export procedures, duty calculations, and regulatory compliance to prevent delays and ensure a smooth cargo release process.",
    heroImage: "/customs.jpg",
    icon: FileCheck2,
    features: [
      "Import and export customs documentation management",
      "HS code classification and regulatory compliance support",
      "Duty and tax calculation assistance",
      "Fast clearance coordination with customs authorities",
    ],
  },

  {
    id: "importing",
    slug: "import-on-behalf",
    title: "Import on Behalf of Others",
    description:
      "We act as your importer of record, handling documentation, customs, and compliance.",
    longDescription:
      "Our Importer of Record (IOR) service allows businesses to ship products into new markets without establishing a local legal entity. We manage regulatory compliance, documentation, duties, taxes, and licensing requirements, enabling you to expand globally with confidence.",
    heroImage: "/importing-for-others.jpg",
    icon: PackageSearch,
    features: [
      "Acting as Importer of Record (IOR) for businesses without local presence",
      "Full compliance with local regulations and licensing requirements",
      "Handling permits, certifications, and regulatory documentation",
      "Managing duties, taxes, and customs procedures end-to-end",
    ],
  },
];