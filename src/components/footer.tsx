import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-card">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {new Date().getFullYear()} Meet Nakrani. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/Meetnakrani007"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/meet-nakrani-61172728b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1EMnsGZBMNhX-UrVauiSlTnrKrp8w8oKn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            <FileText className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="mailto:meetnakrani66@gmail.com" aria-label="Email">
            <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
