import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorksSection from '@/components/HowItWorksSection';
import ReportsSection from '@/components/ReportsSection';
import EducationalSection from '@/components/EducationalSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorksSection />
        <ReportsSection />
        <EducationalSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
