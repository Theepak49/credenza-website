"use client"

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
    const openings = [
        {
            id: 1,
            title: "Business Consultant",
            department: "Consulting",
            location: "Doha, Qatar",
            type: "Full-time",
            description: "Help clients navigate business setup and regulatory requirements in Qatar."
        },
        {
            id: 2,
            title: "Certified Translator",
            department: "Translation",
            location: "Doha, Qatar",
            type: "Full-time",
            description: "Provide professional translation services across multiple languages."
        },
        {
            id: 3,
            title: "PRO Services Specialist",
            department: "Government Relations",
            location: "Doha, Qatar",
            type: "Full-time",
            description: "Manage government documentation and liaison services for clients."
        },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-secondary text-secondary-foreground">
                <div className="container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
                            <p className="text-lg text-gray-300">
                                Build your career with Qatar's trusted business consultancy.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                At Credenza, we believe in empowering our team members to grow professionally while making a real impact.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            { title: "Growth Opportunities", desc: "Continuous learning and career development" },
                            { title: "Competitive Benefits", desc: "Attractive compensation and benefits package" },
                            { title: "Dynamic Environment", desc: "Work with diverse clients and challenging projects" }
                        ].map((benefit, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <div className="text-center p-6 bg-gray-50 rounded-lg">
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground">{benefit.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
                    </Reveal>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {openings.map((job, index) => (
                            <Reveal key={job.id} delay={index * 0.1}>
                                <div className="bg-white shadow-lg hover:shadow-xl rounded-lg p-6 transition-all group">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {job.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Briefcase className="h-4 w-4" />
                                                    {job.department}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="h-4 w-4" />
                                                    {job.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="h-4 w-4" />
                                                    {job.type}
                                                </span>
                                            </div>
                                        </div>
                                        <Button className="flex items-center gap-2 shrink-0 cursor-pointer hover:bg-white hover:text-primary transition duration-300 ease-in-out">
                                            Apply Now
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.4}>
                        <div className="text-center mt-12">
                            <p className="text-muted-foreground mb-4">
                                Don't see a position that fits? We're always looking for talented individuals.
                            </p>
                            <Link href="/contact">
                                <Button variant="outline" className="cursor-pointer">Send Us Your CV</Button>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
