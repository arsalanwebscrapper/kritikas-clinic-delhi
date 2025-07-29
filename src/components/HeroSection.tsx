import { Button } from "@/components/ui/button";
import { Award, Star, Users } from "lucide-react";

const HeroSection = ({ onBookAppointment }: { onBookAppointment: () => void }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center space-x-2 text-primary">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium tracking-wider uppercase">Exclusive Dental Excellence</span>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-light text-secondary mb-4 leading-none">
            Luxury
          </h1>
          <h2 className="text-4xl md:text-6xl font-light bg-gradient-primary bg-clip-text text-transparent mb-8">
            Dental Care
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            Where artistry meets precision in creating your perfect smile
          </p>

          <div className="flex justify-center mb-16">
            <Button 
              onClick={onBookAppointment}
              size="lg"
              className="bg-gradient-primary text-primary-foreground px-12 py-4 text-base font-medium rounded-full hover:shadow-luxury transition-all duration-300 transform hover:scale-105"
            >
              Reserve Your Experience
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-light text-primary mb-1">20+</h3>
              <p className="text-sm text-muted-foreground tracking-wide">YEARS</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <h3 className="text-3xl font-light text-primary">4.9</h3>
                <Star className="w-4 h-4 text-primary ml-1 fill-current" />
              </div>
              <p className="text-sm text-muted-foreground tracking-wide">RATING</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-light text-primary mb-1">12K+</h3>
              <p className="text-sm text-muted-foreground tracking-wide">PATIENTS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;