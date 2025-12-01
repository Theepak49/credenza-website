"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function About() {
    return (
        <section id="about" className="py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden relative">
                            <img
                                src="/images/about-team.jpg"
                                alt="Professional Team"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                            Trusted
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">About Us</h2>
                            <p className="text-muted-foreground text-lg">
                                We serves as a comprehensive business service hub, providing a range of legal services such as company registration, Translation, Notarization, and PRO Service Management to both small and large enterprises, as well as legal entities in Qatar.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">What We Do?</h3>
                            <p className="text-muted-foreground">
                                We provides superior quality services through an efficient and modern system. Our mission is to provide high-quality corporate public relations services to new and existing firms, as well as to advise and support people and corporations in establishing enterprises in Qatar and overseas.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">What We Deliver?</h3>
                            <p className="text-muted-foreground">
                                We are your most trusted legal services firm in Qatar and to provide fast and hassle-free services locally and internationally with local legislation and international standards consent.
                            </p>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-xl shadow-md">
                            <p className="font-semibold text-primary mb-2">
                                WE HAVE SUCCESSFULLY ASSISTED A LARGE NUMBER OF INVESTORS AND ENTREPRENEURS IN ESTABLISHING BUSINESSES IN QATAR.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                We are outsourcing PRO services to efficiently manage all the legal obligations of your company. We can provide cost-effective, time-saving, and minimizes potential complications or risks in your business endeavors.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
