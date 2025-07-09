import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const aboutData = [
  {
    title: 'Education',
    company: 'Charotar University of Science and Technology',
    duration: 'Pursuing',
    description: 'B.Tech in Information Technology',
  },
];

export function About() {
  return (
    <section id="about" className="w-full scroll-mt-20">
      <div className="space-y-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline relative inline-block pb-2">
            About Me
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></div>
          </h2>
        </div>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          A glimpse into my professional journey and education.
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <p className="text-muted-foreground leading-relaxed">
          I am a full-stack developer pursuing Information Technology at Charotar University of Science and Technology. With a strong foundation in Data Structures and Algorithms (DSA), I specialize in building scalable, efficient, and user-friendly web applications.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          I am passionate about problem-solving, optimizing performance, and writing clean, maintainable code. Beyond coding, I enjoy exploring new technologies and contributing to open-source projects. I strive to build innovative solutions that make an impact in the tech world.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-0 top-0 h-full w-0.5 bg-border ml-3" aria-hidden="true"></div>
        <div className="space-y-8">
          {aboutData.map((item, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute left-0 top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-background" aria-hidden="true"></div>
              <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.company}{item.duration && ` • ${item.duration}`}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
