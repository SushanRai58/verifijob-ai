import { Shield, Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-hero rounded-lg">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">JobVerify AI</h3>
                <p className="text-sm text-secondary-foreground/80">AI-Powered Job Detection</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed mb-4 max-w-md">
              Protecting students and job seekers from fraudulent postings through advanced 
              AI technology and community intelligence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@jobverify.ai" 
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#reports" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Report Job
                </a>
              </li>
              <li>
                <a href="#about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  About Project
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Info */}
          <div>
            <h4 className="font-semibold mb-4">Academic Project</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <p>Computer Science & Engineering</p>
              <p>Sahyadri College of Engineering</p>
              <p>Mangaluru, 2025-26</p>
              <a 
                href="https://vtu.ac.in" 
                className="inline-flex items-center gap-1 hover:text-secondary-foreground transition-smooth"
                target="_blank"
                rel="noopener noreferrer"
              >
                VTU University
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/80 text-sm">
              © 2025 JobVerify AI. Academic project for educational purposes.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;