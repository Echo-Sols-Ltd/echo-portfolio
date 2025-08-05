import { TrendingUp, Users, Globe, Award, CheckCircle, BarChart3, Target } from "lucide-react"

const metrics = [
  { label: "Total Funding Raised", value: "$5.2M", icon: TrendingUp, color: "text-green-600" },
  { label: "Lives Impacted", value: "10,000+", icon: Users, color: "text-blue-600" },
  { label: "Countries Reached", value: "25", icon: Globe, color: "text-orange-500" },
  { label: "Partner Organizations", value: "50+", icon: Award, color: "text-purple-600" },
]

const investors = [
  {
    name: "Impact Ventures",
    type: "Lead Investor",
    investment: "Series A",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Leading social impact venture capital firm focused on technology for good.",
  },
  {
    name: "Social Good Fund",
    type: "Strategic Partner",
    investment: "Seed Round",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Philanthropic fund supporting innovative solutions to global challenges.",
  },
  {
    name: "Tech for Humanity",
    type: "Angel Investor",
    investment: "Pre-Seed",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Angel network of tech executives investing in humanitarian technology.",
  },
]

const milestones = [
  {
    year: "2021",
    title: "Company Founded",
    description: "Lex Tech was founded with a mission to connect donors with vulnerable communities.",
    achieved: true,
  },
  {
    year: "2022",
    title: "Pre-Seed Funding",
    description: "Raised $500K in pre-seed funding to build our initial platform.",
    achieved: true,
  },
  {
    year: "2023",
    title: "Urukundo Partnership",
    description: "Established strategic partnership with Urukundo Foundation in Rwanda.",
    achieved: true,
  },
  {
    year: "2024",
    title: "Series A Funding",
    description: "Completed $3M Series A round to scale operations globally.",
    achieved: true,
  },
  {
    year: "2024",
    title: "10K Lives Impacted",
    description: "Reached milestone of positively impacting 10,000 lives.",
    achieved: true,
  },
  {
    year: "2025",
    title: "Global Expansion",
    description: "Expand to 50 countries and impact 100,000 lives.",
    achieved: false,
  },
]

export default function InvestorsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Investor Relations</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Join us in building technology that creates meaningful connections and drives social impact at scale.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Key Metrics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our growth and impact metrics demonstrate the scalability and effectiveness of our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
                <div className={`inline-flex p-3 rounded-full bg-gray-100 mb-4`}>
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Investment Opportunity</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Lex Tech represents a unique opportunity to invest in technology that generates both financial returns
                and meaningful social impact. Our platform addresses the $450B global philanthropy market with
                innovative solutions for transparency and connection.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Proven Market Demand</h3>
                    <p className="text-gray-600">
                      Growing demand for transparent, technology-driven philanthropy solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Scalable Technology</h3>
                    <p className="text-gray-600">Platform designed to scale globally with minimal marginal costs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Strong Partnerships</h3>
                    <p className="text-gray-600">
                      Strategic partnerships with established organizations like Urukundo Foundation.
                    </p>
                  </div>
                </div>
              </div>

              <button className="btn-primary">Request Investment Deck</button>
            </div>

            <div className="animate-slide-up">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Highlights</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">300% YoY Growth</div>
                      <div className="text-gray-600">Platform usage and donations</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">95% Retention Rate</div>
                      <div className="text-gray-600">Donor retention and engagement</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Globe className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">25 Countries</div>
                      <div className="text-gray-600">Global reach and expansion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Investors */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Investors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to partner with leading investors who share our vision for technology-driven social impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investors.map((investor) => (
              <div key={investor.name} className="bg-white p-8 rounded-xl shadow-lg card-hover">
                <div className="h-16 mb-6 flex items-center justify-center">
                  <img
                    src={investor.logo || "/placeholder.svg"}
                    alt={investor.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{investor.name}</h3>
                  <div className="text-orange-500 font-medium mb-2">{investor.type}</div>
                  <div className="text-sm text-gray-500 mb-4">{investor.investment}</div>
                  <p className="text-gray-600 text-sm">{investor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Company Milestones</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our journey from startup to global impact platform, with key achievements and future goals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
                        milestone.achieved ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      {milestone.achieved ? (
                        <CheckCircle className="h-8 w-8 text-white" />
                      ) : (
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        <span className="text-sm font-medium text-gray-500">{milestone.year}</span>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Invest in Impact?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join us in building the future of philanthropy and creating technology that changes lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule a Meeting
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Download Pitch Deck
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
