
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Target, Lightbulb, Users, Award, Globe, Linkedin, Twitter } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "User-Centric",
      description: "Everything we build starts with understanding our users' needs and challenges."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We push the boundaries of what's possible in collaboration technology."
    },
    {
      icon: Lightbulb,
      title: "Transparency",
      description: "We believe in open communication and honest relationships with our community."
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "We're building tools that work for everyone, regardless of background or ability."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Product at a Fortune 500 company, passionate about transforming workplace collaboration.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer with 15+ years experience building scalable systems for millions of users.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      role: "Head of Design",
      bio: "Award-winning designer focused on creating intuitive experiences that delight users.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Kim",
      role: "VP of Engineering",
      bio: "Tech lead with expertise in AI/ML, committed to building robust and intelligent systems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "2019", label: "Founded" },
    { number: "50+", label: "Team Members" },
    { number: "10M+", label: "Users Worldwide" },
    { number: "150+", label: "Countries" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About Reflect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to transform how teams collaborate, create, and innovate together. 
              Our story began with a simple belief: work should be empowering, not overwhelming.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl glow-border">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-gray-300 mb-6">
                  Founded in 2019 by a team of former tech executives and engineers, Reflect was born 
                  from the frustration of using disconnected tools that hindered rather than helped productivity.
                </p>
                <p className="text-gray-300 mb-6">
                  We envisioned a platform that would seamlessly integrate with teams' existing workflows 
                  while providing intelligent insights and automation to boost collaboration and creativity.
                </p>
                <p className="text-gray-300">
                  Today, we're proud to serve millions of users worldwide, from small startups to 
                  Fortune 500 companies, all united by the desire to work smarter, not harder.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="glass-card p-8">
              <Target className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower teams worldwide with intelligent collaboration tools that adapt to their unique 
                workflows, enabling them to achieve more together than they ever thought possible.
              </p>
            </Card>

            <Card className="glass-card p-8">
              <Lightbulb className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                A world where technology seamlessly amplifies human creativity and collaboration, 
                where every team can focus on what matters most: creating value and making an impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Our Values</span>
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg w-fit mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Meet Our Team</span>
            </h2>
            <p className="text-xl text-gray-300">
              The passionate individuals building the future of collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-700 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card glow-border p-12 rounded-2xl">
            <Globe className="h-16 w-16 text-purple-400 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl font-bold mb-4">
              Join Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for transforming collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
