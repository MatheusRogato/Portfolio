import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    company: "Lojas Guido",
    periodTotal: "Fev de 2024 – Presente",
    roles: [
      {
        title: "Desenvolvedor de Software Júnior",
        period: "Nov de 2025 – Presente",
        description: "• Arquitetura e desenvolvimento de microsserviços e APIs RESTful de alta performance em C# (.NET), implementando princípios de Clean Architecture, DTOs otimizados e persistência com EF Core, Dapper e ADO.NET.\n• Desenvolvimento de fluxos e rotinas de mensageria e processamento assíncrono (Worker Services, Redis Streams e push notifications via Firebase Cloud Messaging).\n• Manutenção, refatoração e otimização de consultas e rotinas em SQL Server (T-SQL), envolvendo cálculos complexos de margem, faturamento e views críticas de negócio.\n• Criação e evolução de aplicações mobile corporativas em Flutter, aplicando arquitetura reativa (Cubit/BLoC, GetIt, Dio), rotas modulares e testes de integração com cobertura de slices verticais.\n• Desenvolvimento de integrações e customizações avançadas no ERP TOTVS Protheus utilizando ADVPL / TLPP (MVC, pontos de entrada e handlers personalizados).",
        technologies: ["C#", ".NET", "Flutter", "SQL Server", "ADVPL", "Redis", "Clean Architecture"],
      },
      {
        title: "Estagiário de Desenvolvimento de Software",
        period: "Fev de 2024 – Nov de 2025",
        description: "• Apoio no desenvolvimento e manutenção de rotinas em ADVPL e integração com APIs internas em .NET.\n• Suporte na implementação de interfaces e correção de bugs no aplicativo mobile corporativo em Flutter.\n• Construção de queries, relatórios e análises de dados em SQL Server para suporte a tomadas de decisão operacionais e de vendas.",
        technologies: ["ADVPL", ".NET", "Flutter", "SQL Server"],
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experiência</h2>
          <p className="text-xl text-muted-foreground">
            Minha trajetória profissional e evolução
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="shadow-card transition-all duration-300 animate-slide-in border-l-4 border-l-primary bg-background/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="border-b border-border/50 pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-1">
                    <CardTitle className="text-3xl flex items-center gap-3 text-foreground">
                      <Building2 className="w-8 h-8 text-primary" />
                      {exp.company}
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-2 w-fit text-base py-1">
                    <Calendar className="w-4 h-4" />
                    {exp.periodTotal}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-10">
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-primary before:content-['']">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-muted-foreground" />
                        {role.title}
                      </h3>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {role.period}
                      </span>
                    </div>
                    
                    <div className="text-foreground/80 leading-relaxed space-y-2 mb-6 text-sm md:text-base">
                      {role.description.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {role.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
