import { Target, Eye, Heart, Globe, Users, Award, CheckCircle, Lightbulb, Shield } from "lucide-react"
import Link from "next/link"

export default function MissionPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Mission & Vision</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Defining our purpose, principles, and the future we're building together for vulnerable communities
            worldwide.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                To revolutionize charitable giving by creating transparent, technology-driven connections between
                generous donors and vulnerable communities, ensuring every contribution creates measurable, lasting
                impact.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that when donors can see the direct impact of their generosity and communities can tell their
                own stories, we create a powerful cycle of giving that transforms lives on both sides of the equation.
              </p>
            </div>

            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mission Pillars</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparency First</h4>
                      <p className="text-gray-600 text-sm">Every donation tracked from source to impact</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Community-Centered</h4>
                      <p className="text-gray-600 text-sm">Empowering communities to lead their own development</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Technology for Good</h4>
                      <p className="text-gray-600 text-sm">Leveraging innovation to solve humanitarian challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Sustainable Impact</h4>
                      <p className="text-gray-600 text-sm">Creating long-term solutions, not temporary fixes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up order-2 lg:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Vision Goals</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
                    <div className="text-gray-600">Lives Impacted by 2025</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">50</div>
                    <div className="text-gray-600">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">$50M</div>
                    <div className="text-gray-600">Donations Facilitated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
                    <div className="text-gray-600">Partner Organizations</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Eye className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                A world where every person in need has access to the resources and opportunities they deserve, and every
                generous heart can see the direct impact of their compassion.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where charitable giving is not just about sending money, but about building
                relationships, sharing stories, and creating sustainable change that empowers communities to thrive
                independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600">
                We lead with empathy and genuine care for every person we serve, recognizing the dignity and potential
                in every individual.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We operate with complete transparency and honesty, ensuring that trust is the foundation of all our
                relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly seek new and better ways to solve problems, embracing technology and creative thinking to
                maximize impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of partnerships and work closely with communities, donors, and organizations to
                achieve shared goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Mindset</h3>
              <p className="text-gray-600">
                We think globally while acting locally, respecting cultural differences and empowering local leadership
                in every community we serve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the technology we build to the relationships we
                nurture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Impact Goals */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Future Impact Goals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to ambitious goals that will transform how charitable giving works and multiply our impact
              across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2025 Goals</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Impact 100,000+ lives directly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Expand to 50 countries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Partner with 100+ local organizations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Facilitate $50M in donations</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2030 Vision</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Become the leading platform for transparent giving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Impact 1 million lives annually</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Establish sustainable programs in 100 countries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Create a global network of empowered communities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Mission</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Our mission and vision can only be achieved with passionate people like you. Join us in creating a world
            where every act of generosity creates lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Start Donating</span>
            </Link>
            <Link
              href="/leadership"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Users className="h-5 w-5" />
              <span>Meet Our Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
