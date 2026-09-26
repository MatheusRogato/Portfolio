import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    const text = encodeURIComponent(`Olá, sou ${formData.name}. ${formData.message}`);
    const whatsappUrl = `https://wa.me/5582996618349?text=${text}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para o WhatsApp...",
      description: "Você poderá revisar e enviar a mensagem por lá.",
    });
    setFormData({ name: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-xl text-muted-foreground">
            Tem um projeto em mente? Entre em contato!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-in flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário e enviaremos direto para o meu WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
                <div className="space-y-2 flex-grow flex flex-col">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Sua mensagem..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="transition-all duration-200 focus:scale-[1.02] resize-none flex-grow"
                  />
                </div>
                <div className="mt-auto pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 shadow-card-hover group"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Enviar via WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Card className="shadow-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Informações de Contato</CardTitle>
                <CardDescription>
                  Prefere falar diretamente? Use uma das opções abaixo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Email Section */}
                <div className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border/50">
                  <div className="p-2 bg-gradient-primary rounded-lg shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 w-full">
                    <p className="font-medium text-sm text-muted-foreground mb-1">Email</p>
                    <p className="text-foreground mb-3 text-sm sm:text-base break-all">matheusrogatodev@gmail.com</p>
                    <div className="flex flex-wrap gap-2">
                      <Button asChild variant="outline" size="sm" className="text-xs hover:bg-primary hover:text-primary-foreground">
                        <a href="mailto:matheusrogatodev@gmail.com">
                          App Padrão
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="text-xs hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335]">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=matheusrogatodev@gmail.com" target="_blank" rel="noopener noreferrer">
                          Gmail <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="text-xs hover:bg-[#0078D4] hover:text-white hover:border-[#0078D4]">
                        <a href="https://outlook.live.com/mail/0/deeplink/compose?to=matheusrogatodev@gmail.com" target="_blank" rel="noopener noreferrer">
                          Outlook <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                  <div className="p-2 bg-gradient-primary rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground">Localização</p>
                    <p className="text-foreground text-sm sm:text-base">Maceió AL, Brasil</p>
                  </div>
                </div>

                {/* Phone Section */}
                <a href="tel:+5582996618349" className="block hover-scale">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                    <div className="p-2 bg-gradient-primary rounded-lg shrink-0">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Telefone / WhatsApp</p>
                      <p className="text-foreground text-sm sm:text-base">+55 (82) 99661-8349</p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <p className="text-center text-foreground/80 leading-relaxed">
                  <span className="text-2xl mb-2 block">🚀</span>
                  Estou sempre aberto a novos desafios e oportunidades de colaboração.
                  Vamos construir algo incrível juntos!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
