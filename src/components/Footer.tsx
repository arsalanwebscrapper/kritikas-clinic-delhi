import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Dr Kritika's Clinic</h3>
              <p className="text-white/80 leading-relaxed">
                Your trusted partner for comprehensive dental care in Dilshad Colony, New Delhi. 
                Experience excellence in every smile.
              </p>
              <div className="flex items-center text-white/80">
                <Heart className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm">Caring for smiles since 2019</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Dr. Kritika</a></li>
                <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li>General Dentistry</li>
                <li>Cosmetic Dentistry</li>
                <li>Restorative Care</li>
                <li>Emergency Treatment</li>
                <li>Family Dentistry</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">Dilshad Colony, New Delhi, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-white/80 text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-white/80 text-sm">info@drkritikasdental.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-white/80 text-sm">
                    <div>Mon-Sat: 9:00 AM - 7:00 PM</div>
                    <div>Sunday: Emergency Only</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm">
                © 2024 Dr Kritika's Clinic. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-white/60">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;