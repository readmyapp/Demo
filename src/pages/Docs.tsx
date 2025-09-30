
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Code, Settings, Users, Zap, Search, ArrowRight, ExternalLink } from "lucide-react";

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const docSections = [
    {
      icon: Zap,
      title: "Getting Started",
      description: "Quick start guide and basic setup instructions",
      articles: [
        "Installation & Setup",
        "Your First Project",
        "Authentication",
        "Basic Configuration"
      ]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation and code examples",
      articles: [
        "REST API Overview",
        "GraphQL API",
        "Webhooks",
        "Rate Limiting",
        "Error Handling"
      ]
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "Customize Reflect to fit your workflow",
      articles: [
        "Environment Variables",
        "Custom Integrations",
        "Advanced Settings",
        "Security Configuration"
      ]
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Manage users, roles, and permissions",
      articles: [
        "User Roles",
        "Team Setup",
        "Permission Management",
        "SSO Integration"
      ]
    }
  ];

  const quickLinks = [
    { title: "API Keys", href: "#", icon: Code },
    { title: "Webhooks", href: "#", icon: Zap },
    { title: "SDKs", href: "#", icon: Book },
    { title: "Support", href: "#", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Everything you need to know to get started with Reflect and build amazing experiences.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/15 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {quickLinks.map((link, index) => (
              <Card key={index} className="glass-card p-4 hover:scale-105 transition-all duration-300 group">
                <a href={link.href} className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg group-hover:animate-glow">
                    <link.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white font-medium group-hover:text-purple-400 transition-colors">
                    {link.title}
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {docSections.map((section, index) => (
              <Card key={index} className="glass-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                    <p className="text-gray-400">{section.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {section.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a 
                        href="#" 
                        className="flex items-center justify-between group p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {article}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Quick Start</span>
            </h2>
            <p className="text-xl text-gray-300">
              Get up and running with Reflect in just a few lines of code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Installation</h3>
              <div className="bg-black/40 p-4 rounded-lg font-mono text-sm text-gray-300">
                <div className="text-purple-400"># Install via npm</div>
                <div>npm install @reflect/sdk</div>
                <br />
                <div className="text-purple-400"># Or via yarn</div>
                <div>yarn add @reflect/sdk</div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Basic Usage</h3>
              <div className="bg-black/40 p-4 rounded-lg font-mono text-sm text-gray-300">
                <div><span className="text-blue-400">import</span> <span className="text-yellow-400">Reflect</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@reflect/sdk'</span></div>
                <br />
                <div><span className="text-blue-400">const</span> client = <span className="text-blue-400">new</span> <span className="text-yellow-400">Reflect</span>({`{`}</div>
                <div>&nbsp;&nbsp;apiKey: <span className="text-green-400">'your-api-key'</span></div>
                <div>{`}`})</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card glow-border p-12 rounded-2xl">
            <Book className="h-16 w-16 text-purple-400 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl font-bold mb-4">
              Need <span className="gradient-text">Help</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Docs;
