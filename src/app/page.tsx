"use client"

import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Building2, FileText, Globe, Stamp, CheckCircle, Award, Shield, User, Scale, Lightbulb, Handshake, Target, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export default function Home() {
  const featuredServices = [
    {
      title: "Company Formation",
      description: "Start your dream company setup with low cost & fast processing. We provide complete legal support for 100% foreign ownership.",
      icon: Building2,
      image: "/images/company-formation.jpg",
      link: "/services#company-formation"
    },
    {
      title: "Translation Services",
      description: "Fast & affordable certified translation services. We ensure the highest level of quality for best-priced translation.",
      icon: Globe,
      image: "/images/translation-services.jpg",
      link: "/services#translation"
    },
    {
      title: "PRO Services",
      description: "Documenting all paperwork based on your specific needs. Qatar's most reliable PRO service experts at your service.",
      icon: FileText,
      image: "/images/pro-services.jpg",
      link: "/services#pro-services"
    },
    {
      title: "Certificate Attestation",
      description: "Fast and hassle-free certificate and notary attestation services. Authenticate & legalize your documents with us.",
      icon: Stamp,
      image: "/images/certificate-attestation.jpg",
      link: "/services#attestation"
    },
  ];

  const whyChooseUs = [
    { icon: Award, title: "MOCI Approved", desc: "Government-authorized agency for company registration" },
    { icon: Clock, title: "Fast Processing", desc: "Quick and streamlined processes for your business" },
    { icon: Shield, title: "Experienced Team", desc: "9+ years of experience in Qatar business setup" },
    { icon: CheckCircle, title: "100% Support", desc: "Complete legal and documentation support" },
  ];

  const companyValues = [
    { icon: User, title: "CUSTOMER FOCUS", desc: "Prioritizing customer satisfaction and understanding their needs" },
    { icon: Shield, title: "SAFETY", desc: "Prioritizing the well-being of employees and stakeholders" },
    { icon: Scale, title: "INTEGRITY", desc: "Upholding honesty, ethics, and transparency in all dealings" },
    { icon: Lightbulb, title: "INNOVATION", desc: "Encouraging creativity, adaptability, and a willingness to embrace new ideas" },
    { icon: Handshake, title: "RESPECT", desc: "Valuing diversity, treating others with dignity, and fostering a positive workplace" },
    { icon: Award, title: "EXCELLENCE", desc: "Striving for high performance, quality, and continuous improvement" },
  ];

  return (
    <>
      <Hero />

      {/* Enhanced About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/images/about-team.jpg"
                  alt="Professional Credenza Team"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                  <h3 className="text-4xl font-bold text-primary mb-2">9+</h3>
                  <p className="text-lg font-semibold text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold mb-6">About Credenza Business Consultancy</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We serve as a comprehensive business service hub, providing a range of legal services such as company registration, Translation, Notarization, and PRO Service Management to both small and large enterprises in Qatar.
                </p>
                <p className="text-muted-foreground mb-8">
                  With MOCI approval and years of experience, we ensure a smooth journey for your business. Our mission is to provide high-quality corporate public relations services and support people and corporations in establishing enterprises in Qatar.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary mb-2" />
                    <p className="font-semibold">MOCI Approved</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary mb-2" />
                    <p className="font-semibold">9+ Years Experience</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary mb-2" />
                    <p className="font-semibold">Fast Processing</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary mb-2" />
                    <p className="font-semibold">100% Support</p>
                  </div>
                </div>

                <Link href="/about">
                  <Button variant="default" className="gap-2">
                    Learn More About Us <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Reveal width="100%">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Featured Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From company formation to PRO services, we offer a comprehensive range of solutions tailored to your business needs in Qatar.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <Link href={service.link}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg" className="gap-2">
                  View All Services <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Credenza?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We are your most trusted legal services firm in Qatar, providing fast and hassle-free services locally and internationally with local legislation and international standards consent.
                </p>

                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/images/qatar-business.jpg"
                  alt="Qatar Business Environment"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Company Values Section (match About page design) */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <Reveal width="100%">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">COMPANY VALUES</h2>
              <p className="max-w-3xl mx-auto text-gray-400">
                We specialize in delivering unparalleled solutions in Notary, Translation, and Company Formation, PRO services.
                Established with a commitment to excellence, we strive to provide exceptional services with integrity, professionalism,
                and a dedication to meeting the unique needs of our clients.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-primary/5 backdrop-blur-sm shadow-lg hover:shadow-xl p-8 rounded-xl text-center hover:bg-primary/10 transition-all group">
                  <div className="h-14 w-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <Reveal width="100%">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-bold mb-2">9+</h3>
                <p className="text-primary-foreground/80">Years Experience</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-2">6</h3>
                <p className="text-primary-foreground/80">Core Services</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-2">100%</h3>
                <p className="text-primary-foreground/80">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-2">24/7</h3>
                <p className="text-primary-foreground/80">Support Available</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Reveal width="100%">
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Business Journey?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and let us help you build your business in Qatar with our comprehensive services and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="secondary" size="lg" className="gap-2">
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="gap-2 bg-transparent text-white border-white hover:bg-white hover:text-primary">
                    Explore Services <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
