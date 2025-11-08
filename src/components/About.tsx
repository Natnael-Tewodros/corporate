import { Target, Eye, Users, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional value through innovative solutions and sustainable business practices that transform industries and communities.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading global corporation recognized for excellence, innovation, and positive impact across all sectors we serve.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Our People',
      description: 'Empowering a diverse workforce of passionate professionals who drive our success through collaboration and expertise.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operating across multiple continents with local insights and global capabilities to serve diverse markets effectively.',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Company</h2>
          <p className="text-lg text-gray-600">
            We are a forward-thinking corporation committed to excellence and innovation across all our business sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all duration-500 ease-in-out overflow-hidden shadow-sm hover:shadow-xl"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-white/0 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
                
                <div className="relative z-10 transform transition-all duration-500 group-hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 text-white transform transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className="h-6 w-6 transform group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed transition-all duration-500 group-hover:text-gray-800">{item.description}</p>
                  
                  {/* Animated underline */}
                  <div className="w-0 h-0.5 bg-blue-500 mt-4 transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;