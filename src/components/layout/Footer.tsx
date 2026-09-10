import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-foreground/50 text-sm">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind.
        </p>
        
        <div className="flex items-center gap-6 text-sm text-foreground/50 font-medium">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-accent transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
