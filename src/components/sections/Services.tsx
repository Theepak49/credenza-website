"use client"

import { motion } from "framer-motion"
import { Building2, FileText, Globe, Stamp, Users, Briefcase } from "lucide-react"

const services = [
    {
        title: "Company Formation",
        description: "Start your dream company setup with low cost & fast processing.",
        icon: Building2,
    },
    {
        title: "PRO Services",
        description: "Documenting all the paper works based on your specific needs.",
        icon: FileText,
    },
    {
        title: "Local Sponsorship",
        description: "Qatari sponsorship tailored to your business needs.",
        icon: Users,
    },
    {
        title: "Visa Services",
        description: "Your trusted partner for every professional visa service.",
        icon: Briefcase,
    },
]

export function Services() {
    return (
        <section id="services" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
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
                        Choose from our extended range of services designed to help your business thrive in Qatar.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="bg-background p-8 rounded-xl shadow-md hover:shadow-xl transition-all group"
                        >
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
