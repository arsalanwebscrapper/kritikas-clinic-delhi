import { useEffect, useState } from "react";

const LoaderScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-primary z-50 transition-opacity duration-500 opacity-0 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-primary z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-white/30 rounded-full animate-pulse-luxury mx-auto mb-6" />
          <div className="absolute inset-0 w-20 h-20 border-4 border-t-white rounded-full animate-spin mx-auto" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-fade-in">
          Dr Kritika's Clinic
        </h1>
        <p className="text-white/80 text-lg animate-slide-up">
          Excellence in Dental Care
        </p>
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce-gentle" />
          <div className="w-2 h-2 bg-white rounded-full animate-bounce-gentle" style={{ animationDelay: "0.1s" }} />
          <div className="w-2 h-2 bg-white rounded-full animate-bounce-gentle" style={{ animationDelay: "0.2s" }} />
        </div>
      </div>
    </div>
  );
};

export default LoaderScreen;