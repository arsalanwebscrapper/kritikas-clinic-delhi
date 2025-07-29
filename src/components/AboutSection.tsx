import { CheckCircle, GraduationCap, Heart, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Qualification",
      description: "BDS from premier dental college with specialized training in cosmetic dentistry"
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Personalized treatment plans tailored to each patient's unique needs"
    },
    {
      icon: Shield,
      title: "Safe & Hygienic",
      description: "State-of-the-art sterilization and infection control protocols"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Meet Dr. Kritika Nagpal
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated to providing exceptional dental care with a gentle touch and modern techniques.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-secondary mb-4">About Dr. Kritika</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Kritika Nagpal brings over 5 years of experience in comprehensive dental care to Dilshad Colony. 
                  Her commitment to excellence and patient comfort has made her one of the most trusted dentists in New Delhi.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Specializing in cosmetic dentistry, preventive care, and restorative treatments, 
                  Dr. Kritika ensures every patient receives the highest quality care in a comfortable, modern environment.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-card text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-card text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Successful Treatments</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-card hover:shadow-luxury transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-primary rounded-xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6" />
                  <h4 className="text-xl font-semibold">Why Choose Us?</h4>
                </div>
                <ul className="space-y-2 text-white/90">
                  <li>• Latest dental technology and equipment</li>
                  <li>• Flexible appointment scheduling</li>
                  <li>• Comfortable and relaxing environment</li>
                  <li>• Affordable treatment options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;