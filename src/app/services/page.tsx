
"use client"

import { Services } from "@/components/sections/Services";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Globe, ShieldCheck, Clock, Zap, Smile, BarChart, Lightbulb, Award, BadgeCheck, FileCheck, Stamp, Shield, DollarSign } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <div className="pt-20">

            <section id="services" className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
                        >
                            Our Services
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-muted-foreground max-w-2xl mx-auto"
                        >
                            We offer comprehensive consultancy services tailored to meet the needs of businesses operating in Qatar.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Company Formation Section */}
            <section className="py-20 bg-white" id="company-formation">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <Reveal>
                            <div>
                                <h2 className="text-3xl font-bold mb-6">COMPANY FORMATION IN QATAR</h2>
                                <p className="text-muted-foreground mb-6">
                                    Planning to establish a business presence in Qatar? Our expert consultants at Credenza provide comprehensive guidance throughout the company registration process. Whether you're launching a small venture or a large enterprise, our professional team assists with all aspects of business registration and establishment in Qatar.
                                </p>
                                <p className="text-muted-foreground mb-8">
                                    With Qatar's strategic location, business-friendly policies, and growing economy, now is the perfect time to establish your company in this premier business hub. Let our experienced professionals guide you through every step of the process.
                                </p>
                                <p className="text-muted-foreground mb-8">
                                    If you’re considering starting your own business in Qatar, or seeking professional assistance, the team at Credenza is here to help. Our experienced professionals are committed to guiding you through the registration process, resolving challenges, and providing seamless business setup services—all at the most competitive market rates.
                                </p>

                                <div className="bg-secondary text-secondary-foreground p-8 rounded-xl">
                                    <h3 className="text-xl font-bold mb-4 text-white">Types of business structures for company formation in Qatar</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Limited Liability company (LLC) ",
                                            "QFZ – Qatar Free Zone ",
                                            "100% Foreign Ownership company",
                                            "QFC – Qatar Financial Center",
                                            "Foreign company Branch or Representative office"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 text-white" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-4">
                                        We guide you through every step, saving time and avoiding unnecessary delays.
                                    </p>
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

            {/* Section 1: How to set up a Business in Qatar */}
            <section className="py-20 bg-white" id="business-setup">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <Reveal delay={0.2}>
                            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/images/business_setup_qatar.png"
                                    alt="Company Formation Services"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </Reveal>

                        <Reveal>
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-primary">How to set up a Business in Qatar</h2>
                                <p className="text-muted-foreground mb-6">
                                    Company registration in Qatar starts by defining your business plan. Here’s a step by step processing about how to register a company in Qatar.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Select your Business activity and Business Structure",
                                        "Choose and Reserve a Trade Name with the Ministry of Commerce and Industry",
                                        "Draft and Sign the Articles of Association",
                                        "Commercial Registration application",
                                        "Register and Obtain a Commercial Permit",
                                        "Register with the Immigration Department for an establishment card",
                                        "Register with the Ministry of Labor for visa processing"
                                    ].map((step, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-sm font-bold text-primary">{index + 1}</span>
                                            </div>
                                            <span className="text-muted-foreground">{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Section 2: Local Sponsor Arrangement */}
            <section className="py-20 bg-muted/30" id="local-sponsor-arrangement">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <Reveal>
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-primary">Local Sponsor Arrangement</h2>
                                <p className="text-muted-foreground mb-6">
                                    We offer trustworthy and legally compliant local sponsor arrangement services in Qatar.
                                </p>
                                <h3 className="text-xl font-bold mb-4 text-foreground">What We Offer:</h3>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "Reliable Qatari sponsors",
                                        "Transparent sponsorship agreements",
                                        "Full legal compliance",
                                        "Confidential and professional handling"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-muted-foreground font-medium">
                                    Our solutions ensure peace of mind and long-term business security.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/images/local_sponsor_qatar.png"
                                    alt="Local Sponsor Arrangement"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Section 3: Branding Services */}
            <section className="py-20 bg-white" id="branding-services">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <Reveal delay={0.2}>
                            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden order-1 lg:order-2">
                                <img
                                    src="/images/branding_services_qatar.png"
                                    alt="Branding Services"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl font-bold mb-6 text-primary">Branding Services</h2>
                                <p className="text-muted-foreground mb-6">
                                    Build a strong brand presence with our professional branding solutions.
                                </p>
                                <h3 className="text-xl font-bold mb-4 text-foreground">Branding Solutions:</h3>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "Company name approval assistance",
                                        "Brand identity development",
                                        "Logo and corporate branding support"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <Lightbulb className="h-5 w-5 text-primary" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-muted-foreground font-medium">
                                    We help your business stand out in the competitive Qatar market.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Section 4: PRO Services in Qatar */}
            <section className="py-20 bg-muted/30" id="pro-services">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <Reveal>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl font-bold mb-6 text-primary">PRO Services in Qatar</h2>
                                <p className="text-muted-foreground mb-6">
                                    Our PRO services ensure smooth coordination with government departments and authorities.
                                </p>
                                <h3 className="text-xl font-bold mb-4 text-foreground">PRO Services Include:</h3>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "Visa processing",
                                        "Immigration & labor services",
                                        "Document attestation",
                                        "License renewal",
                                        "Government approvals"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <FileText className="h-5 w-5 text-primary" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-muted-foreground font-medium">
                                    Let us handle the paperwork while you focus on growing your business.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden order-1 lg:order-2">
                                <img
                                    src="/images/pro_services_qatar.png"
                                    alt="PRO Services in Qatar"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Section 5: Trademark Registration in Qatar */}
            <section className="py-20 bg-white" id="trademark-registration">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <Reveal delay={0.2}>
                            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden order-1 lg:order-2">
                                <img
                                    src="/images/trademark_registration_qatar.png"
                                    alt="Trademark Registration in Qatar"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </Reveal>
                        <Reveal>
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-primary">Trademark Registration in Qatar</h2>
                                <p className="text-muted-foreground mb-6">
                                    Protect your brand identity with our trademark registration services.
                                </p>
                                <h3 className="text-xl font-bold mb-4 text-foreground">Trademark Services:</h3>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "Trademark search and consultation",
                                        "Application filing",
                                        "Follow-up with authorities",
                                        "Legal compliance assistance"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <ShieldCheck className="h-5 w-5 text-primary" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-muted-foreground font-medium">
                                    We ensure your brand is legally protected under Qatar law.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
}

