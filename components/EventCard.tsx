import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  image: string
  attendees: number
  type: "upcoming" | "past"
}

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
      <div className="relative h-48">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
            event.type === "upcoming" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
          }`}
        >
          {event.type === "upcoming" ? "Upcoming" : "Past Event"}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{event.title}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.attendees} attendees</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>

        <Link
          href={`/events/${event.id}`}
          className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
        >
          Learn More
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}
