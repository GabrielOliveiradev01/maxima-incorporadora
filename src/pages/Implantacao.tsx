import GeometricLines from "@/components/GeometricLines";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";

const Implantacao = () => {
  const navigate = useNavigate();
  const implantationSections = useMemo(
    () => [
      {
        id: "garage-1",
        label: "Pavimento Garagem 1",
        heading: "Pavimento Garagem 01",
        accent: "#A15C46",
        image: "/implantacao/pavimento-garagem-1.png",
        items: [
          { code: "12", title: "Mini Market" },
          { code: "13", title: "Espaço Corpo" },
          { code: "14", title: "Fitness" },
        ],
      },
      {
        id: "garage-2",
        label: "Pavimento Garagem 2",
        heading: "Pavimento Garagem 02",
        accent: "#9A533E",
        image: "/implantacao/pavimento-garagem-2.png",
        items: [
          { code: "09", title: "Espaço Gourmet" },
          { code: "10", title: "Salão de Festa" },
        ],
      },
      {
        id: "garage-3",
        label: "Pavimento Garagem 3",
        heading: "Pavimento Garagem 03",
        accent: "#8F4C37",
        image: "/implantacao/pavimento-garagem-3.png",
        items: [
          { code: "01", title: "Porte Cochère" },
          { code: "02", title: "Acesso Veículos" },
          { code: "03", title: "Acesso Pedestres (Social, visitantes e serviço)" },
          { code: "04", title: "Lobby com Pé-Direito Duplo" },
          { code: "05", title: "Delivery" },
          { code: "06", title: "Bicicletário" },
          { code: "07", title: "Pet Place" },
          { code: "08", title: "Pet Care" },
        ],
      },
      {
        id: "lazer",
        label: "Pavimento Lazer",
        heading: "Pavimento Lazer",
        accent: "#7F3F2D",
        image: "/implantacao/pavimento-lazer.png",
        items: [
          { code: "15", title: "Piscina Adulto" },
          { code: "16", title: "Piscina Infantil" },
          { code: "17", title: "Solarium" },
          { code: "18", title: "Bangalôs" },
          { code: "19", title: "Playground" },
          { code: "20", title: "Brinquedoteca" },
          { code: "21", title: "Beach Tennis" },
          { code: "22", title: "Gazebo Gourmet com Spa Privativo" },
          { code: "23", title: "Espaço Wellness" },
          { code: "24", title: "Churrasqueira" },
          { code: "25", title: "Quadra Recreativa" },
          { code: "26", title: "Redários" },
          { code: "27", title: "Yoga" },
          { code: "28", title: "Praça de leitura" },
        ],
      },
    ],
    []
  );
  const [activeSectionId, setActiveSectionId] = useState<string>(implantationSections[0].id);
  const activeSection = implantationSections.find((section) => section.id === activeSectionId) ?? implantationSections[0];

  const handleSelectSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F6EADF] font-poppins text-[#3D2A22]">
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

          <header className="space-y-4">
            <h1 className="text-4xl font-semibold uppercase tracking-[0.35em] text-[#7B4633] md:text-5xl">
              Implantação
            </h1>
            <div className="h-[3px] w-32 bg-gradient-to-r from-transparent via-[#A15C46] to-transparent opacity-80" />
            <p className="max-w-2xl text-base text-[#7B4633]/80">
              Explore cada pavimento e conheça as comodidades cuidadosamente distribuídas pelo Máxima Ares Altino.
            </p>
          </header>

          <section className="space-y-10">
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              {implantationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSelectSection(section.id)}
                  className={`group rounded-full border px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.35em] transition-all duration-300 md:px-8 md:py-4 ${
                    activeSectionId === section.id
                      ? "border-transparent bg-[#7B4633] text-[#F6EADF] shadow-[0_14px_28px_rgba(123,70,51,0.25)]"
                      : "border-[#B18A74]/40 bg-white/70 text-[#7B4633] hover:-translate-y-1 hover:border-[#7B4633]/40 hover:shadow-[0_18px_32px_rgba(0,0,0,0.12)]"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            <article className="rounded-3xl bg-white/70 p-10 shadow-[0_25px_45px_rgba(0,0,0,0.08)] backdrop-blur-md">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-10">
                  <div className="space-y-4">
                    <span className="text-sm uppercase tracking-[0.4em] text-[#7B4633]/70">
                      Implantação
                    </span>
                    <h2
                      className="text-2xl font-semibold uppercase tracking-[0.35em]"
                      style={{ color: activeSection.accent }}
                    >
                      {activeSection.heading}
                    </h2>
                  </div>

                  <div className="relative pl-10">
                    <div
                      className="absolute left-2 top-0 h-full w-px"
                      style={{ backgroundColor: `${activeSection.accent}59` }}
                    />

                    <div className="space-y-6">
                      {activeSection.items.map((item) => (
                        <div key={item.code} className="flex items-center gap-6">
                          <span
                            className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white shadow-lg"
                            style={{ backgroundColor: activeSection.accent }}
                          >
                            {item.code}
                          </span>
                          <span
                            className="text-base font-medium uppercase tracking-[0.35em]"
                            style={{ color: activeSection.accent }}
                          >
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {activeSection.image && (
                  <figure className="relative overflow-hidden rounded-2xl border border-[#B18A74]/40 shadow-[0_18px_32px_rgba(0,0,0,0.12)]">
                    <img
                      src={activeSection.image}
                      alt={activeSection.heading}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
                    <figcaption className="absolute bottom-4 left-4 right-4 rounded-full bg-white/80 px-4 py-2 text-center text-xs uppercase tracking-[0.35em] text-[#7B4633] shadow-sm">
                      Planta {activeSection.heading}
                    </figcaption>
                  </figure>
                )}
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Implantacao;
