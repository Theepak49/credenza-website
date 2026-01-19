"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Youtube, ChevronDown } from "lucide-react"
import { WhatsApp } from "@/components/icons/WhatsApp"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Company Formation", href: "/services#company-formation" },
        { name: "Services", href: "/services", hasDropdown: true },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        // { name: "Feedback", href: "/feedback" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    const serviceItems = [
        { name: "Company Formation", href: "/services#company-formation" },
        { name: "Local Sponsor Arrangement", href: "/services#local-sponsor-arrangement" },
        { name: "PRO Services", href: "/services#pro-services" },
        { name: "Legal Services", href: "/services#business-setup" },
        { name: "Trademark Registration", href: "/services#trademark-registration" }
    ]

    return (
        <>
            {/* Top Bar */}
            <div className="bg-secondary text-secondary-foreground py-2 text-xs hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            <span><a href={`tel:+97430129065`} aria-label="Call Credenza Qatar">
                                +974 3012 9065
                            </a></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-3 w-3" />
                            <span><a href={`mailto:info@credenza.com`} className="hover:text-white transition-colors">
                                info@credenza.com
                            </a></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href="https://wa.me/97430129065" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="WhatsApp">
                            <WhatsApp className="h-4 w-4" />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
                            <Facebook className="h-4 w-4" />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                            <Instagram className="h-4 w-4" />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                            <Linkedin className="h-4 w-4" />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Twitter">
                            <Twitter className="h-4 w-4" />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="YouTube">
                            <Youtube className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header
                className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-300",
                    scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-white shadow-md py-4"
                )}
            >
                <div className="container mx-auto flex items-center justify-between px-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative h-12 w-40">
                            <Image src="/logo.png" alt="Credenza Logo" fill className="object-contain" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                                        pathname === item.href ? "text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
                                    <span className={cn(
                                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                                        pathname === item.href ? "w-full" : ""
                                    )} />
                                </Link>

                                {/* Desktop Dropdown */}
                                {item.hasDropdown && (
                                    <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-2">
                                            {serviceItems.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link href="/contact">
                            <Button className="cursor-pointer">Get Started</Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="flex items-center p-2 md:hidden text-foreground cursor-pointer hover:bg-white hover:text-primary transition duration-300 ease-in-out"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-background md:hidden overflow-hidden shadow-2xl"
                        >
                            <div className="flex flex-col p-4 space-y-2">
                                {navItems.map((item) => (
                                    <div key={item.name}>
                                        {item.hasDropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => setServicesOpen(!servicesOpen)}
                                                    className={cn(
                                                        "flex items-center justify-between w-full text-left text-sm font-medium hover:text-primary py-2 cursor-pointer",
                                                        pathname === item.href ? "text-primary" : "text-muted-foreground"
                                                    )}
                                                >
                                                    {item.name}
                                                    <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen ? "rotate-180" : "")} />
                                                </button>
                                                <AnimatePresence>
                                                    {servicesOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="overflow-hidden pl-4"
                                                        >
                                                            {serviceItems.map((service) => (
                                                                <Link
                                                                    key={service.name}
                                                                    href={service.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="block py-2 text-sm text-muted-foreground hover:text-primary"
                                                                >
                                                                    {service.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "block text-sm font-medium hover:text-primary py-2",
                                                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-2">
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                                        <Button className="w-full cursor-pointer hover:bg-white hover:text-primary transition duration-300 ease-in-out">Get Started</Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    )
}
