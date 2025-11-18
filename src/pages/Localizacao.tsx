import GeometricLines from "@/components/GeometricLines";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Clock } from "lucide-react";

const HIGHLIGHTS = [
  {
    title: "Mobilidade inteligente",
    description: "Conexões ágeis para quem valoriza cada minuto do dia.",
    accent: "#7B4633",
    items: [
      { label: "Estação Presidente Altino", detail: "10 min a pé" },
      { label: "Rodoviária de Osasco", detail: "5 min de carro" },
      { label: "Rodovia Castelo Branco", detail: "10 min de carro" },
      { label: "Marginal Pinheiros", detail: "12 min de carro" },
      { label: "Marginal Tietê", detail: "11 min de carro" },
      { label: "Alphaville", detail: "16 min de carro" },
    ],
  },
  {
    title: "Lazer e bem-estar",
    description: "Opções de lazer ao ar livre e cuidados pessoais sempre por perto.",
    accent: "#A15C46",
    items: [
      { label: "Continental Parque Clube", detail: "7 min de carro" },
      { label: "Borboletário Municipal de Osasco", detail: "9 min de carro" },
      { label: "Havan Osasco", detail: "4 min de carro" },
      { label: "Dozza", detail: "5 min a pé" },
    ],
  },
  {
    title: "Educação e saúde",
    description: "Infraestrutura completa para acompanhar cada fase da família.",
    accent: "#8F4C37",
    items: [
      { label: "Colégio Presbiteriano Mackenzie", detail: "16 min de carro" },
      { label: "Colégio Educacional Máximo", detail: "9 min a pé" },
      { label: "BIO RITMO Academia", detail: "4 min de carro" },
      { label: "Hospital e Maternidade São Luiz", detail: "12 min de carro" },
      { label: "Hospital Regional de Osasco", detail: "4 min de carro" },
    ],
  },
  {
    title: "Compras e conveniências",
    description: "Tudo o que importa para o dia a dia a poucos minutos de casa.",
    accent: "#7B4633",
    items: [
      { label: "Shopping União de Osasco", detail: "11 min de carro" },
      { label: "Osasco Plaza Shopping", detail: "11 min de carro" },
      { label: "Continental Shopping", detail: "9 min de carro" },
      { label: "Carrefour Hipermercado Osasco", detail: "13 min de carro" },
      { label: "Sam’s Club", detail: "10 min de carro" },
    ],
  },
] as const;

const LOCATION_GALLERY = [
  {
    src: "/localizacao/mapa-conectividade.jpg",
    alt: "Mapa com as principais conexões do bairro Presidente Altino",
    caption: "Mapa de conectividade",
  },
  {
    src: "/localizacao/estacao-presidente-altino.jpg",
    alt: "Estação Presidente Altino",
    caption: "Estação Presidente Altino a poucos passos",
  },
  {
    src: "/localizacao/shopping-e-servicos.jpg",
    alt: "Área de compras e serviços no entorno",
    caption: "Compras, serviços e conveniência",
  },
  {
    src: "/localizacao/educacao-e-saude.jpg",
    alt: "Instituições de educação e saúde próximas",
    caption: "Educação e saúde ao redor",
  },
  {
    src: "/localizacao/parques-e-lazer.jpg",
    alt: "Parques e áreas de lazer próximos ao empreendimento",
    caption: "Parques e lazer para toda a família",
  },
] as const;

