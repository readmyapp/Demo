
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Brain, Workflow, BarChart, Users, Lock, ArrowRight } from "lucide-react";

const Product = () => {
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

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and insights from your data with our advanced AI algorithms."
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Streamline your processes with customizable automation that adapts to your needs."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Make data-driven decisions with comprehensive analytics and reporting tools."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Connect your team with real-time collaboration features and shared workspaces."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Protect your data with enterprise-grade security and compliance features."
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Experience blazing-fast performance with our optimized cloud infrastructure."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Product Overview</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the comprehensive suite of tools designed to transform your workflow and maximize your team's potential.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl glow-border animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Built for Modern Teams
                </h2>
                <p className="text-gray-300 mb-6">
                  Reflect combines the power of artificial intelligence with intuitive design to create 
                  a platform that grows with your team. From small startups to enterprise organizations, 
                  our tools adapt to your unique workflow.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white/10 p-4 rounded-lg animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-2"></div>
                      <div className="w-16 h-2 bg-white/20 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every feature is designed with your productivity in mind, backed by cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300 animate-on-scroll group">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg w-fit mb-4 group-hover:animate-glow">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Seamless Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with the tools you already love and use every day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="glass-card p-6 rounded-lg hover:scale-110 transition-transform duration-300 animate-on-scroll">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto opacity-60 hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card glow-border p-12 rounded-2xl animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">
              Experience <span className="gradient-text">Reflect</span> Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams who have transformed their productivity with Reflect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
