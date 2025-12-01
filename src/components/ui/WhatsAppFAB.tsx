"use client"

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppFAB() {
    // Replace with your actual WhatsApp number (include country code without + or -)
    const whatsappNumber = "97412345678"; // Example: Qatar number
    const message = encodeURIComponent("Hello! I would like to inquire about your services.");

    return (
        <Link
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat with us on WhatsApp
            </span>
        </Link>
    );
}
