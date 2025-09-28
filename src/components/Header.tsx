import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-lg border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-hero rounded-lg shadow-soft">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">JobVerify</h1>
              <p className="text-xs text-muted-foreground">AI-Powered Detection</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-smooth font-medium">
              How It Works
            </a>
            <a href="#reports" className="text-foreground hover:text-primary transition-smooth font-medium">
              Reports
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Report Suspicious Job
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium px-2 py-1">
                Home
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-smooth font-medium px-2 py-1">
                How It Works
              </a>
              <a href="#reports" className="text-foreground hover:text-primary transition-smooth font-medium px-2 py-1">
                Reports
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium px-2 py-1">
                About
              </a>
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  Report Suspicious Job
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;