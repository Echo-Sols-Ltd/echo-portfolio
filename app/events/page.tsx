import EventCard from "@/components/EventCard"
import { Calendar, MapPin, Users } from "lucide-react"

const upcomingEvents = [
  {
    id: "1",
    title: "Annual Charity Gala: Hearts United",
    date: "March 15, 2024",
    location: "San Francisco Convention Center",
    description:
      "Join us for an evening of inspiration, entertainment, and fundraising to support vulnerable communities worldwide.",
    image: "/charity-gala.png",
    attendees: 500,
    type: "upcoming" as const,
  },
  {
    id: "2",
    title: "Tech for Good Workshop",
    date: "April 8, 2024",
    location: "Lex Tech Headquarters",
    description:
      "Learn how technology can be leveraged to create positive social impact and connect with like-minded innovators.",
    image: "/technology-workshop.png",
    attendees: 150,
    type: "upcoming" as const,
  },
  {
    id: "3",
    title: "Community Outreach Day",
    date: "May 20, 2024",
    location: "Various Locations",
    description:
      "Volunteer with us as we visit local communities to distribute resources and connect with families in need.",
    image: "/community-outreach-volunteers.png",
    attendees: 200,
    type: "upcoming" as const,
  },
]

const pastEvents = [
  {
    id: "4",
    title: "Holiday Gift Drive 2023",
    date: "December 20, 2023",
    location: "Multiple Distribution Centers",
    description:
      "Successfully distributed over 2,000 holiday gifts to children and families in need across 15 communities.",
    image: "/holiday-gift-drive.png",
    attendees: 800,
    type: "past" as const,
  },
  {
    id: "5",
    title: "Clean Water Initiative Launch",
    date: "October 10, 2023",
    location: "Rwanda Partnership Event",
    description:
      "Launched our clean water initiative in partnership with Urukundo Foundation, bringing clean water to 5 villages.",
    image: "/placeholder-zz0am.png",
    attendees: 300,
    type: "past" as const,
  },
  {
    id: "6",
    title: "Education Summit 2023",
    date: "September 5, 2023",
    location: "Stanford University",
    description:
      "Brought together educators, technologists, and philanthropists to discuss innovative approaches to education.",
    image: "/education-summit-conference.png",
    attendees: 400,
    type: "past" as const,
  },
]

export default function EventsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Events & Gatherings</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Join our community events, workshops, and fundraising activities. Together, we create meaningful connections
            and lasting impact.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Events Hosted</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">5,000+</div>
              <div className="text-gray-600">Total Attendees</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
              <div className="text-gray-600">Cities Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss these exciting opportunities to connect, learn, and make a difference in your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Past Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Look back at the amazing events we've hosted and the impact we've created together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Host an Event?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Partner with us to organize community events, fundraisers, or awareness campaigns in your area.
          </p>
          <button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}
