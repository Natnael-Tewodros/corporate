import { Button } from '@/components/ui/button';
import { Car, ShoppingBag, Building2, CreditCard, Smartphone, Factory, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Businesses = () => {
  const navigate = useNavigate();
  
  const businessSectors = [
    {
      id: 'automotive',
      icon: Car,
      title: 'Automotive',
      description: 'Leading automotive retail, service, and financing solutions across luxury and mass market brands.',
      stats: '150+ Dealerships',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'retail',
      icon: ShoppingBag,
      title: 'Retail',
      description: 'Fashion, electronics, and lifestyle retail through premium shopping destinations and e-commerce.',
      stats: '500+ Stores',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'real-estate',
      icon: Building2,
      title: 'Real Estate',
      description: 'Developing iconic residential, commercial, and mixed-use properties in prime locations.',
      stats: '200+ Projects',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'financial-services',
      icon: CreditCard,
      title: 'Financial Services',
      description: 'Comprehensive banking, insurance, and investment solutions for individuals and businesses.',
      stats: '2M+ Customers',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'technology',
      icon: Smartphone,
      title: 'Technology',
      description: 'Innovative technology solutions, digital transformation, and smart city initiatives.',
      stats: '50+ Solutions',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: 'manufacturing',
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial manufacturing, logistics, and supply chain management across multiple sectors.',
      stats: '25+ Facilities',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="businesses" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-50 to-white"></div>
        <div className="absolute inset-0 bg-grid-blue-500/[0.03] mask-[radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span>Our Businesses</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Diverse Portfolio, Unified Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We operate across diverse sectors, each contributing to our mission of creating sustainable value and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {businessSectors.map((sector) => (
            <div 
              key={sector.id}
              onClick={() => navigate(`/business/${sector.id}`)}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all duration-500 ease-in-out overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: `linear-gradient(135deg, ${sector.color.includes('blue') ? 'rgba(236, 242, 255, 0.6)' : 
                       sector.color.includes('emerald') ? 'rgba(236, 253, 245, 0.6)' :
                       sector.color.includes('purple') ? 'rgba(245, 243, 255, 0.6)' :
                       sector.color.includes('orange') ? 'rgba(255, 247, 237, 0.6)' :
                       sector.color.includes('cyan') ? 'rgba(236, 254, 255, 0.6)' :
                       'rgba(254, 242, 242, 0.6)'}, 
                       ${sector.color.includes('blue') ? 'rgba(224, 242, 254, 0.6)' : 
                       sector.color.includes('emerald') ? 'rgba(209, 250, 229, 0.6)' :
                       sector.color.includes('purple') ? 'rgba(237, 233, 254, 0.6)' :
                       sector.color.includes('orange') ? 'rgba(255, 235, 213, 0.6)' :
                       sector.color.includes('cyan') ? 'rgba(207, 250, 254, 0.6)' :
                       'rgba(254, 226, 226, 0.6)'})`
                   }}
              ></div>
              
              {/* Decorative elements */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                   style={{
                     background: `radial-gradient(circle, ${sector.color.split(' ')[0].replace('from-', '')} 0%, transparent 70%)`
                   }}
              ></div>
              
              <div className="relative z-10 transform transition-all duration-500 group-hover:-translate-y-1">
                {/* Icon with scaling animation */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sector.color} flex items-center justify-center mb-6 text-white transform transition-transform duration-500 group-hover:scale-110`}>
                  <sector.icon className="h-6 w-6 transform group-hover:rotate-6 group-hover:scale-125 transition-all duration-500" />
                </div>
                
                {/* Content with subtle animations */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {sector.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed transition-all duration-500 group-hover:text-gray-800">
                  {sector.description}
                </p>
                
                {/* Animated footer */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-500">
                  <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    {sector.stats}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-50 flex items-center justify-center text-gray-400 group-hover:text-blue-500 transition-all duration-300 group-hover:shadow-md">
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Animated underline */}
                <div className="w-0 h-0.5 bg-blue-500 mt-4 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Businesses;