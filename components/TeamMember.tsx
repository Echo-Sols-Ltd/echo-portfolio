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
  social?: {
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
    <div className="group hover:bg-gray-50 transition-all duration-300 rounded-lg p-4 border-b border-gray-100 last:border-b-0">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-blue-300 transition-colors duration-300">
            <img
              src={props.image || "/api/placeholder/64/64"}
              alt={`${props.name} - ${props.role}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name and Role */}
          <div className="mb-3">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {props.name}
            </h3>
            <p className="text-sm text-gray-600 font-medium italic">
              {props.role}
            </p>
          </div>

          {/* Bio for Dev members */}
          {isDev && (
            <div className="mb-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                {props.bio}
              </p>
            </div>
          )}

          {/* Skills for Dev members */}
          {isDev && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {props.skills.slice(0, 4).map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded border"
                  >
                    {skill}
                  </span>
                ))}
                {props.skills.length > 4 && (
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-200">
                    +{props.skills.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Expanded Bio */}
          {isDev && isExpanded && props.expandedBio && (
            <div className="mb-4 p-3 bg-gray-50 rounded border-l-4 border-blue-200">
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {props.expandedBio}
              </p>
              <div className="flex flex-wrap gap-1">
                {props.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs bg-white text-gray-700 px-2 py-1 rounded border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Social Links */}
          <div className="flex items-center gap-3 mb-2">
            {props.social?.github && (
              <a
                href={props.social?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {props.social?.linkedin && (
              <a
                href={props.social?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {props.social?.twitter && (
              <a
                href={props.social?.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
                title="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
            {props.social?.email && (
              <a
                href={`mailto:${props.social?.email}`}
                className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
            {props.social?.ig && (
              <a
                href={props.social?.ig}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-500 transition-colors duration-200"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {props.social?.facebook && (
              <a
                href={props.social?.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                title="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            )}
            {props.social?.website && (
              <a
                href={props.social?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition-colors duration-200"
                title="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Learn More Button */}
          {isDev && props.expandedBio && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 transition-colors duration-200"
            >
              <span>{isExpanded ? "Show Less" : "Learn More"}</span>
              {isExpanded ? (
                <ChevronUp className="h-3 w-3" />
              ) : (
                <ChevronDown className="h-3 w-3" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
