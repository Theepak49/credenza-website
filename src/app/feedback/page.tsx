"use client"

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare } from "lucide-react";

export default function FeedbackPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-secondary text-secondary-foreground">
                <div className="container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Feedback Matters</h1>
                            <p className="text-lg text-gray-300">
                                Help us improve our services by sharing your experience with us.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Feedback Form Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <Reveal>
                            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <MessageSquare className="h-12 w-12 mx-auto text-primary mb-4" />
                                    <h2 className="text-2xl font-bold mb-2">Share Your Experience</h2>
                                    <p className="text-muted-foreground">We value your feedback and use it to continuously improve our services.</p>
                                </div>

                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Your Name <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email Address <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-3">
                                            Rate Our Service <span className="text-primary">*</span>
                                        </label>
                                        <div className="flex gap-2 justify-center">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <button
                                                    key={rating}
                                                    type="button"
                                                    className="hover:scale-110 transition-transform"
                                                >
                                                    <Star className="h-8 w-8 text-gray-300 hover:text-primary hover:fill-primary" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                                            Service Used
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="company-formation">Company Formation</option>
                                            <option value="translation">Translation Services</option>
                                            <option value="pro-services">PRO Services</option>
                                            <option value="attestation">Certificate Attestation</option>
                                            <option value="notary">Notary Services</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="feedback" className="block text-sm font-medium mb-2">
                                            Your Feedback <span className="text-primary">*</span>
                                        </label>
                                        <textarea
                                            id="feedback"
                                            name="feedback"
                                            required
                                            rows={6}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                            placeholder="Tell us about your experience..."
                                        />
                                    </div>

                                    <Button type="submit" className="w-full cursor-pointer hover:bg-white hover:text-primary transition duration-300 ease-in-out">
                                        Submit Feedback
                                    </Button>
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
