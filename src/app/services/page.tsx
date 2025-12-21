
"use client"

import { Services } from "@/components/sections/Services";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle, FileText, Globe, ShieldCheck, Clock, Zap, Smile, BarChart, Lightbulb, Award, BadgeCheck, FileCheck, Stamp, Shield, DollarSign } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
    const languages = [
        "Afrikaans", "Cambodian", "Estonian", "Greek", "Javanese", "Malayalam", "Zulu", "Slovenian", "Turkish",
        "Albanian", "Cantonese", "Ethiopian", "Haitian Creole", "Kannada", "Malaysian", "Portuguese", "Somali", "Turkmen",
        "Arabic", "Catalan", "Farsi", "Hausa", "Kazakh", "Mandarin", "Punjabi", "Spanish", "Ukrainian",
        "Armenian", "Chinese", "Filipino", "Hebrew", "Khmer", "Marathi", "Romanian", "Swahili", "Urdu",
        "Azerbaijani", "Croatian", "Finnish", "Hindi", "Korean", "Moldavian", "Russian", "Swedish", "Uzbek",
        "Belarussian", "Czech", "Flemish", "Hungarian", "Kurdish", "Mongolian", "Serbian", "Tagalog", "Vietnamese",
        "Bengali", "Danish", "French", "Indian", "Lao", "Myanmar", "Tajik", "Welsh",
        "Bosnian", "Dari", "Fulani", "Irish", "Latvian", "Norwegian", "Srilankan", "Tamil", "Xhosa",
        "Bulgarian", "Dutch", "Georgian", "Italian", "Lithuanian", "Pashto", "Sinhalese", "Telugu", "Yoruba",
        "Burmese", "English", "German", "Japanese", "Macedonian", "Persian", "Slovak", "Thai"
    ];

    const proServicesList = [
        "Issuance/renewal/amendment of commercial registration",
        "Issuance/renewal/amendment of Municipality License",
        "Issuance/Renewal of WLL License",
        "Adding/removing partners in the CR",
        "Adding/removing commercial activity",
        "Processing of Labor documents",
        "Processing of Immigration documents",
        "Contact with Economic and other government departments",
        "Assistance for Trademark Registration",
        "Assistance for Company Classification services",
        "Assistance for government, semi-government and private-sector work",
        "Assistance for all types of Visa Services",
        "Assistance for women work permits through husband sponsorship",
        "Assistance for all certificate attestation",
        "Assistance for Embassy and Foreign Affairs attestation",
        "Assistance for Police Clearance Certificate attestation",
        "Assistance for Import / Export / Company Licenses attestation",
        "Assistance for Legal Translation services",
        "Assistance for Changing Trade Name"
    ];

    return (
        <div className="pt-20">
            <Services />

            {/* Company Formation Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <Reveal>
                            <div>
                                <h2 className="text-3xl font-bold mb-6">COMPANY FORMATION IN QATAR</h2>
                                <p className="text-muted-foreground mb-6">
                                    As a foreigner, choosing the right business in Qatar will be complex and time-consuming.
                                    But you don’t have to worry when we are here to listen and help you. As a government-authorized
                                    and comprehensive business solutions provider, we bring a decade of expertise to company registration services in Qatar.
                                </p>
                                <p className="text-muted-foreground mb-8">
                                    There is a wide range of businesses available as per the demand of an investor such as
                                    Limited Liability Company, 100% foreign investment Company, 100% Foreign Ownership in Qatar Free Zone,
                                    100% Incorporation in Qatar Financial Center, Foreign Company - Representative Office Registration
                                    and Foreign company branch registration.
                                </p>

                                <div className="bg-secondary text-secondary-foreground p-8 rounded-xl">
                                    <h3 className="text-xl font-bold mb-4 text-white">WE PROVIDE BUSINESS SETUP & PRO SERVICES IN QATAR</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "100% Foreign Ownership",
                                            "Complete Legal Support",
                                            "Regulatory and financial incentives",
                                            "Fast and streamlined processes"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 text-white" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/images/company-formation.jpg"
                                    alt="Company Formation Services"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <h3 className="text-2xl font-bold mb-2">Do you have an idea or a business plan?</h3>
                                        <p>A government-authorized agency for company registration in Qatar. We will drive full support and hassle-free services to start a business in Qatar.</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Translation Services Section */}
            {/* <section className="py-20 bg-secondary text-secondary-foreground">
                <div className="container mx-auto px-4"> 
                    <Reveal>
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12">
                            <img
                                src="/images/translation-services.jpg"
                                alt="Translation Services"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r flex items-center justify-center text-white p-8">
                                <div className="text-center max-w-3xl">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2">TRANSLATION SERVICES</h2>
                                    <h3 className="text-xl font-bold mb-4 text-white/80">BEST PRICED TRANSLATION SERVICES</h3>
                                    <p className="text-white/90">
                                        We Ensure the Highest Level of Quality for Best – Priced Certified Translation Services.
                                        We are doing translation services to help our individual and corporate clients for overcoming cultural and linguistic barriers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
                            <div className="flex flex-col items-center">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <Zap className="h-8 w-8" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Fast</h4>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <CheckCircle className="h-8 w-8" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Accurate</h4>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <ShieldCheck className="h-8 w-8" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Reliable</h4>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="bg-white/5 p-8 rounded-2xl shadow-xl shadow-black/20">
                            <h4 className="text-lg font-bold mb-6 text-center">We assist you for any type of content to be translated in various languages includes:</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                                {languages.map((lang, index) => (
                                    <div key={index} className="bg-black/20 p-2 rounded text-xs text-center hover:bg-primary/20 transition-colors cursor-default">
                                        {lang}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal> 
                </div>
            </section> */}

            {/* Corporate PRO Services */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <Reveal>
                            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden">
                                <img
                                    src="/images/pro-services.jpg"
                                    alt="PRO Services"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br flex items-center justify-center p-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-black/80 leading-tight">FOCUS ON YOUR CORE BUSINESS PLANS AND OPERATION & WE WILL CLEAR THE PATH WITH STREAMLINED LICENSE, VISA, & GOVERNMENT SERVICES</h2>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-primary">CORPORATE PRO SERVICES</h2>
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="text-center">
                                        <Lightbulb className="h-8 w-8 mx-auto text-primary mb-2" />
                                        <span className="font-bold text-sm">Innovation</span>
                                    </div>
                                    <div className="text-center">
                                        <BarChart className="h-8 w-8 mx-auto text-primary mb-2" />
                                        <span className="font-bold text-sm">Profitability</span>
                                    </div>
                                    <div className="text-center">
                                        <Smile className="h-8 w-8 mx-auto text-primary mb-2" />
                                        <span className="font-bold text-sm">Customer Satisfaction</span>
                                    </div>
                                    <div className="text-center">
                                        <Clock className="h-8 w-8 mx-auto text-primary mb-2" />
                                        <span className="font-bold text-sm">Time Savings</span>
                                    </div>
                                </div>
                                <p className="text-muted-foreground mb-6">
                                    QATAR’S MOST RELIABLE PRO SERVICE EXPERTS HELP CUSTOMERS THROUGH THE MULTIPLE STAGES OF BUSINESS SETUP AND VARIOUS DOCUMENTATION.
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    PRO services are necessary for all organizations to handle various tasks and activities related to business startup or managing a growing enterprise. To ease the burden of bureaucracy, we guarantee to provide corporate PRO services as Case to Case Basis, Retainer Agreement Basis, or Monthly/Project Basis.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.3}>
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold mb-8 text-center">Our PRO Service List</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {proServicesList.map((service, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all group"
                                    >
                                        <div className="h-5 w-5 mt-0.5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <CheckCircle className="h-3.5 w-3.5 text-primary" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground leading-relaxed">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4">CHOOSING THE BEST PRO SERVICES PROVIDER IN QATAR</h3>
                            <p className="text-muted-foreground mb-4">
                                We are a trustworthy partner in facilitating business setup in Qatar, proficiently handling all necessary procedures, including obtaining approvals from diverse government authorities, document attestation, opening bank accounts, providing visa services, and drafting documents in the shortest possible time.
                            </p>
                            <p className="text-muted-foreground">
                                Whether you are a Free Zone or a Mainland business, we cover all your government-related PRO services in Qatar in a cost-effective way. Contact us today to receive a Corporate PRO Services proposal customized specifically for your company.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Certificate & Notary Attestation - Modern Design */}
            {/* <section className="py-24 bg-gradient-to-b from-muted/30 to-white">
                <div className="container mx-auto px-4"> 
                    <Reveal>
                        <div className="text-center mb-20">
                            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
                                <span className="text-primary font-bold text-sm uppercase tracking-wider">Professional Services</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Certificate & Notary <span className="text-primary">Attestation</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Your trusted partner for fast and hassle-free certificate attestation and notary services in Qatar, ensuring complete legal compliance and authenticity.
                            </p>
                        </div>
                    </Reveal>
 
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16"> 
                        <Reveal>
                            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow h-full flex flex-col">
                                
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-xl flex items-center justify-center border-2 border-primary/20 shrink-0">
                                        <BadgeCheck className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground leading-tight">Certificate Attestation</h3>
                                </div>

                                <p className="text-muted-foreground leading-relaxed mb-6 text-sm flex-grow">
                                    We offer comprehensive certificate attestation services with years of experience and a high level of credibility.
                                </p>

                                <div className="space-y-4"> 
                                    <div className="bg-gradient-to-r p-4 rounded-xl">
                                        <p className="text-white font-bold text-sm text-center">
                                            ✓ Authenticate & Legalize Your Documents!
                                        </p>
                                    </div>
 
                                    <div>
                                        <h4 className="font-bold text-foreground mb-3 text-xs uppercase tracking-wide">Document Types</h4>
                                        <div className="grid grid-cols-1 gap-3">
                                            {[
                                                { icon: FileCheck, label: "Educational Certificates", color: "from-blue-500 to-cyan-500" },
                                                { icon: FileText, label: "Non-Educational Certificates", color: "from-purple-500 to-pink-500" },
                                                { icon: Award, label: "Commercial Certificates", color: "from-orange-500 to-red-500" }
                                            ].map((cert, idx) => (
                                                <div key={idx} className="group flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted shadow-sm hover:shadow-md transition-all">
                                                    <div className={`w-8 h-8 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center shadow-sm shrink-0`}>
                                                        <cert.icon className="w-4 h-4 text-white" />
                                                    </div>
                                                    <span className="font-semibold text-sm text-foreground">{cert.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
 
                        <Reveal delay={0.1}>
                            <div className="bg-gradient-to-br rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow text-white h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 shrink-0">
                                        <Stamp className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Notary Attestation</h3>
                                </div>

                                <p className="text-white/90 mb-8 leading-relaxed text-sm flex-grow">
                                    Expert notarization services including signature authentication, power of attorney, immigration documents, and more.
                                </p>

                                <div className="space-y-3 mt-auto">
                                    {[
                                        { title: "Authorized Agency", icon: Shield },
                                        { title: "Fast Processing", icon: Clock },
                                        { title: "Affordable Rates", icon: DollarSign },
                                        { title: "100% Compliance", icon: CheckCircle }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                                            <item.icon className="w-5 h-5 text-white shrink-0" />
                                            <span className="font-semibold text-sm">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
 
                        <Reveal delay={0.2}>
                            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl group">
                                <Image
                                    src="/images/qatar-business.jpg"
                                    alt="Trusted Business Services in Qatar"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8 z-10">
                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="inline-block px-4 py-1 bg-primary rounded-full mb-4">
                                            <span className="text-white font-bold text-xs uppercase tracking-wider">Why Choose Us</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                                            Trusted by Businesses Across Qatar
                                        </h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            Fast, reliable, and legally compliant attestation services for all your business and personal documentation needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section> */}
        </div>
    );
}

