"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ChevronDown,
  ChevronUp,
  Instagram,
  Facebook,
  Globe,
} from "lucide-react";

interface BaseTeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
    ig?: string;
    facebook?: string;
    website?: string;
  };
}

interface DevTeamMember extends BaseTeamMember {
  bio: string;
  skills: string[];
  expandedBio?: string;
}

type TeamMemberProps = DevTeamMember | BaseTeamMember;

export default function TeamMember(props: TeamMemberProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isDev = "bio" in props && "skills" in props;

  return (
    <div className="glass-effect rounded-xl overflow-hidden card-hover">
      <div className="p-6">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto ring-4 ring-primary/20">
          <img
            src={props.image || "/placeholder.svg?height=96&width=96"}
            alt={`${props.name} - ${props.role}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Basic Info */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold mb-1">{props.name}</h3>
          <p className="text-primary font-medium mb-2">{props.role}</p>
          {isDev && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {props.bio}
            </p>
          )}
        </div>

        {/* Skills */}
        {isDev && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {props.skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-muted px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
              {props.skills.length > 3 && (
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                  +{props.skills.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Expanded Bio */}
        {isDev && isExpanded && props.expandedBio && (
          <div className="mb-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {props.expandedBio}
            </p>
            <div className="flex flex-wrap gap-2">
              {props.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-background px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Socials */}
        <div className="flex justify-center space-x-3 mb-4">
          {props.social.github && (
            <a
              href={props.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {props.social.linkedin && (
            <a
              href={props.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {props.social.twitter && (
            <a
              href={props.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {props.social.email && (
            <a
              href={`mailto:${props.social.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
          {props.social.ig && (
            <a
              href={props.social.ig}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
          {props.social.facebook && (
            <a
              href={props.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Facebook className="h-5 w-5" />
            </a>
          )}
          {props.social.website && (
            <a
              href={props.social.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Globe className="h-5 w-5" />
            </a>
          )}
        </div>

        {/* Learn More Button */}
        {isDev && props.expandedBio && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-primary hover:text-primary/80 text-sm font-medium flex items-center justify-center space-x-1 transition-colors duration-300"
          >
            <span>{isExpanded ? "Show Less" : "Learn More"}</span>
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
