import { Smile, Shield, Sparkles, Wrench, Crown, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Smile,
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
      features: ["Dental Cleanings", "Cavity Treatment", "Oral Examinations", "Preventive Care"]
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic dental procedures.",
      features: ["Teeth Whitening", "Veneers", "Smile Makeover", "Bonding"]
    },
    {
      icon: Crown,
      title: "Restorative Dentistry",
      description: "Restore function and beauty to damaged or missing teeth.",
      features: ["Dental Crowns", "Bridges", "Implants", "Dentures"]
    },
    {
      icon: Shield,
      title: "Oral Surgery",
      description: "Safe and comfortable surgical procedures with modern techniques.",
      features: ["Tooth Extraction", "Wisdom Teeth", "Surgical Procedures", "Pain Management"]
    },
    {
      icon: Users,
      title: "Family Dentistry",
      description: "Dental care for patients of all ages in a family-friendly environment.",
      features: ["Pediatric Care", "Adult Dentistry", "Senior Care", "Family Plans"]
    },
    {
      icon: Wrench,
      title: "Emergency Care",
      description: "Immediate dental care for urgent situations and dental emergencies.",
      features: ["24/7 Emergency", "Pain Relief", "Urgent Repairs", "Same-Day Treatment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care services designed to keep your smile healthy and beautiful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-luxury transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-secondary mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Kritika and let us help you determine the best treatment plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white rounded-lg p-4 shadow-card">
                <div className="text-2xl font-bold text-primary">Free</div>
                <div className="text-sm text-muted-foreground">Initial Consultation</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-card">
                <div className="text-2xl font-bold text-primary">Same Day</div>
                <div className="text-sm text-muted-foreground">Appointments Available</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-card">
                <div className="text-2xl font-bold text-primary">Flexible</div>
                <div className="text-sm text-muted-foreground">Payment Options</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;