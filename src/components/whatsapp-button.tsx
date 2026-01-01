"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
    const phoneNumber = "905000000000"; // Placeholder, update as needed
    const message = "Merhaba, randevu ve bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ y: -5 }}
        >
            <div className="absolute inset-0 rounded-full bg-[#25D366] pulse-ring" />
            <MessageCircle className="h-7 w-7 relative z-10" />
            <span className="sr-only">WhatsApp ile İletişime Geç</span>
        </motion.a>
    );
}
