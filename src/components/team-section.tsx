import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TeamMemberProps {
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

interface TeamSectionProps {
  title: string
  description: string
  members: TeamMemberProps[]
}

export function TeamSection({ title, description, members }: TeamSectionProps) {
  return (
    <section className="py-12 px-4 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamMemberCard({ name, role, bio, image, social }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center bg-card dark:bg-card rounded-lg shadow-sm p-6 transition-all hover:shadow-md border border-border">
      <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold text-foreground">{name}</h3>
      <p className="text-sm text-muted-foreground mb-2">{role}</p>
      <p className="text-center text-sm text-foreground mb-4">{bio}</p>

      <div className="flex space-x-3 mt-auto">
        {social.twitter && (
          <Link
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`${name}'s Twitter`}
          >
            <Twitter size={18} />
            <span className="sr-only">Twitter</span>
          </Link>
        )}
        {social.github && (
          <Link
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`${name}'s GitHub`}
          >
            <Github size={18} />
            <span className="sr-only">GitHub</span>
          </Link>
        )}
        {social.linkedin && (
          <Link
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`${name}'s LinkedIn`}
          >
            <Linkedin size={18} />
            <span className="sr-only">LinkedIn</span>
          </Link>
        )}
      </div>
    </div>
  )
}
