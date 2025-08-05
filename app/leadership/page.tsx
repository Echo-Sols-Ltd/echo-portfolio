import TeamMember from "@/components/TeamMember"
import { Users, Heart, Globe, Award, Rocket, Target, Lightbulb, TrendingUp } from "lucide-react"

const leadership = [
  {
    name: "Alexandra Chen",
    role: "Founder & CEO",
    bio: "Former VP of Engineering at a Fortune 500 company, Alexandra left the corporate world to build technology that creates meaningful social impact. She holds an MBA from Stanford and has 15+ years of experience scaling tech platforms.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://linkedin.com/in/alexandra-chen",
      twitter: "https://twitter.com/alexchen",
      email: "alexandra@lextech.org",
    },
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-founder",
    bio: "Former Principal Engineer at Google, Marcus is a software architect passionate about humanitarian technology. He has built systems serving millions of users and now applies that expertise to social good.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://linkedin.com/in/marcus-johnson",
      twitter: "https://twitter.com/marcustech",
      email: "marcus@lextech.org",
    },
  },
  {
    name: "Dr. Sarah Williams",
    role: "Head of Impact & Partnerships",
    bio: "PhD in International Development from Oxford, Sarah spent 12 years with Doctors Without Borders before joining our mission. She leads our partnership strategy and ensures our programs create measurable impact.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://linkedin.com/in/sarah-williams-phd",
      email: "sarah@lextech.org",
    },
  },
  {
    name: "David Rodriguez",
    role: "VP of Growth & Partnerships",
    bio: "Former Director of Partnerships at Charity: Water, David has raised over $100M for social causes. He brings deep expertise in donor relations and strategic partnerships to scale our impact.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://linkedin.com/in/david-rodriguez",
      twitter: "https://twitter.com/davidpartnerships",
      email: "david@lextech.org",
    },
  },
  {
    name: "Emily Zhang",
    role: "Head of Product",
    bio: "Former Senior Product Manager at Airbnb, Emily specializes in building user-centric platforms that scale globally. She's passionate about creating technology that makes giving accessible and transparent.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://linkedin.com/in/emily-zhang-product",
      twitter: "https://twitter.com/emilyzhangpm",
      email: "emily@lextech.org",
    },
  },
  {
    name: "James Thompson",
    role: "Head of Marketing & Communications",
    bio: "Former Creative Director at a top advertising agency, James now uses his storytelling expertise to share impactful stories that inspire action and build our community of changemakers.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://linkedin.com/in/james-thompson-marketing",
      twitter: "https://twitter.com/jamesthompson",
      email: "james@lextech.org",
    },
  },
]

const advisors = [
  {
    name: "Dr. Michael Uwimana",
    role: "Strategic Advisor - Urukundo Foundation Director",
    bio: "Founder of Urukundo Foundation with 20+ years leading community development in Rwanda. Provides strategic guidance on our African partnerships and community-centered approach.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/michael-uwimana",
    },
  },
  {
    name: "Jennifer Park",
    role: "Tech Advisor - Former VP Engineering, Google",
    bio: "Former VP at Google with expertise in scaling global platforms. Advises on technical architecture and growth strategy for social impact startups.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/jennifer-park-google",
    },
  },
  {
    name: "Robert Chen",
    role: "Business Advisor - Former McKinsey Partner",
    bio: "Former McKinsey Partner specializing in nonprofit strategy and social impact measurement. Guides our business model and impact measurement frameworks.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/robert-chen-mckinsey",
    },
  },
]

export default function LeadershipPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Leadership Team</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Meet the passionate leaders driving our mission to connect hearts and change lives through innovative
            technology.
          </p>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Leadership Philosophy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in servant leadership, where our role is to empower our team, partners, and communities to
              achieve their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation-Driven</h3>
              <p className="text-gray-600">
                We lead with creativity and embrace new ideas to solve complex challenges.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mission-First</h3>
              <p className="text-gray-600">Every decision is guided by our commitment to creating meaningful impact.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Collaborative</h3>
              <p className="text-gray-600">We believe in the power of diverse perspectives and inclusive leadership.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Growth-Minded</h3>
              <p className="text-gray-600">We're committed to continuous learning and scaling our impact globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Executive Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced leaders from top tech companies and humanitarian organizations, united by our shared mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Advisory Board</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic advisors who guide our vision and ensure we're building sustainable solutions for global impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor) => (
              <TeamMember key={advisor.name} {...advisor} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Startup Culture</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've built a culture that combines the innovation and agility of a tech startup with the heart and
              purpose of a humanitarian organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation at Speed</h3>
                  <p className="text-gray-600">
                    We move fast and iterate quickly, always testing new ideas to better serve our communities and
                    donors.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Impact-Focused</h3>
                  <p className="text-gray-600">
                    Every feature we build and every partnership we form is evaluated through the lens of social impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Global Perspective</h3>
                  <p className="text-gray-600">
                    Our remote-first culture brings together talent from around the world, reflecting the communities we
                    serve.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Join Our Team</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for passionate individuals who want to use their skills to make a difference.
                Whether you're a developer, designer, marketer, or operations expert, there's a place for you at Lex
                Tech.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-700">Competitive startup equity packages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-700">Meaningful work with global impact</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-700">Collaborative, inclusive environment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Rocket className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-700">Opportunity to shape the future of giving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Whether you want to join our team, partner with us, or simply learn more about our approach, we'd love to
            connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Contact Leadership
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
