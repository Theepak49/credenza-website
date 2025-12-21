import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="relative h-12 w-40 bg-white p-2 rounded-md">
                            <Image src="/logo.png" alt="Credenza Logo" fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <p className="text-sm text-gray-400">
                            Your trusted partner for company formation and business setup.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-white">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Company Formation</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">PRO Services</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Visa Services</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Auditing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-white">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-white">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Doha, Qatar</li>
                            <li>info@credenza.com</li>
                            <li>+974 1234 5678</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Credenza Business Consultancy. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
