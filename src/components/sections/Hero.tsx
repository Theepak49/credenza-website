"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export function Hero() {
    const router = useRouter()

    return (
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-secondary px-4 py-20 text-white">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/images/hero-business-qatar.jpg"
                    alt="Business in Qatar"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90" />
            </div>
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-white/10 opacity-20 blur-[100px]"></div>

            <div className="container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Your Trusted Partner for <br className="hidden sm:block" />
                        <span className="text-white drop-shadow-lg">Business Setup in Qatar</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/90"
                >
                    We provide comprehensive solutions for company formation, PRO services, and legal translation. Start your business journey with Credenza today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 flex justify-center gap-4"
                >
                    <Button size="lg" className="gap-2" onClick={() => router.push('/contact')}>
                        Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button size="lg" className="gap-2" variant="secondary" onClick={() => router.push('/services')}>
                        Our Services
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
