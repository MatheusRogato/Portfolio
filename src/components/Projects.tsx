import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const featuredProjects = [
  {
    id: "alagoas-tour",
    name: "Alagoas Tour — Plataforma Marketplace de Turismo",
    role: "Arquiteto de Software & Desenvolvedor Fullstack",
    description: "Concepção arquitetural e desenvolvimento fullstack de um marketplace completo voltado ao setor turístico.\nEstruturação do backend modular em NestJS sob princípios de arquitetura desacoplada e conteinerização via Docker.\nModelagem relacional e otimização de banco de dados com PostgreSQL e Prisma ORM, cobrindo gestão de parceiros, catálogo de passeios e reservas.\nArquitetura de regras de negócio para checkout com divisão de pagamentos (split payment) e controle de disponibilidade em tempo real.\nInterface administrativa e pública dinâmica desenvolvida em Next.js e Tailwind CSS.",
    topics: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Docker", "Tailwind CSS"],
    links: [
      { label: "Ver Repositórios", url: "https://github.com/orgs/TurismoProject/repositories" }
    ]
  },
  {
    id: "recrutamento-hospitality",
    name: "Plataforma de Recrutamento & Banco de Talentos",
    role: "Desenvolvedor Fullstack",
    description: "Sistema completo para captação, triagem e gerenciamento de currículos e perfis profissionais para o setor hoteleiro e gastronômico.\nDesenvolvimento de aplicativo web responsivo em Flutter para a interface dos candidatos e envio de portfólios.\nImplementação de dashboard administrativo interativo em Next.js para visualização, filtros avançados e mudança de status dos candidatos no pipeline de vagas.\nEstruturação da camada de backend/BaaS no Supabase, utilizando PostgreSQL com políticas de segurança em nível de linha (RLS) e regras refinadas de upload em Storage Buckets para armazenamento seguro de currículos e portfólios.\nFoco em usabilidade ágil, layout responsivo e gestão centralizada de dados para agilizar o processo seletivo dos estabelecimentos.",
    topics: ["Flutter", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    links: [
      { label: "Ver Painel", url: "https://github.com/MatheusRogato/Banco_de_talentos_Painel" },
      { label: "Ver App", url: "https://github.com/MatheusRogato/Banco_de_taleentos" }
    ]
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos em Destaque</h2>
          <p className="text-xl text-muted-foreground">
            Confira meus principais trabalhos e contribuições arquiteturais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 animate-slide-in flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative background gradient */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl md:text-2xl mb-2 flex items-center gap-3 group-hover:text-primary transition-colors leading-tight">
                      <Layers className="w-6 h-6 flex-shrink-0" />
                      <span>{project.name}</span>
                    </CardTitle>
                    <CardDescription className="text-primary font-medium text-base mb-2">
                      {project.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="text-foreground/80 text-sm leading-relaxed mb-6 space-y-2 flex-grow">
                  {project.description.split('\n').map((line, i) => (
                    <p key={i}>• {line}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="bg-secondary/50 group-hover:bg-secondary transition-colors">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  {project.links.map((link, linkIndex) => (
                    <Button key={linkIndex} asChild className="flex-1 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        {link.label}
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 rounded-full px-8 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-card-hover"
          >
            <a
              href="https://github.com/MatheusRogato?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Ver Todos os Projetos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
