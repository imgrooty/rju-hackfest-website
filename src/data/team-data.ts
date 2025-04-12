export interface TeamMember {
    name: string
    role: string
    bio: string
    image: string
    social: {
      twitter?: string
      github?: string
      linkedin?: string
    }
  }
  
  export const organizingCommittee: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "Hackathon Director",
      bio: "Alex has organized over 20 hackathons and is passionate about fostering innovation through collaborative events.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "https://twitter.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Samantha Lee",
      role: "Technical Lead",
      bio: "Full-stack developer with expertise in creating robust platforms for hackathon management and participant engagement.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Marcus Chen",
      role: "Sponsorship Coordinator",
      bio: "Marcus builds relationships with industry partners to provide resources and opportunities for hackathon participants.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Priya Patel",
      role: "Event Manager",
      bio: "Priya handles logistics and ensures that every hackathon runs smoothly from registration to the final presentations.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "David Wilson",
      role: "Marketing Specialist",
      bio: "David creates compelling content to attract diverse participants and promote hackathon events across multiple channels.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Olivia Rodriguez",
      role: "Mentorship Coordinator",
      bio: "Olivia recruits industry experts to provide guidance and support to hackathon participants during the event.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
  ]
  
  export const judgesAndMentors: TeamMember[] = [
    {
      name: "Dr. Sarah Kim",
      role: "Lead Judge",
      bio: "Professor of Computer Science with expertise in AI and machine learning. Has judged over 30 international hackathons.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "https://twitter.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Michael Torres",
      role: "Industry Judge",
      bio: "CTO of TechInnovate with 15 years of experience in software development and product innovation.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Jennifer Wong",
      role: "Mentor",
      bio: "Full-stack developer and open source contributor specializing in web technologies and cloud architecture.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Robert Garcia",
      role: "Mentor",
      bio: "UX/UI design expert who helps teams create intuitive and accessible user experiences for their projects.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Aisha Patel",
      role: "Industry Judge",
      bio: "Product Manager at GlobalTech with a background in entrepreneurship and startup acceleration.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "James Wilson",
      role: "Mentor",
      bio: "Backend developer specializing in scalable architecture and database optimization for high-performance applications.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
  ]
  