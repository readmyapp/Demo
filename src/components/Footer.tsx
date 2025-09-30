
import { Link } from "react-router-dom";
import { Zap, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/30 border-t border-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Reflect</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering teams with intelligent collaboration tools that adapt to your workflow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/product" className="text-gray-400 hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">API</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/docs" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-purple-400 transition-colors">Help Center</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Reflect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
