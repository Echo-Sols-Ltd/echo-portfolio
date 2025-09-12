interface ProjectStructuredDataProps {
  projects: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    status: string;
    link?:string;
    github?:string

  }>;
}

interface TeamMemberStructuredDataProps {
  teamMembers: Array<{
    name: string;
    role: string;
    image: string;
    social?: {
      github?: string;
      twitter?: string;
      email?: string;
      linkedin?: string;
      ig?: string;
      facebook?: string;
      website?: string;
    };
  }>;
}

export function ProjectStructuredData({
  projects,
}: ProjectStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Echo Solutions Projects",
    description: "Portfolio of technology projects by Echo Solutions",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: `https://www.echo-solution.com${project.image}`,
        category: project.category,
        status: project.status,
        creator: {
          "@type": "Organization",
          name: "Echo Solutions",
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export function TeamMemberStructuredData({
  teamMembers,
}: TeamMemberStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Echo Solutions",
    description:
      "A dynamic team of young tech enthusiasts specializing in AI/ML, cybersecurity, full-stack development, and social impact technology solutions.",
    url: "https://www.echo-solution.com",
    logo: "https://www.echo-solution.com/white.svg",
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      image: `https://www.echo-solution.com${member.image}`,
      description: `${member.name} - ${member.role} at Echo Solutions`,
      worksFor: {
        "@type": "Organization",
        name: "Echo Solutions",
      },
      ...(member.social && {
        sameAs: Object.values(member.social).filter(Boolean),
      }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export function ContactPageStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Echo Solutions",
    description: "Get in touch with Echo Solutions for your technology needs",
    url: "https://www.echo-solution.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Echo Solutions",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@echo-solution.com",
        availableLanguage: "English",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export function AboutPageStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Echo Solutions",
    description:
      "Learn about Echo Solutions, a team of young tech enthusiasts creating innovative technology solutions",
    url: "https://www.echo-solution.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "Echo Solutions",
      description: "We Build, Design, Secure, and Optimize Tech for Impact",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressCountry: "RW",
        addressRegion: "Kigali",
      },
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Cybersecurity",
        "Web Development",
        "Mobile Development",
        "3D Modeling",
        "UI/UX Design",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
