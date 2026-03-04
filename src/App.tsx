import { motion } from "motion/react";
import { 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  Star, 
  Heart, 
  Brain, 
  Compass, 
  ShieldCheck,
  Phone,
  Instagram,
  Mail,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=17981642255&text=Ol%C3%A1%2C+tudo+bem%3F+Gostaria+de+agendar+uma+consulta+com+a+psic%C3%B3loga+Carline+Darim+Miglioli%21&type=phone_number&app_absent=0";

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonials = [
    {
      text: "Comecei a terapia buscando apenas um alívio para minha angústia, mas encontrei muito mais. Com o tempo, encarar a vida ficou mais fácil, e cada sessão trouxe clareza e conforto. A Dra. Carline, com seu profissionalismo e acolhimento, transformou esse processo em um momento valioso. Hoje, sigo na terapia não só por necessidade, mas pelo bem que me faz. Agora quero continuar aproveitando essa jornada com mais leveza e sentido.",
      author: "Paciente"
    },
    {
      text: "A terapia semanal não elimina todas as minhas angústias ... mas me dá força para enfrentá-las e seguir meu caminho em frente.",
      author: "Paciente"
    },
    {
      text: "Com as sessões de terapia descobri a força interior que tinha acomodada dentro de mim.",
      author: "Paciente"
    }
  ];

  const issues = [
    {
      title: "Vazio Existencial",
      description: "A sensação de que falta algo, mesmo quando tudo parece estar bem externamente.",
      icon: <Compass className="w-8 h-8 text-primary" />
    },
    {
      title: "Ansiedade e Estresse",
      description: "Dificuldade em lidar com as pressões do dia a dia e preocupações excessivas com o futuro.",
      icon: <Brain className="w-8 h-8 text-primary" />
    },
    {
      title: "Depressão",
      description: "Sentimento persistente de tristeza, perda de interesse e falta de energia para a vida.",
      icon: <Heart className="w-8 h-8 text-primary" />
    },
    {
      title: "Crises Existenciais",
      description: "Momentos de grandes questionamentos sobre quem você é e qual o seu propósito.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />
    }
  ];

  const faqs = [
    {
      question: "Onde fica o consultório em Rio Preto?",
      answer: "Nosso consultório está localizado no bairro Jardim Panorama, em São José do Rio Preto, SP. Oferecemos um ambiente acolhedor e privativo para garantir seu conforto durante as sessões."
    },
    {
      question: "Como funciona a primeira sessão?",
      answer: "A primeira sessão é um momento de acolhimento e escuta inicial. Vamos conversar sobre o que te trouxe à terapia, suas expectativas e como a Logoterapia pode te auxiliar na busca por sentido e equilíbrio emocional."
    },
    {
      question: "Você atende convênios?",
      answer: "Atualmente os atendimentos são particulares, mas emitimos recibo para que você possa solicitar o reembolso junto ao seu plano de saúde, caso ele ofereça essa modalidade."
    },
    {
      question: "Qual a duração das sessões?",
      answer: "As sessões individuais têm duração média de 50 minutos e ocorrem semanalmente, podendo ser ajustadas conforme a necessidade de cada processo terapêutico."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* SEO Hidden Elements */}
      <h1 className="sr-only">Psicóloga em Rio Preto - Carline Darim Miglioli | Terapia Presencial e Online</h1>

      {/* Header/Nav */}
      <nav className="fixed top-0 w-full z-40 bg-secondary/95 backdrop-blur-md border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-2 relative z-10">
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-base md:text-xl font-bold text-primary leading-tight truncate">Carline Darim Miglioli</span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-accent font-semibold flex flex-col md:flex-row md:items-center">
              <span>Psicóloga Clínica</span>
              <span className="md:before:content-['•_'] md:ml-1">CRP 06/59128-0</span>
            </span>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="hidden md:flex items-center gap-8 mr-4">
              <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
              <a href="#atendimento" className="text-sm font-medium hover:text-primary transition-colors">Atendimento</a>
              <a href="#localizacao" className="text-sm font-medium hover:text-primary transition-colors">Localização</a>
            </div>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-[11px] md:text-sm font-bold uppercase md:capitalize hover:bg-[#25D366]/90 transition-all btn-whatsapp-shimmer animate-pulse-subtle whitespace-nowrap shadow-md relative flex items-center justify-center"
            >
              Agendar consulta
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-secondary relative overflow-hidden">
        <div className="section-padding relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin className="w-3 h-3" /> São José do Rio Preto
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-slate-900">
              Encontre o <span className="italic">sentido</span> que move sua vida.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Atendimento <strong>particular</strong> especializado para <strong>adultos e crianças</strong> em Rio Preto, disponível de forma <strong>presencial ou online</strong>. Através da Logoterapia, ajudo você a enfrentar crises, ansiedade e a redescobrir seu propósito.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={WHATSAPP_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Agendar consulta <ArrowRight className="w-4 h-4" />
              </motion.a>
              <div className="flex items-center justify-center sm:justify-start gap-3 px-4 py-2 text-sm text-accent">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Ambiente ético e acolhedor</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mt-12 md:mt-0"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              <img 
                src="hero-2.png" 
                alt="Consultório de Psicologia em Rio Preto" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl max-w-[180px] md:max-w-[200px]">
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-[10px] md:text-xs font-medium text-slate-600 italic leading-tight">"Excelente profissional, trata a raiz do problema. Super indico!"</p>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
      </section>

      {/* About Section */}
      <section id="sobre" className="bg-white">
        <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[3/4] rounded-[60px] overflow-hidden shadow-lg">
                <img 
                  src="hero-2.png" 
                  alt="Carline Darim Miglioli - Psicóloga" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Sobre Mim</span>
            <h2 className="text-4xl md:text-5xl mb-8">Olá, sou Carline Darim Miglioli</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Sou psicóloga clínica com <strong>25 anos de formação</strong> pela Universidade Estadual de Londrina (CRP 06/59128-0). Minha missão é ajudar você a encontrar equilíbrio e bem-estar emocional.
              </p>
              <p>
                Especializada em <strong>Logoterapia e Análise Existencial</strong>, uma abordagem centrada no sentido da vida, fundamentada pelo Dr. Viktor Frankl. Acredito na capacidade humana de superar desafios e ressignificar o sofrimento.
              </p>
              <p>
                Ao longo de duas décadas, tenho acompanhado <strong>adultos e crianças</strong> em suas jornadas de autoconhecimento, oferecendo um espaço de escuta ativa, ética e profunda humanidade.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-primary font-bold">25+</span>
                <span className="text-xs uppercase tracking-wider font-bold text-accent">Anos de Experiência</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-primary font-bold">UEL</span>
                <span className="text-xs uppercase tracking-wider font-bold text-accent">Formação Acadêmica</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Section */}
      <section id="atendimento" className="bg-secondary">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Como posso te ajudar?</h2>
            <p className="text-slate-600 text-lg">
              A terapia é um investimento em você. Atendo <strong>adultos e crianças</strong> em questões que impactam a saúde mental e qualidade de vida.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {issues.map((issue, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="card flex flex-col items-center text-center"
              >
                <div className="mb-6 p-4 bg-primary/5 rounded-2xl">
                  {issue.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{issue.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {issue.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-8 italic">Também atendo casos de vícios, luto e desenvolvimento pessoal.</p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar consulta <MessageCircle className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Logotherapy Section */}
      <section className="bg-primary text-white overflow-hidden relative">
        <div className="section-padding grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8 text-white">O que é a Logoterapia?</h2>
            <div className="space-y-6 opacity-90 leading-relaxed text-lg">
              <p>
                Fundada pelo Dr. Viktor Frankl, a Logoterapia é reconhecida internacionalmente como a "Terceira Escola Vienense de Psicoterapia".
              </p>
              <p>
                Diferente de outras abordagens, ela foca na <strong>vontade de sentido</strong>. Frankl, sobrevivente de campos de concentração, provou que mesmo nas situações mais extremas, o ser humano pode encontrar um motivo para seguir em frente.
              </p>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 italic">
                "Quem tem um 'porquê' para viver suporta quase qualquer 'como'." — Viktor Frankl
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { t: "Foco no Sentido", d: "Ajuda a encontrar direção nas experiências diárias." },
              { t: "Resiliência", d: "Fortalece a capacidade de superar a dor e o sofrimento." },
              { t: "Liberdade e Responsabilidade", d: "Ensina a tomar decisões alinhadas aos seus valores." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white" /> {item.t}
                </h4>
                <p className="text-sm opacity-80">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Diferencial</span>
              <h2 className="text-4xl md:text-5xl mb-8">Flexibilidade para o seu processo terapêutico</h2>
              <ul className="space-y-6">
                {[
                  { t: "Atendimento Presencial", d: "Consultório acolhedor em São José do Rio Preto, proporcionando um ambiente neutro e seguro para sua imersão total." },
                  { t: "Atendimento Online", d: "Sessões por vídeo com a mesma qualidade e sigilo, permitindo que você cuide da sua saúde mental de onde estiver." },
                  { t: "Vínculo e Ética", d: "Independente da modalidade, o compromisso com a ética profissional e a construção de um vínculo sólido permanece o mesmo." },
                  { t: "Foco no Sentido", d: "A Logoterapia aplicada de forma personalizada, ajudando você a encontrar propósito tanto no presencial quanto no online." }
                ].map((b, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{b.t}</h4>
                      <p className="text-slate-500 text-sm">{b.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-square rounded-[40px] overflow-hidden">
                <img 
                  src="hero-1.png" 
                  alt="Sala de atendimento acolhedora" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded-3xl shadow-lg border border-black/5 hidden lg:block">
                <div className="flex items-center gap-4">
                  <Clock className="w-10 h-10 text-primary" />
                  <div>
                    <span className="block font-bold text-xl">Horários Flexíveis</span>
                    <span className="text-sm text-accent">Manhã, Tarde e Noite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">O que dizem os pacientes</h2>
            <p className="text-slate-600">Relatos reais de quem transformou sua vida através da terapia.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="card flex flex-col justify-between italic text-slate-700">
                <p className="mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 not-italic">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  </div>
                  <span className="font-bold text-sm text-slate-900">— {t.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="bg-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Localização</span>
              <h2 className="text-4xl md:text-5xl mb-8">Onde estamos em Rio Preto</h2>
              <div className="space-y-8 mb-10">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Endereço</h4>
                    <p className="text-slate-600">R. José Picerni, 660 - Jardim Panorama<br />São José do Rio Preto - SP, 15091-200</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Contato</h4>
                    <p className="text-slate-600">(17) 98164-2255</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Atendimento</h4>
                    <p className="text-slate-600">Segunda a Sexta: 08h às 20h<br />Sábados: Sob consulta</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="ambiente-1.jpg" alt="Consultório 1" className="rounded-2xl shadow-sm w-full aspect-video object-cover" referrerPolicy="no-referrer" />
                <img src="ambiente-2.jpg" alt="Consultório 2" className="rounded-2xl shadow-sm w-full aspect-video object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            
            <div className="h-[500px] rounded-[40px] overflow-hidden shadow-inner border border-black/5 bg-slate-100 relative">
              {/* Placeholder for Google Maps - In a real app, use an iframe or Google Maps API */}
              <div className="absolute inset-0 flex items-center justify-center text-center p-12">
                <div>
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4 opacity-20" />
                  <p className="text-slate-400 font-medium">Mapa Interativo de São José do Rio Preto</p>
                  <p className="text-xs text-slate-400 mt-2">O mapa será carregado aqui para facilitar sua chegada.</p>
                </div>
              </div>
              <iframe 
                src="https://maps.google.com/maps?q=R.%20Jos%C3%A9%20Picerni,%20660%20-%20Jardim%20Panorama,%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP,%2015091-200&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Dúvidas Frequentes</h2>
            <p className="text-slate-600">Tudo o que você precisa saber antes de começar.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="section-padding">
          <div className="bg-primary rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl mb-8 text-white">Pronto para dar o primeiro passo?</h2>
              <p className="text-xl opacity-90 mb-12">
                Não deixe sua saúde mental para depois. Agende agora sua consulta e comece sua jornada em busca de sentido.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={WHATSAPP_LINK} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#25D366]/90 transition-all shadow-xl flex items-center justify-center gap-2 btn-whatsapp-shimmer animate-pulse-subtle relative"
                >
                  Agendar consulta <MessageCircle className="w-6 h-6" />
                </motion.a>
              </div>
              <p className="mt-8 text-sm opacity-70">Atendimento presencial em São José do Rio Preto e Online para todo o Brasil.</p>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-black/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <span className="font-serif text-2xl font-bold text-primary block mb-4">Carline Darim Miglioli</span>
              <p className="text-slate-500 max-w-sm mb-6">
                Psicóloga clínica com 25 anos de experiência, dedicada a ajudar pessoas a encontrarem sentido e equilíbrio em suas vidas através da Logoterapia.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre Mim</a></li>
                <li><a href="#atendimento" className="hover:text-primary transition-colors">Atendimento</a></li>
                <li><a href="#localizacao" className="hover:text-primary transition-colors">Localização</a></li>
                <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Agendar consulta</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>CRP 06/59128-0</li>
                <li>Psicologia Ética</li>
                <li>Privacidade Garantida</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2026 Carline Darim Miglioli. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
