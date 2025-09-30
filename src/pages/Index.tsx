
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HeroFuturistic } from "@/components/ui/hero-futuristic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, Zap, Shield, Globe, Rocket, Star } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Three.js */}
      <HeroFuturistic />
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the tools that will transform how your team collaborates and creates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Experience blazing fast performance with our optimized infrastructure"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Your data is protected with military-grade encryption and compliance"
              },
              {
                icon: Globe,
                title: "Global Scale",
                description: "Scale globally with our distributed network and edge computing"
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300 animate-on-scroll">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10M+", label: "Active Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "150+", label: "Countries" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card glow-border p-12 rounded-2xl animate-on-scroll">
            <Rocket className="h-16 w-16 text-purple-400 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams already using Reflect to boost their productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                Get Started Now
              </Button>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
