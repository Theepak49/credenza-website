"use client"

import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useServices } from "@/presentation/hooks/useServices.hook";
import { useCompanyData } from "@/presentation/hooks/useCompanyData.hook";

export default function Home() {
  const { featuredServices, loading: servicesLoading } = useServices();
  const { companyValues, whyChooseUs, statistics, loading: companyLoading } = useCompanyData();

  const loading = servicesLoading || companyLoading;

  if (loading) {
    return (
      <>
        <Hero />
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Hero />

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
              <Reveal key={service.id} delay={index * 0.1}>
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

      {/* Enhanced About Section */}
      <section className="py-20 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/images/about-team.jpg"
                  alt="Professional Credenza Team"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br" />
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
                  We are a professional business consultancy company based in Qatar, offering reliable and result-driven business solutions. Our mission is to support entrepreneurs and companies by simplifying complex legal and administrative processes related to business setup and operations.
                </p>
                <p className="text-muted-foreground mb-8">
                  With in-depth knowledge of Qatar’s commercial laws and procedures, we ensure smooth, compliant, and timely services for our clients across various industries.
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

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <Reveal width="100%">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {statistics.map((stat) => (
                <div key={stat.id}>
                  <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Credenza?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We are your most trusted legal services firm in Qatar, providing fast and hassle-free services locally and internationally with local legislation and international standards consent.
                </p>

                <div className="space-y-4">
                  {whyChooseUs.map((item) => (
                    <div key={item.id} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/images/qatar-business-updated.png"
                  alt="Qatar Business Environment"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-soft-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal width="100%">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-secondary">Our Core Values</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
                We specialize in delivering unparalleled solutions in Notary, Translation, and Company Formation.
                Established with a commitment to excellence, we strive to provide exceptional services with integrity.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <Reveal key={value.id} delay={index * 0.1}>
                <div className="bg-primary p-8 rounded-2xl shadow-lg border border-transparent hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 transform rotate-3 group-hover:rotate-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-center">{value.title}</h3>
                  <p className="text-white/90 leading-relaxed text-center">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <Reveal width="100%">
            <div className="bg-gradient-to-br text-white rounded-2xl p-12 text-center">
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
      </section> */}
    </>
  );
}
