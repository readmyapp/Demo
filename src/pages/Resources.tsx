
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Video, Users, Download, ExternalLink, PlayCircle, FileText, Headphones } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Guides & Tutorials",
      description: "Step-by-step guides to help you master Reflect",
      items: [
        { title: "Getting Started with Reflect", type: "Guide", duration: "10 min read" },
        { title: "Advanced Workflow Automation", type: "Tutorial", duration: "25 min read" },
        { title: "Team Collaboration Best Practices", type: "Guide", duration: "15 min read" },
        { title: "API Integration Walkthrough", type: "Tutorial", duration: "30 min read" }
      ]
    },
    {
      icon: Video,
      title: "Video Content",
      description: "Visual learning with our comprehensive video library",
      items: [
        { title: "Reflect Platform Overview", type: "Demo", duration: "5 min" },
        { title: "Building Your First Project", type: "Tutorial", duration: "12 min" },
        { title: "Advanced Features Deep Dive", type: "Webinar", duration: "45 min" },
        { title: "Customer Success Stories", type: "Case Study", duration: "8 min" }
      ]
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with other Reflect users and experts",
      items: [
        { title: "Discord Community", type: "Chat", duration: "Live" },
        { title: "User Forums", type: "Discussion", duration: "Active" },
        { title: "Monthly Meetups", type: "Event", duration: "1 hour" },
        { title: "Office Hours", type: "Support", duration: "Weekly" }
      ]
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Essential resources and tools for your projects",
      items: [
        { title: "Brand Assets & Logos", type: "Assets", duration: "ZIP" },
        { title: "Design System Templates", type: "Templates", duration: "Figma" },
        { title: "API Reference PDF", type: "Documentation", duration: "PDF" },
        { title: "Mobile Apps", type: "Software", duration: "iOS/Android" }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "Complete Reflect Masterclass",
      description: "A comprehensive course covering everything from basics to advanced features",
      type: "Course",
      icon: PlayCircle,
      duration: "4 hours",
      level: "All Levels"
    },
    {
      title: "API Documentation",
      description: "Comprehensive guide to integrating with the Reflect API",
      type: "Documentation",
      icon: FileText,
      duration: "Reference",
      level: "Developer"
    },
    {
      title: "Weekly Podcast",
      description: "Stay updated with the latest in collaboration technology",
      type: "Podcast",
      icon: Headphones,
      duration: "30 min episodes",
      level: "General"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to succeed with Reflect. From tutorials and guides to community support and downloads.
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Featured Resources</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300 group glow-border">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg w-fit mb-4 group-hover:animate-glow">
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                  <span>{resource.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 text-sm">{resource.level}</span>
                  <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-0">
                    Access Now
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="glass-card p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a 
                        href="#" 
                        className="flex items-center justify-between group p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div>
                          <span className="text-white group-hover:text-purple-400 transition-colors block">
                            {item.title}
                          </span>
                          <span className="text-sm text-gray-500">
                            {item.type} • {item.duration}
                          </span>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Center */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Need More Help?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Our support team is here to help you succeed with Reflect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card p-6 text-center">
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Community Support</h3>
              <p className="text-gray-400 mb-4">
                Get help from our active community of users and experts.
              </p>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                Join Community
              </Button>
            </Card>

            <Card className="glass-card p-6 text-center">
              <BookOpen className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Knowledge Base</h3>
              <p className="text-gray-400 mb-4">
                Search our comprehensive knowledge base for answers.
              </p>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                Browse Articles
              </Button>
            </Card>

            <Card className="glass-card p-6 text-center">
              <Download className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Direct Support</h3>
              <p className="text-gray-400 mb-4">
                Contact our support team directly for personalized help.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                Contact Support
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
