import { Button } from "@/components/ui/button";
import { Award, Star, Users } from "lucide-react";

const HeroSection = ({ onBookAppointment }: { onBookAppointment: () => void }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-card">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-secondary">Certified Dental Specialist</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight animate-fade-in">
            Your Perfect
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Smile Awaits
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Experience world-class dental care with Dr. Kritika Nagpal in the heart of Dilshad Colony, New Delhi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <Button 
              onClick={onBookAppointment}
              size="lg"
              className="bg-gradient-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:shadow-luxury transition-all duration-300 transform hover:scale-105"
            >
              Book Your Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-card">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">5+ Years</h3>
              <p className="text-muted-foreground">Professional Experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-card">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">1000+</h3>
              <p className="text-muted-foreground">Happy Patients</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-card">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">100%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-lg" />
    </section>
  );
};

export default HeroSection;