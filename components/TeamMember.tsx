"use client"

import { useState } from "react"
import { Github, Linkedin, Twitter, Mail, ChevronDown, ChevronUp } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  skills: string[]
  image: string
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
  expandedBio?: string
}

export default function TeamMember({ name, role, bio, skills, image, social, expandedBio }: TeamMemberProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="glass-effect rounded-xl overflow-hidden card-hover">
      <div className="p-6">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto ring-4 ring-primary/20">
          <img
            src={image || "/placeholder.svg?height=96&width=96"}
            alt={`${name} - ${role}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Basic Info */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-primary font-medium mb-2">{role}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full">
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                +{skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && expandedBio && (
          <div className="mb-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{expandedBio}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="text-xs bg-background px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Social Links */}
        <div className="flex justify-center space-x-3 mb-4">
          {social.github && (
            <a
              href={social.github}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={`${name}'s GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={`${name}'s Twitter`}
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={`Email ${name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>

        {/* Expand Button */}
        {expandedBio && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-primary hover:text-primary/80 text-sm font-medium flex items-center justify-center space-x-1 transition-colors duration-300"
          >
            <span>{isExpanded ? "Show Less" : "Learn More"}</span>
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        )}
      </div>
    </div>
  )
}
