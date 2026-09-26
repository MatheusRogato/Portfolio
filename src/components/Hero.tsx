import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 bg-gradient-subtle relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Abstract Modern Animation replacing Profile Photo */}
        <div className="mb-12 flex justify-center animate-scale-in perspective-1000">
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center group">
            {/* Glowing background blur */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 ease-in-out"></div>
            
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary/50 animate-[spin_8s_linear_infinite]"></div>
            <div className="absolute inset-2 rounded-full border-b-2 border-l-2 border-accent/50 animate-[spin_12s_linear_infinite_reverse]"></div>
            
            {/* Inner pulsing core */}
            <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-primary rounded-2xl rotate-45 animate-[bounce_4s_ease-in-out_infinite] shadow-card-hover flex items-center justify-center overflow-hidden">
               <div className="w-full h-full bg-background/20 backdrop-blur-sm absolute inset-0"></div>
               <div className="text-primary-foreground font-mono font-bold text-2xl -rotate-45 relative z-20 animate-pulse">
                 &lt;/&gt;
               </div>
            </div>
            
            {/* Orbiting particles */}
            <div className="absolute w-3 h-3 bg-primary rounded-full top-0 left-1/2 -translate-x-1/2 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            <div className="absolute w-2 h-2 bg-accent rounded-full bottom-0 right-1/4 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          </div>
        </div>

        <div className="mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Matheus Rogato
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
            Fullstack Developer
          </h2>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "400ms" }}>
          Construindo soluções robustas com Flutter, .NET, Ruby on Rails e Node.js.
          Transformando ideias em aplicações de alta performance.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-all shadow-card-hover"
          >
            <a
              href="https://github.com/MatRogax"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 hover:bg-accent/10 transition-all"
          >
            <a
              href="https://www.linkedin.com/in/matheus-rogato/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 hover:bg-secondary transition-all"
          >
            <a
              href="mailto:matheus.rogato@example.com"
              className="flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contato
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
          aria-label="Scroll para baixo"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section >
  );
};

export default Hero;
