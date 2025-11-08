import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/src/assets/hero-bg.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">Innovating Since 2023</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">Transforming Industries with</span>
            <span className="bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent bg-300% animate-gradient">
              Strategic Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-200 mb-16 max-w-2xl mx-auto leading-relaxed">
            We deliver innovative solutions and sustainable growth strategies across multiple sectors, 
            helping businesses thrive in an ever-evolving marketplace.
          </p>

          {/* Stats - Simplified */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '500+', label: 'Clients Worldwide' },
              { value: '200+', label: 'Projects Completed' },
              { value: '99.9%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;