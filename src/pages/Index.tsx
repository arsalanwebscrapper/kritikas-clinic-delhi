import { useState, useEffect } from "react";
import LoaderScreen from "@/components/LoaderScreen";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  const handleBookAppointment = () => {
    setShowAppointmentModal(true);
  };

  const handleCloseAppointmentModal = () => {
    setShowAppointmentModal(false);
  };

  if (showLoader) {
    return <LoaderScreen onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onBookAppointment={handleBookAppointment} />
      <main>
        <HeroSection onBookAppointment={handleBookAppointment} />
        <AboutSection />
        <ServicesSection />
        <ContactSection onBookAppointment={handleBookAppointment} />
      </main>
      <Footer />
      <AppointmentModal 
        isOpen={showAppointmentModal} 
        onClose={handleCloseAppointmentModal} 
      />
    </div>
  );
};

export default Index;
