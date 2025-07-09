import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-card border-b flex items-center min-h-[calc(100vh-3.5rem)]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Larger Circle and Glow */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="w-96 h-96 relative z-10">
              <Image
                src="/new.jpeg"
                alt="Meet Nakrani"
                fill
                className="rounded-full object-cover border-4 border-primary shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Hero Text Section */}
          <div className="space-y-6">
            <div>
              <p className="text-xl md:text-2xl text-primary font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter">
                Meet Nakrani
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium pt-2">
                Web Developer
              </p>
            </div>

            <p className="text-muted-foreground max-w-lg">
              As a passionate student and full-stack developer, I specialize in
              building dynamic and responsive web applications. With expertise
              in both front-end and back-end technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  Contact Me <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <Link
                href="https://github.com/Meetnakrani007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/meet-nakrani-61172728b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1EMnsGZBMNhX-UrVauiSlTnrKrp8w8oKn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                <FileText className="h-5 w-5" />
                <span>Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
