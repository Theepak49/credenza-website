"use client"

import { About } from "@/components/sections/About";
import { Reveal } from "@/components/ui/Reveal";
import { User, Shield, Scale, Lightbulb, Handshake, Award, Building, Gavel, Banknote, Globe } from "lucide-react";

export default function AboutPage() {
    const values = [
        { icon: User, title: "CUSTOMER FOCUS", desc: "Prioritizing customer satisfaction and understanding their needs" },
        { icon: Shield, title: "SAFETY", desc: "Prioritizing the well-being of employees and stakeholders" },
        { icon: Scale, title: "INTEGRITY", desc: "Upholding honesty, ethics, and transparency in all dealings" },
        { icon: Lightbulb, title: "INNOVATION", desc: "Encouraging creativity, adaptability, and a willingness to embrace new ideas" },
        { icon: Handshake, title: "RESPECT", desc: "Valuing diversity, treating others with dignity, and fostering a positive workplace" },
        { icon: Award, title: "EXCELLENCE", desc: "Striving for high performance, quality, and continuous improvement" },
    ];

    const reasons = [
        { icon: Globe, title: "Diverse Economy", desc: "Access to a growing and diversified market." },
        { icon: Gavel, title: "Legal Framework", desc: "Robust legal system protecting investors." },
        { icon: Banknote, title: "Tax Regime", desc: "Attractive tax incentives and policies." },
        { icon: Building, title: "Free Zones", desc: "100% ownership options in Free Zones." },
    ];

    return (
        <div className="pt-20">
            <About />

            {/* Company Values Section */}
            <section className="py-20 bg-secondary text-secondary-foreground">
                <div className="container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">COMPANY VALUES</h2>
                            <p className="max-w-3xl mx-auto text-gray-400">
                                We specialize in delivering unparalleled solutions in Notary, Translation, and Company Formation, PRO services.
                                Established with a commitment to excellence, we strive to provide exceptional services with integrity, professionalism,
                                and a dedication to meeting the unique needs of our clients.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <div className="bg-primary/5 backdrop-blur-sm shadow-lg hover:shadow-xl p-8 rounded-xl text-center hover:bg-primary/10 transition-all group">
                                    <div className="h-14 w-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <value.icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Setup Business Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <Reveal>
                            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/images/qatar-business.jpg"
                                    alt="Qatar Business District"
                                    className="h-full w-full object-cover"
                                />
                                {/* Overlay with text */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-white p-8 text-center">
                                    <div>
                                        <h3 className="text-4xl font-bold mb-4">Why Qatar?</h3>
                                        <p className="text-lg">A hub for innovation and growth.</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Why Setup Business in Qatar?</h2>
                                <p className="text-muted-foreground mb-8">
                                    The Qatari Government is enhancing and streamlining business setup procedures to attract foreign investors
                                    and entrepreneurs from diverse nations. As your reliable incorporation specialists, we shoulder the ultimate
                                    responsibility for facilitating your business setup and company formation in Qatar.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                    {reasons.map((reason, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                <reason.icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{reason.title}</h4>
                                                <p className="text-sm text-muted-foreground">{reason.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-muted p-6 rounded-xl">
                                    <h4 className="font-bold mb-4">Set up your business with the following licensing platforms:</h4>
                                    <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
                                        <span className="bg-white px-3 py-1 rounded-full shadow-sm">MOCI</span>
                                        <span className="bg-white px-3 py-1 rounded-full shadow-sm">Qatar Free Zone</span>
                                        <span className="bg-white px-3 py-1 rounded-full shadow-sm">Qatar Financial Center</span>
                                        <span className="bg-white px-3 py-1 rounded-full shadow-sm">Media City</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
