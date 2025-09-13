import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Globe, Menu, Search } from "lucide-react"
import Image from "next/image"

export default function ConcentrixHomepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-800 text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Menu className="w-5 h-5" />
              <span className="text-xl font-bold">NovaTech</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-slate-800 bg-transparent"
            >
              Careers
            </Button>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span className="text-sm">English</span>
            </div>
            <Search className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-teal-800 to-teal-600 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">NovaTech Solutions</h1>
              <p className="text-xl mb-4 font-medium">The intelligent transformation partner.</p>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                We design, build and run intelligent, digitally-enabled business processes and technology solutions that
                transform experiences and solve important business challenges.
              </p>
              <Button className="bg-teal-400 hover:bg-teal-300 text-slate-900 font-semibold px-8 py-3">About Us</Button>
            </div>
            <div className="relative">
              <div className="relative w-full h-80 rounded-full border-4 border-teal-400 overflow-hidden">
                <Image src="/city-skyline-at-night-with-lights-reflecting-on-wa.jpg" alt="City skyline" fill className="object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-4 border-teal-400 bg-teal-400/20"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm opacity-80">NovaTech Rises to #406 on the 2025 with 1k+ clients</p>
          <Button variant="link" className="text-teal-400 hover:text-teal-300 p-0 h-auto">
            Press Release
          </Button>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-12">Featured Content</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/professional-woman-headset.png"
                  alt="Professional"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="font-semibold mb-2">Meet iX Hero: Your advisors. With AI superpowers</h3>
              <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/ai-technology-visualization-with-sound-waves.jpg"
                  alt="AI Technology"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="font-semibold mb-2">Say hello to your new AI assistant for employees and customers</h3>
              <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-600 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/digital-transformation-concept-with-gears-and-ai.jpg"
                  alt="Digital Transformation"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="font-semibold mb-2">The Age of Intelligent Transformation: The Get it Done Era of AI</h3>
              <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/video-poster.png"
                alt="Technology Interface"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Solution-focused.
                <br />
                Tech-powered.
                <br />
                Intelligence-fueled.
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                Every day, we help our clients around the world's best brands by bringing together the power of deep
                human insights and advanced technology. We're creating experiences that go beyond transactions to build
                lasting relationships with your customers. You could say we connect complexity, transform operations,
                and modernize technology to shape companies that are ready for what's next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions & Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Solutions & Services</h2>
            <p className="text-lg text-gray-600">
              Harness our data and AI expertise to power enterprise-wide transformation and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/strategy-and-design-icon-with-geometric-shapes.jpg"
                  alt="Strategy & Design"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Strategy & Design</h3>
              <p className="text-gray-600 mb-6">
                Shape experiences, strategies, and operations through AI-driven innovation and human-centered design.
              </p>
              <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-green-600 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/data-analytics-dashboard.png"
                  alt="Data & Analytics"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Data & Analytics</h3>
              <p className="text-gray-600 mb-6">
                Turn data into enterprise intelligence to accelerate transformation and maximize performance at scale.
              </p>
              <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/enterprise-technology-servers-and-cloud-infrastruc.jpg"
                  alt="Enterprise Technology"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Website Development</h3>
              <p className="text-gray-600 mb-6">
               Design and develop high-performing, responsive, and scalable websites tailored to your business needs.
              </p>
              <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-teal-600 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/digital-operations-with-people-and-technology-work.jpg"
                  alt="Digital Operations"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Marketing Services</h3>
              <p className="text-gray-600 mb-6">
               Boost brand awareness and your business growth through data-driven digital marketing strategies and campaigns.
              </p>
              <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Expertise</h2>
            <p className="text-lg opacity-90">
              Driving impact across industries with AI-powered, data-driven solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Automotive</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Banking, Financial Services & Insurance</li>
                <li>Energy & Utilities</li>
                <li>Government & Public Sector</li>
                <li>Healthcare</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Media & Communications</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Retail & Ecommerce</li>
                <li>Technology & Consumer Electronics</li>
                <li>Travel, Transportation & Tourism</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* iX Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/professional-woman-smiling-with-ai-interface-eleme.jpg"
                alt="iX Hero AI Assistant"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div>
              <div className="mb-6">
                <span className="text-4xl font-bold">iX Hero</span>
                <sup className="text-sm">TM</sup>
              </div>
              <h2 className="text-3xl font-bold mb-6">Your advisors. With AI superpowers.</h2>
              <p className="text-lg leading-relaxed opacity-90 mb-8">
                iX Hero gives advisors a single, AI-powered assistant with everything at their fingertips to focus on
                what matters most—powering your customers.
              </p>
              <Button className="bg-teal-400 hover:bg-teal-300 text-slate-900 font-semibold px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-teal-400/20 to-transparent"></div>
      </section>

      {/* Featured Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Insights</h2>
            <p className="text-lg text-gray-600">Thought leadership and research to inspire innovative experiences.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/futuristic-technology-interface-with-blue-and-teal.jpg"
                alt="Mastering the Intelligent Enterprise"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2">Mastering the Intelligent Enterprise</h3>
                <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/business-professional-in-modern-office-environment.jpg"
                alt="From Chaos to Clarity"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2">
                  From Chaos to Clarity: Customer Experience Transformation Powered by iX
                </h3>
                <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/ai-and-intelligent-transformation-concept-with-dig.jpg"
                alt="The Age of Intelligent Transformation"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2">The Age of Intelligent Transformation: The Get it Done Era of AI</h3>
                <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/healthcare-professional-with-ai-technology-interfa.jpg"
                alt="Healthcare Experience Innovation"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2">Healthcare Experience Innovation with Generative AI</h3>
                <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/zaid-iqbal-0a186320b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 underline"
            >
              Zaid Iqbal
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}