const Localizacao = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F6EADF] text-[#3D2A22]">
      <GeometricLines />

      <main className="relative z-10 min-h-screen px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 animate-fade-in">
          <div className="flex items-center justify-between gap-6">
        <button
          onClick={() => navigate("/menu")}
              className="flex items-center gap-2 rounded-full border px-5 py-2 text-sm uppercase tracking-[0.4em] transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: "#B18A74AA", color: "#7B4633CC" }}
        >
              <ArrowLeft className="h-5 w-5" color="#7B4633" />
          Voltar
        </button>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-[#7B4633]/40 to-transparent md:block" />
          </div>

          <header className="space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.45em] text-[#7B4633]/70">Descubra o entorno</span>
              <h1 className="text-4xl font-semibold uppercase tracking-[0.4em] text-[#7B4633] md:text-5xl">
            Localização
          </h1>
            </div>
            
            {/* Main Location Image */}
            <div className="w-full">
              <figure className="relative overflow-hidden rounded-3xl border border-[#B18A74]/40 bg-white/80 shadow-[0_25px_45px_rgba(0,0,0,0.12)]">
                <img
                  src="/localizacao/mapa-do-lugar.jpg"
                  alt="Mapa do lugar - Máxima Ares Altino"
                  className="h-[400px] w-full object-cover md:h-[500px]"
                  loading="eager"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </figure>
            </div>
            
            <p className="max-w-3xl text-base leading-relaxed text-[#3D2A22]/85">
              Morar em Presidente Altino é escolher um bairro que preserva a essência familiar enquanto oferece
              mobilidade, conveniência e segurança. Aqui, tempo de qualidade ganha um novo significado: estamos perto
              do trabalho, das escolas, do lazer e ao mesmo tempo longe do estresse. A cidade se conecta ao conforto
              de um lar bem localizado, em um endereço que cresce sem abrir mão do convívio.
            </p>
            <div className="rounded-3xl bg-white/85 p-8 shadow-[0_18px_32px_rgba(0,0,0,0.08)]">
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-[#7B4633]">
                Tendência que traduz design
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#3D2A22]/80">
                Tendência traduzem que seu design. Design e arquitetura contemporânea destacam que se valoriza o novo
                estilo de viver. Onde famílias sentem que o convívio ganha em mais sentido. Morar em Presidente Altino
                é viver em família, com mobilidade, qualidade, segurança perto do trabalho, da escola, do lazer e longe
                do estresse. Aqui, a cidade se conecta ao conforto de um lar bem localizado, em um bairro que cresce sem
                perder o ritmo da vida em família.
              </p>
            </div>
          </header>

          <section className="grid gap-6 md:grid-cols-2">
            {HIGHLIGHTS.map((highlight) => (
              <article
                key={highlight.title}
                className="relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-[0_25px_45px_rgba(0,0,0,0.08)] backdrop-blur-sm"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${highlight.accent} 0%, rgba(255,255,255,0) 100%)` }}
                />
                <div className="mb-6 flex items-center gap-3 text-[#7B4633]">
                  <MapPin className="h-5 w-5" />
                  <h2 className="text-lg font-semibold uppercase tracking-[0.35em]">{highlight.title}</h2>
                </div>
                <p className="mb-6 text-sm text-[#3D2A22]/75">{highlight.description}</p>
                <ul className="space-y-4">
                  {highlight.items.map((item) => (
                    <li key={item.label} className="flex items-start justify-between gap-4 text-sm">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7B4633]/10 text-xs font-semibold text-[#7B4633]"
                        >
                          <Clock className="h-4 w-4" />
                        </span>
                        <span className="font-medium uppercase tracking-[0.2em] text-[#3D2A22]/85">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-xs uppercase tracking-[0.25em] text-[#7B4633]">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 text-[#7B4633]">
              <MapPin className="h-5 w-5" />
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em]">Viva conectado ao melhor de Osasco</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {LOCATION_GALLERY.slice(1).map((image) => (
                <figure
                  key={image.src}
                  className="group relative overflow-hidden rounded-3xl border border-[#B18A74]/40 bg-white/80 shadow-[0_18px_32px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:-translate-y-1"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="px-5 py-4 text-center text-xs uppercase tracking-[0.3em] text-[#7B4633]">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
          </div>
          </section>

          <footer className="space-y-2 border-t border-[#B18A74]/30 pt-6 text-xs uppercase tracking-[0.3em] text-[#7B4633]/70">
            <p>Fonte: Google Maps</p>
            <p>Tempo estimado de deslocamento considerando o tráfego médio.</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Localizacao;
