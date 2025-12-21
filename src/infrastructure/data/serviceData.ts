/**
 * Service Data Source
 * Static data for services (can be replaced with API calls later)
 */

import { Building2, FileText, Globe, Stamp, Scale, Briefcase } from "lucide-react";
import { ServiceCategory } from "@/domain/entities/types";

export const servicesData = [
    {
        id: "company-formation",
        title: "Company Formation",
        description: "Start your dream company setup with low cost & fast processing. We provide complete legal support for 100% foreign ownership.",
        icon: Building2,
        image: "/images/company-formation.jpg",
        link: "/services#company-formation",
        category: ServiceCategory.COMPANY_FORMATION,
        features: [
            "100% Foreign Ownership",
            "Fast Processing",
            "Complete Legal Support",
            "MOCI Approved",
        ],
        benefits: [
            "Low cost setup",
            "Expert guidance",
            "Hassle-free process",
            "Full compliance",
        ],
    },
    {
        id: "pro-services",
        title: "PRO Services",
        description: "Documenting all paperwork based on your specific needs. Qatar's most reliable PRO service experts at your service.",
        icon: FileText,
        image: "/images/pro-services.jpg",
        link: "/services#pro-services",
        category: ServiceCategory.PRO_SERVICES,
        features: [
            "Document Processing",
            "Visa Services",
            "License Renewal",
            "Government Relations",
        ],
        benefits: [
            "Save time",
            "Expert handling",
            "Reliable service",
            "Complete support",
        ],
    },
    {
        id: "certificate-attestation",
        title: "Certificate Attestation",
        description: "Fast and hassle-free certificate and notary attestation services. Authenticate & legalize your documents with us.",
        icon: Stamp,
        image: "/images/certificate-attestation.jpg",
        link: "/services#attestation",
        category: ServiceCategory.ATTESTATION,
        features: [
            "Document Attestation",
            "Embassy Services",
            "Fast Processing",
            "Secure Handling",
        ],
        benefits: [
            "Quick turnaround",
            "Secure process",
            "Expert assistance",
            "Hassle-free",
        ],
    },
    {
        id: "business-support",
        title: "Business Support Services",
        description: "Comprehensive business support services to help your company thrive in Qatar.",
        icon: Briefcase,
        image: "/images/hero-business-qatar.jpg",
        link: "/services#business-support",
        category: ServiceCategory.BUSINESS_SUPPORT,
        features: [
            "Business Consulting",
            "Market Research",
            "Strategic Planning",
            "Ongoing Support",
        ],
        benefits: [
            "Expert advice",
            "Growth support",
            "Local knowledge",
            "Continuous assistance",
        ],
    },
    {
        id: "translation-services",
        title: "Translation Services",
        description: "Fast & affordable certified translation services. We ensure the highest level of quality for best-priced translation.",
        icon: Globe,
        image: "/images/translation-services.jpg",
        link: "/services#translation",
        category: ServiceCategory.TRANSLATION,
        features: [
            "Certified Translations",
            "Multiple Languages",
            "Fast Turnaround",
            "Competitive Pricing",
        ],
        benefits: [
            "Accurate translations",
            "Professional service",
            "Quick delivery",
            "Affordable rates",
        ],
    },
    {
        id: "notary-services",
        title: "Notary Services",
        description: "Professional notary services for all your legal documentation needs in Qatar.",
        icon: Scale,
        image: "/images/notary-services.jpg",
        link: "/services#notary",
        category: ServiceCategory.NOTARY,
        features: [
            "Legal Notarization",
            "Document Verification",
            "Certified Copies",
            "Professional Service",
        ],
        benefits: [
            "Legal compliance",
            "Trusted service",
            "Fast processing",
            "Expert notaries",
        ],
    },
];
