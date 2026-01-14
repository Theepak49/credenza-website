"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const slides = [
    {
        id: 1,
        image: "/images/hero-credenza-qatar-1.png",
        title: (
            <>
                Your Trusted Partner for <br className="hidden sm:block" />
                <span className="text-white drop-shadow-lg">Business Setup in Qatar</span>
            </>
        ),
        subtitle: "We provide comprehensive solutions for company formation, PRO services, and legal translation. Start your business journey with Credenza today.",
        cta: "Get Started"
    },
    {
        id: 2,
        image: "/images/hero_company_services.png",
        title: (
            <>
                Comprehensive <br className="hidden sm:block" />
                <span className="text-white drop-shadow-lg">Company Services</span>
            </>
        ),
        subtitle: "From licensing to office setup, we handle every detail of your business operations in Qatar, ensuring a smooth and compliant process.",
        cta: "View Services"
    },
    {
        id: 3,
        image: "/images/pro_services_qatar.png",
        title: (
            <>
                Expert PRO & <br className="hidden sm:block" />
                <span className="text-white drop-shadow-lg">Government Liaison</span>
            </>
        ),
        subtitle: "Streamline your visa processing, document clearance, and government approvals with our experienced team of Public Relations Officers.",
        cta: "Contact Us"
    }
]

export function Hero() {
    const router = useRouter()
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [currentSlide])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-primary/20 text-white">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={slides[currentSlide].image}
                        alt="Background"
                        className="h-full w-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20 mix-blend-multiply" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute cursor-pointer left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-8 w-8" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute cursor-pointer right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
                aria-label="Next slide"
            >
                <ChevronRight className="h-8 w-8" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-6" : "bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 py-20 text-center relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            {slides[currentSlide].title}
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/90">
                            {slides[currentSlide].subtitle}
                        </p>

                        <div className="mt-10 flex justify-center gap-4">
                            <Button size="lg" className="gap-2 cursor-pointer hover:bg-white hover:text-primary transition duration-300 ease-in-out" onClick={() => router.push('/contact')}>
                                {slides[currentSlide].cta} <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
