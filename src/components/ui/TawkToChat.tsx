"use client"

import { useEffect } from "react";

export function TawkToChat() {
    useEffect(() => {
        // Tawk.to script integration
        // Replace 'YOUR_PROPERTY_ID' and 'YOUR_WIDGET_ID' with your actual Tawk.to credentials
        // TODO: Uncomment and replace with your actual Tawk.to credentials
        // const script = document.createElement("script");
        // script.async = true;
        // script.src = "https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID";
        // script.charset = "UTF-8";
        // script.setAttribute("crossorigin", "*");

        // Position the widget on the left bottom
        // (window as any).Tawk_API = (window as any).Tawk_API || {};
        // (window as any).Tawk_LoadStart = new Date();

        // document.body.appendChild(script);

        // Cleanup function
        return () => {
            // Remove Tawk.to widget when component unmounts
            const tawkWidget = document.getElementById("tawkId");
            if (tawkWidget) {
                tawkWidget.remove();
            }
        };
    }, []);

    return null; // This component doesn't render anything visible directly
}
