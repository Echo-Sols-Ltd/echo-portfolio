import DonationCard from "@/components/DonationCard"
import { Shield, Heart, CheckCircle, Users, Globe, Award } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Make a Difference Today</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-slide-up">
            Your donation directly supports vulnerable communities and creates lasting change through our partnership
            with the Urukundo Foundation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">100% Secure</h3>
              <p className="text-blue-100">Your donation is protected with bank-level security</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparent</h3>
              <p className="text-blue-100">Track exactly how your donation is used</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Impactful</h3>
              <p className="text-blue-100">Direct support to those who need it most</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Choose Your Impact</h2>
              <p className="text-lg text-gray-600 mb-8">
                Every contribution, no matter the size, makes a meaningful difference in someone's life. See how your
                donation translates into real-world impact.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">$25 - Basic Support</h3>
                      <p className="text-gray-600">Provides school supplies for one child for a month</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Heart className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">$50 - Essential Care</h3>
                      <p className="text-gray-600">Covers medical checkup and basic healthcare for a family</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Globe className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">$100 - Community Impact</h3>
                      <p className="text-gray-600">Funds clean water access for a family for 3 months</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">$250+ - Transformational</h3>
                      <p className="text-gray-600">Sponsors vocational training for sustainable income</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <DonationCard />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Trust Lex Tech?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to transparency, accountability, and maximizing the impact of every donation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
              <div className="text-gray-600">Goes directly to programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Lives impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Countries reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5★</div>
              <div className="text-gray-600">Charity rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
