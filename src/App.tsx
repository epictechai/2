import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  Star, 
  CheckCircle, 
  Play,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">NeuralAI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-2 text-gray-700">Features</a>
              <a href="#pricing" className="block py-2 text-gray-700">Pricing</a>
              <a href="#testimonials" className="block py-2 text-gray-700">Reviews</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-200 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-8 animate-bounce">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Now with GPT-4 Integration</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}AI Intelligence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI that learns, adapts, and delivers results 
            beyond human capability. Experience the next generation of artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mr-3 group-hover:shadow-lg transition-shadow">
                <Play className="w-5 h-5 text-blue-600" />
              </div>
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Active Users", value: "2.5M+", icon: Users },
              { label: "AI Models", value: "150+", icon: Brain },
              { label: "Accuracy Rate", value: "99.7%", icon: Award }
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="text-center">
                <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features That
              <span className="text-blue-600"> Drive Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI platform empowers businesses to automate, optimize, and scale 
              with unprecedented intelligence and precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Advanced Neural Networks",
                description: "State-of-the-art deep learning models that continuously improve and adapt to your specific use cases.",
                color: "blue"
              },
              {
                icon: Zap,
                title: "Lightning Fast Processing",
                description: "Process millions of data points in seconds with our optimized infrastructure and parallel computing.",
                color: "yellow"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Military-grade encryption and compliance with SOC2, GDPR, and HIPAA standards for complete data protection.",
                color: "green"
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "Forecast trends and outcomes with 99.7% accuracy using our proprietary AI algorithms.",
                color: "purple"
              },
              {
                icon: Clock,
                title: "Real-time Insights",
                description: "Get instant insights and recommendations as data flows through your systems in real-time.",
                color: "orange"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Share insights, collaborate on models, and manage permissions across your entire organization.",
                color: "teal"
              }
            ].map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${color}-500 to-${color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with our AI platform in three simple steps and see results immediately.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Your Data",
                description: "Securely integrate your existing data sources with our platform using our API or built-in connectors.",
                icon: "🔗"
              },
              {
                step: "02",
                title: "Train AI Models",
                description: "Our platform automatically selects and trains the best AI models for your specific use case and data type.",
                icon: "🧠"
              },
              {
                step: "03",
                title: "Deploy & Scale",
                description: "Launch your AI solutions instantly and scale seamlessly as your business grows and evolves.",
                icon: "🚀"
              }
            ].map(({ step, title, description, icon }, index) => (
              <div key={step} className="relative">
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform translate-x-1/2"></div>
                )}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative z-10">
                  <div className="text-6xl mb-4 text-center">{icon}</div>
                  <div className="text-blue-600 font-bold text-sm mb-2">STEP {step}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-600 ml-2">4.9/5 from 2,500+ reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, TechCorp",
                avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
                content: "NeuralAI transformed our data analytics completely. We're now making decisions 10x faster with 95% more accuracy.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "VP of Operations, StartupXYZ",
                avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
                content: "The ROI was immediate. We reduced manual processing by 80% and increased customer satisfaction significantly.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Data Scientist, BigCorp",
                avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
                content: "The most intuitive AI platform I've ever used. Complex models become accessible to our entire team.",
                rating: 5
              }
            ].map(({ name, role, avatar, content, rating }) => (
              <div key={name} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex space-x-1 mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{content}"</p>
                <div className="flex items-center">
                  <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">{name}</div>
                    <div className="text-gray-600 text-sm">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and scale as you grow. All plans include our core AI features with enterprise-grade security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Free",
                period: "forever",
                description: "Perfect for individuals and small teams getting started with AI",
                features: [
                  "Up to 1,000 API calls/month",
                  "3 AI models included",
                  "Basic analytics",
                  "Email support",
                  "Community access"
                ],
                cta: "Get Started Free",
                popular: false
              },
              {
                name: "Professional",
                price: "$99",
                period: "per month",
                description: "Ideal for growing businesses and professional teams",
                features: [
                  "Up to 50,000 API calls/month",
                  "15+ AI models included",
                  "Advanced analytics & insights",
                  "Priority support",
                  "Team collaboration tools",
                  "Custom integrations"
                ],
                cta: "Start 14-Day Free Trial",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "pricing",
                description: "For large organizations with custom requirements",
                features: [
                  "Unlimited API calls",
                  "All AI models + custom training",
                  "White-label solutions",
                  "24/7 dedicated support",
                  "SLA guarantees",
                  "On-premise deployment"
                ],
                cta: "Contact Sales",
                popular: false
              }
            ].map(({ name, price, period, description, features, cta, popular }) => (
              <div key={name} className={`relative p-8 rounded-2xl ${
                popular 
                  ? 'bg-white border-2 border-blue-600 shadow-xl scale-105' 
                  : 'bg-white border border-gray-200 hover:shadow-lg'
              } transition-all duration-300`}>
                {popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {price}
                    {price !== 'Custom' && <span className="text-lg text-gray-600">/{period}</span>}
                  </div>
                  <p className="text-gray-600">{description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using NeuralAI to automate processes, 
            gain insights, and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule a Demo
            </button>
          </div>
          <p className="text-blue-200 mt-6 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">NeuralAI</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering businesses with next-generation AI technology that learns, adapts, and delivers exceptional results.
              </p>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "API Documentation", "Integrations"]
              },
              {
                title: "Company", 
                links: ["About Us", "Careers", "Blog", "Press Kit"]
              },
              {
                title: "Support",
                links: ["Help Center", "Contact Us", "Status Page", "Community"]
              }
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 className="text-white font-semibold mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 NeuralAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;