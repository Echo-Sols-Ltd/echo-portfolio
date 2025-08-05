import { Play, Eye, Clock, Calendar } from "lucide-react"

const featuredVideos = [
  {
    id: "1",
    title: "Sarah's Story: From Struggle to Success",
    description:
      "Follow Sarah's journey from poverty to becoming a successful entrepreneur with the help of our education programs.",
    thumbnail: "/african-woman-entrepreneur-success.png",
    duration: "8:45",
    views: "12.5K",
    date: "March 10, 2024",
    category: "Success Stories",
  },
  {
    id: "2",
    title: "Clean Water Project: Rwanda Initiative",
    description: "See how our partnership with Urukundo Foundation brought clean water to 5 villages in Rwanda.",
    thumbnail: "/placeholder-dvb86.png",
    duration: "12:30",
    views: "8.2K",
    date: "February 28, 2024",
    category: "Projects",
  },
  {
    id: "3",
    title: "Education Changes Everything",
    description: "Discover how access to education is transforming entire communities and breaking cycles of poverty.",
    thumbnail: "/african-classroom-education.png",
    duration: "15:20",
    views: "15.7K",
    date: "February 15, 2024",
    category: "Impact",
  },
]

const liveStreams = [
  {
    id: "live1",
    title: "Live from Rwanda: Community Update",
    description: "Join us for a live update from our partners at Urukundo Foundation.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    isLive: true,
    viewers: "234",
    startTime: "Now Live",
  },
  {
    id: "live2",
    title: "Monthly Donor Q&A Session",
    description: "Ask questions about our programs and see your impact in real-time.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    isLive: false,
    viewers: "0",
    startTime: "March 25, 2024 at 3:00 PM PST",
  },
]

const videoCategories = [
  { name: "Success Stories", count: 24, color: "bg-blue-500" },
  { name: "Project Updates", count: 18, color: "bg-green-500" },
  { name: "Impact Reports", count: 12, color: "bg-orange-500" },
  { name: "Behind the Scenes", count: 15, color: "bg-purple-500" },
]

export default function MediaPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Stories of Impact</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Watch real stories from the communities we serve and see the direct impact of your support through our video
            library.
          </p>
        </div>
      </section>

      {/* Live Streams Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Live Streams</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with our communities in real-time and see your impact as it happens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {liveStreams.map((stream) => (
              <div key={stream.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative">
                  <img
                    src={stream.thumbnail || "/placeholder.svg"}
                    alt={stream.title}
                    className="w-full h-48 object-cover"
                  />
                  {stream.isLive && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      LIVE
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {stream.isLive ? `${stream.viewers} watching` : "Scheduled"}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/90 hover:bg-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                      <Play className="h-8 w-8 text-gray-900 ml-1" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stream.title}</h3>
                  <p className="text-gray-600 mb-4">{stream.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {stream.startTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover inspiring stories of transformation and hope from the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    {video.views}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <button className="bg-white/90 hover:bg-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                      <Play className="h-8 w-8 text-gray-900 ml-1" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-orange-500 font-medium mb-2">{video.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{video.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {video.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <p className="text-lg text-gray-600">Explore our video library organized by different themes and topics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoCategories.map((category) => (
              <button key={category.name} className="bg-white p-6 rounded-xl shadow-lg card-hover text-left group">
                <div
                  className={`w-12 h-12 ${category.color} rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Play className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} videos</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Story</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Have you been impacted by our programs? We'd love to feature your story and inspire others.
          </p>
          <button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Submit Your Story
          </button>
        </div>
      </section>
    </div>
  )
}
