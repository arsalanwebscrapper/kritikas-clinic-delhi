import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = ({ onBookAppointment }: { onBookAppointment: () => void }) => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Dilshad Colony, New Delhi",
      description: "Easy to reach location with parking facilities"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
      description: "Call us for appointments and emergencies"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@drkritikasdental.com",
      description: "Send us your queries anytime"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon-Sat: 9AM-7PM",
      description: "Sunday: Emergency only"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to schedule your appointment? Contact us today and take the first step towards your perfect smile.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-card hover:shadow-luxury transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">{info.title}</h3>
                    <p className="text-primary font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-primary rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Emergency Care Available</h3>
                <p className="text-white/90 mb-6">
                  Dental emergencies can happen anytime. We provide emergency dental care to address urgent situations promptly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>24/7 Emergency Hotline: +91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3" />
                    <span>Quick response within 30 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-secondary mb-6">Visit Our Clinic</h3>
                <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <Navigation className="w-12 h-12 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Dilshad Colony, New Delhi</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Distance from Metro</span>
                    <span className="text-primary">5 minutes walk</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Parking</span>
                    <span className="text-primary">Available</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Accessibility</span>
                    <span className="text-primary">Wheelchair friendly</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-card text-center">
                <h3 className="text-2xl font-bold text-secondary mb-4">Ready to Book?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule your appointment today and experience the difference of personalized dental care.
                </p>
                <Button 
                  onClick={onBookAppointment}
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground hover:shadow-luxury transition-all duration-300"
                >
                  Book Your Appointment Now
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Or call us at <span className="text-primary font-medium">+91 98765 43210</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;