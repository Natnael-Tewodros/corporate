import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Target, Eye, Users, Globe, Clock, MapPin, Award } from 'lucide-react';

const AboutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('story');

  useEffect(() => {
    // Extract the hash from the URL (e.g., #story from /about#story)
    const hash = location.hash.substring(1);
    if (hash) {
      setActiveSection(hash);
      // Smooth scroll to the section
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Default to story if no hash
      setActiveSection('story');
    }
  }, [location]);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    navigate(`/about#${section}`, { replace: true });
  };
  
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional value through innovative solutions and sustainable business practices that transform industries and communities.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading global corporation recognized for excellence, innovation, and positive impact across all sectors we serve.'
    },
    {
      icon: Users,
      title: 'Our People',
      description: 'Empowering a diverse workforce of passionate professionals who drive our success through collaboration and expertise.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operating across multiple continents with local insights and global capabilities to serve diverse markets effectively.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Main content container */}
      <div>
      {/* Header with Back Button */}
      <div className="bg-gradient-to-b from-background to-accent/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-40 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar">
            <div className="flex space-x-1">
              {[
                { id: 'story', label: 'Our Story' },
                { id: 'leadership', label: 'Leadership' },
                { id: 'mission', label: 'Mission & Vision' },
                { id: 'values', label: 'Our Values' },
                { id: 'history', label: 'Our History' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleNavClick(tab.id)}
                  className={`px-4 py-3 text-sm font-medium rounded-t-md transition-colors duration-200 ${
                    activeSection === tab.id
                      ? 'bg-primary/10 text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/5 to-background py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <a 
                href="/#about" 
                className="hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                <span>About Our Company</span>
                <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over five decades, we have been at the forefront of business innovation, 
              building a legacy of excellence across diverse industries and markets worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story Section */}
          <div id="story" className={`${activeSection === 'story' ? 'block' : 'hidden'}`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Text Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Building Excellence Since 1973
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    What started as a small trading company has evolved into one of the region's 
                    most diversified and successful business groups. Our journey reflects decades 
                    of strategic growth, innovation, and unwavering commitment to quality.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we operate across multiple sectors including automotive, retail, 
                    finance, real estate, and technology, serving millions of customers and 
                    employing thousands of professionals worldwide.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Our Legacy</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Founded in 1973 with a vision for sustainable business growth
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Expanded internationally with operations in over 30 countries
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Established as a leader in innovation and sustainability
                    </li>
                  </ul>
                </div>
            </div>
            
            {/* Image/Visual Content */}
            <div className="relative h-64 md:h-96 lg:h-auto lg:min-h-[400px] rounded-xl overflow-hidden bg-muted/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-muted-foreground/40">
                  <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
            <div className="bg-background rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                    <Clock className="w-8 h-8" />
                    <span>50+</span>
                  </div>
                  <div className="text-muted-foreground">Years in Business</div>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                    <MapPin className="w-8 h-8" />
                    <span>30+</span>
                  </div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                    <Users className="w-8 h-8" />
                    <span>50K+</span>
                  </div>
                  <div className="text-muted-foreground">Employees</div>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                    <Award className="w-8 h-8" />
                    <span>100+</span>
                  </div>
                  <div className="text-muted-foreground">Industry Awards</div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div id="leadership" className={`${activeSection === 'leadership' ? 'block' : 'hidden'} py-12`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'John Doe',
                  title: 'CEO & Founder',
                  bio: 'Visionary leader with 30+ years of experience in business development and strategic planning.'
                },
                {
                  name: 'Jane Smith',
                  title: 'Chief Operations Officer',
                  bio: 'Operations expert specializing in process optimization and organizational efficiency.'
                },
                {
                  name: 'Michael Johnson',
                  title: 'Chief Technology Officer',
                  bio: 'Technology innovator driving digital transformation across all business units.'
                },
                {
                  name: 'Sarah Williams',
                  title: 'Chief Financial Officer',
                  bio: 'Financial strategist with expertise in global markets and investment management.'
                },
                {
                  name: 'David Brown',
                  title: 'Chief Marketing Officer',
                  bio: 'Brand strategist with a track record of successful market expansions.'
                },
                {
                  name: 'Emily Davis',
                  title: 'Chief People Officer',
                  bio: 'HR leader focused on talent development and organizational culture.'
                }
              ].map((leader, index) => (
                <Card key={index} className="border-border hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-accent/20 rounded-full mb-4 mx-auto"></div>
                    <h3 className="text-xl font-bold text-foreground text-center">{leader.name}</h3>
                    <p className="text-primary text-center mb-3">{leader.title}</p>
                    <p className="text-muted-foreground text-center">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div id="mission" className={`${activeSection === 'mission' ? 'block' : 'hidden'} py-12`}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/10 to-background rounded-2xl p-8 mb-12">
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To deliver exceptional value through innovative solutions and sustainable business practices that transform industries and communities.
                      We are committed to excellence in everything we do, from the quality of our products and services to our relationships with customers, employees, and partners.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-background rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <Eye className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the leading global corporation recognized for excellence, innovation, and positive impact across all sectors we serve.
                      We aspire to set new standards in business performance while making meaningful contributions to the communities where we operate and the world at large.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div id="values" className={`${activeSection === 'values' ? 'block' : 'hidden'} mt-24`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* History Section */}
          <div id="history" className={`${activeSection === 'history' ? 'block' : 'hidden'} py-12`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our Journey Through The Years
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-primary/20 to-accent/20 -ml-px"></div>

              {[
                {
                  year: '1973',
                  title: 'Foundation',
                  description: 'Company founded with a vision to transform the industry through innovation and quality.',
                },
                {
                  year: '1985',
                  title: 'First Expansion',
                  description: 'Expanded operations to international markets, establishing our first overseas office.',
                },
                {
                  year: '1995',
                  title: 'Diversification',
                  description: 'Entered new business sectors, laying the foundation for our diversified portfolio.',
                },
                {
                  year: '2005',
                  title: 'Technological Leap',
                  description: 'Invested heavily in technology and digital transformation initiatives.',
                },
                {
                  year: '2015',
                  title: 'Global Recognition',
                  description: 'Recognized as a global leader in multiple industries with operations in 30+ countries.',
                },
                {
                  year: '2023',
                  title: '50 Years of Excellence',
                  description: 'Celebrated 50 years of innovation, growth, and industry leadership.',
                },
              ].map((milestone, index) => (
                <div key={index} className={`mb-12 relative ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className={`absolute top-0 w-4 h-4 rounded-full bg-primary ${index % 2 === 0 ? '-right-2' : '-left-2'}`}></div>
                  <div
                    className={`inline-block p-4 rounded-lg bg-background border border-border shadow-sm ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
                    style={{ maxWidth: '400px' }}
                  >
                    <div className="text-sm font-semibold text-primary">{milestone.year}</div>
                    <h4 className="text-xl font-bold text-foreground mb-1">{milestone.title}</h4>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Custom styles for the scrollbar */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      </div>
    </div>
  );
};

export default AboutPage;
