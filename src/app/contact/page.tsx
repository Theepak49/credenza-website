"use client"

import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";

export default function ContactPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-secondary text-secondary-foreground">
                <div className="container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                            <p className="text-lg text-gray-300">
                                Ready to start your business in Qatar? Contact us today for a free consultation.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Contact />
        </div>
    );
}
