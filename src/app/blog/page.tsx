"use client"

import { Reveal } from "@/components/ui/Reveal";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: "Starting Your Business in Qatar: A Complete Guide",
            excerpt: "Learn everything you need to know about setting up your business in Qatar, from licensing to operations.",
            author: "Credenza Team",
            date: "Nov 20, 2024",
            category: "Business Setup",
            image: "/placeholder-blog.jpg"
        },
        {
            id: 2,
            title: "Understanding Qatar's Free Zones",
            excerpt: "Explore the benefits and requirements of establishing your business in Qatar's various free zones.",
            author: "Credenza Team",
            date: "Nov 15, 2024",
            category: "Free Zones",
            image: "/placeholder-blog.jpg"
        },
        {
            id: 3,
            title: "Translation Services: Why Accuracy Matters",
            excerpt: "Discover how professional translation services can make or break your business documentation.",
            author: "Credenza Team",
            date: "Nov 10, 2024",
            category: "Translation",
            image: "/placeholder-blog.jpg"
        },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-secondary text-secondary-foreground">
                <div className="container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
                            <p className="text-lg text-gray-300">
                                Stay updated with the latest news, guides, and insights about business in Qatar.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Reveal key={post.id} delay={index * 0.1}>
                                <article className="bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-all group">
                                    <div className="h-48 bg-gradient-to-br flex items-center justify-center">
                                        <span className="text-white text-6xl opacity-20">📝</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-xs text-primary mb-3">
                                            <span className="font-semibold">{post.category}</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-muted-foreground mb-4 text-sm">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1">
                                                    <User className="h-3 w-3" />
                                                    {post.author}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {post.date}
                                                </span>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    {/* <Reveal delay={0.4}>
                        <div className="text-center mt-12">
                            <p className="text-muted-foreground mb-4">More content coming soon!</p>
                            <Link href="/contact">
                                <Button>Contact Us</Button>
                            </Link>
                        </div>
                    </Reveal> */}
                </div>
            </section>
        </div>
    );
}
