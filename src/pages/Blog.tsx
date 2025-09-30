
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "product", "engineering", "design", "company"];

  const blogPosts = [
    {
      title: "The Future of AI-Powered Collaboration",
      excerpt: "Discover how artificial intelligence is transforming the way teams work together and what it means for the future of productivity.",
      author: "Sarah Chen",
      date: "2024-01-15",
      category: "product",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for creating React applications that can grow with your team and user base.",
      author: "Mike Johnson",
      date: "2024-01-10",
      category: "engineering",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    },
    {
      title: "Design Systems at Scale",
      excerpt: "How we built and maintain a design system that serves millions of users across multiple products.",
      author: "Emma Rodriguez",
      date: "2024-01-05",
      category: "design",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800&h=400&fit=crop"
    },
    {
      title: "Our Journey to Series A",
      excerpt: "The story behind our recent funding round and what it means for our mission to transform workplace collaboration.",
      author: "David Kim",
      date: "2023-12-28",
      category: "company",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop"
    },
    {
      title: "Machine Learning in Production",
      excerpt: "Lessons learned from deploying machine learning models at scale and maintaining them in production environments.",
      author: "Alex Thompson",
      date: "2023-12-20",
      category: "engineering",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
    },
    {
      title: "The Psychology of User Interface Design",
      excerpt: "Understanding human behavior and cognitive psychology to create more intuitive and effective user interfaces.",
      author: "Lisa Park",
      date: "2023-12-15",
      category: "design",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop"
    }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, updates, and stories from the Reflect team. Stay up to date with the latest in collaboration technology.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`capitalize ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                }`}
              >
                <Tag className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-pink-900/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium capitalize">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 text-sm">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-0">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card glow-border p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
