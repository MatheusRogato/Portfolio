import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Código limpo, testável e manutenível seguindo as melhores práticas",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Aplicações otimizadas para máxima velocidade e eficiência",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho em equipe e comunicação efetiva em projetos",
  },
  {
    icon: Zap,
    title: "Aprendizado",
    description: "Sempre explorando novas tecnologias e metodologias",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor Fullstack apaixonado por criar soluções tecnológicas que fazem a diferença
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 animate-slide-in relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-5 rounded-2xl blur-lg pointer-events-none"></div>
            <div className="relative bg-background/60 backdrop-blur-md border border-border/50 p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Engenheiro de Software Fullstack com sólida atuação no desenvolvimento de soluções completas de ponta a ponta — desde aplicações mobile performáticas até backends robustos, distribuídos e de alta escala.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Minha expertise central combina <span className="text-primary font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full">Flutter</span> no ecossistema mobile e web com ecossistemas robustos de backend em <span className="text-primary font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full">C# / .NET</span> e <span className="text-accent font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full">Node.js (NestJS)</span>, além de integrações corporativas complexas com ADVPL/TLPP (TOTVS Protheus). Sou guiado por padrões de Arquitetura, DDD, CQRS e SOLID, priorizando código limpo, testes automatizados e modelagem eficiente de dados (SQL Server, PostgreSQL com Prisma/Supabase e Redis).
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Busco constantemente elevar a qualidade técnica e a produtividade de engenharia, explorando sistemas de inteligência artificial aplicada, microsserviços e mensageria assíncrona para resolver problemas de negócio de alto impacto.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-border/50 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 p-3 bg-gradient-primary rounded-lg inline-block group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
