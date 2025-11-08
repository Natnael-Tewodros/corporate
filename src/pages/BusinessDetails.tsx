import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Factory,
  ShoppingBag,
  Car,
  Building2,
  CreditCard,
  Smartphone,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const businessData = {
  manufacturing: {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description:
      "We operate state-of-the-art manufacturing facilities that produce high-quality products for both local and international markets. Our manufacturing division is committed to innovation, efficiency, and sustainability.",
    stats: "25+ Facilities",
    color: "from-red-500 to-red-600",
    details: [
      "Advanced production facilities",
      "Focus on sustainable manufacturing",
      "Global supply chain integration",
      "Quality assurance and control",
      "Research and development centers",
      "Lean manufacturing processes",
    ],
    overview:
      "Our manufacturing division is a cornerstone of our business, delivering high-quality products through cutting-edge technology and sustainable practices. With over 25 facilities worldwide, we serve diverse industries with innovative manufacturing solutions.",
  },
  retail: {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail",
    description:
      "Our retail division operates a diverse portfolio of stores and e-commerce platforms, offering premium products and exceptional customer experiences across multiple categories.",
    stats: "500+ Stores",
    color: "from-emerald-500 to-emerald-600",
    details: [
      "Luxury and mass market retail",
      "E-commerce platforms",
      "Customer loyalty programs",
      "Omnichannel retail experience",
      "Private label brands",
      "International presence",
    ],
    overview:
      "With over 500 stores and a growing e-commerce presence, our retail division offers a seamless shopping experience across multiple channels. We pride ourselves on quality products, exceptional service, and innovative retail concepts.",
  },
  automotive: {
    id: "automotive",
    icon: Car,
    title: "Automotive",
    description:
      "As a leader in the automotive industry, we provide comprehensive solutions including vehicle sales, after-sales service, and financing options for a wide range of automotive brands.",
    stats: "150+ Dealerships",
    color: "from-blue-500 to-blue-600",
    details: [
      "New and pre-owned vehicle sales",
      "Maintenance and repair services",
      "Genuine parts and accessories",
      "Fleet management solutions",
      "Automotive financing",
      "Customer support centers",
    ],
    overview:
      "Our automotive division represents leading global brands across 150+ dealerships, offering comprehensive automotive solutions from sales to after-sales service. We are committed to delivering exceptional customer experiences and innovative mobility solutions.",
  },
  "real-estate": {
    id: "real-estate",
    icon: Building2,
    title: "Real Estate",
    description:
      "Our real estate division develops and manages a diverse portfolio of residential, commercial, and mixed-use properties, creating sustainable and innovative spaces that enhance communities.",
    stats: "200+ Projects",
    color: "from-purple-500 to-purple-600",
    details: [
      "Residential developments",
      "Commercial properties",
      "Property management",
      "Sustainable building practices",
      "Mixed-use developments",
      "Urban regeneration projects",
    ],
    overview:
      "With over 200 completed projects, our real estate division is known for creating sustainable, innovative spaces that transform communities. We combine architectural excellence with sustainable practices to deliver exceptional properties.",
  },
  "financial-services": {
    id: "financial-services",
    icon: CreditCard,
    title: "Financial Services",
    description:
      "We offer a comprehensive range of financial products and services, including banking, insurance, and investment solutions tailored to meet the needs of individuals and businesses.",
    stats: "2M+ Customers",
    color: "from-orange-500 to-orange-600",
    details: [
      "Personal and business banking",
      "Investment services",
      "Insurance products",
      "Wealth management",
      "Digital banking solutions",
      "Corporate finance",
    ],
    overview:
      "Serving over 2 million customers, our financial services division provides innovative and secure financial solutions. We combine traditional banking values with modern technology to meet the evolving needs of our clients.",
  },
  technology: {
    id: "technology",
    icon: Smartphone,
    title: "Technology",
    description:
      "Our technology division drives digital transformation through innovative solutions, smart city initiatives, and cutting-edge technological advancements across all our business units.",
    stats: "50+ Solutions",
    color: "from-cyan-500 to-cyan-600",
    details: [
      "Digital transformation",
      "Smart city solutions",
      "Enterprise software",
      "Technology consulting",
      "Cybersecurity services",
      "AI and data analytics",
    ],
    overview:
      "At the forefront of digital innovation, our technology division has developed over 50 cutting-edge solutions. We specialize in creating technology that drives business growth and enhances customer experiences across all our operations.",
  },
};

const BusinessDetails = () => {
  const { businessId } = useParams();
  const navigate = useNavigate();

  if (!businessId || !(businessId in businessData)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Business Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The business you're looking for doesn't exist or has been moved.
          </p>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const business = businessData[businessId as keyof typeof businessData];
  const Icon = business.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <div className="bg-gradient-to-b from-background to-accent/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Businesses
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className={`bg-gradient-to-b from-accent/5 to-background py-12 md:py-20`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div
              className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${business.color} flex items-center justify-center flex-shrink-0`}
            >
              <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                <a
                  href="/#businesses"
                  className="hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Our Business Portfolio</span>
                  <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </h1>
              <p className="text-xl text-muted-foreground">
                {business.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <Card className="border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Overview
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="mb-6">{business.description}</p>
                    <p>{business.overview}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Key Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Established</p>
                      <p className="font-medium">N/A</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Employees</p>
                      <p className="font-medium">10,000+</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Key Metric</p>
                      <p className="font-medium">{business.stats}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                  <p className="text-gray-600 mb-4">
                    Interested in learning more about our {business.title} division? 
                    Send us a message and we'll get back to you soon.
                  </p>
                  <ContactForm businessName={business.title} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessDetails;
