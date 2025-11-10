import GeometricLines from "@/components/GeometricLines";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Ruler,
  BedDouble,
  Car,
  Sparkles,
  Layers,
} from "lucide-react";

const PALETTE = {
  background: "#F6EADF",
  primary: "#7B4633",
  accent: "#A15C46",
  soft: "#B18A74",
  text: "#3D2A22",
} as const;

const PLANT_COLLECTION = [
  {
    id: "apartamentos",
    name: "Apartamentos",
    description:
      "Layouts em versões tradicionais, com espaços sociais integrados, varandas generosas e toda a infraestrutura para conforto climático.",
    layouts: [
      {
        id: "apt-72",
        name: "72 m² · 3 Dorms. (2 Suítes)",
        area: "72 m²",
        dorms: "3 dorms. (2 suítes)",
        vagas: "2 vagas",
        signature: "Terraço com churrasqueira a carvão",
        summary:
          "Ambientes integrados com previsão de ar-condicionado na sala e suíte, contemplando banheiros com ventilação natural.",
        highlights: [
          "Terraço com churrasqueira a carvão",
          "2 vagas de garagem",
          "Banheiros com ventilação natural",
          "Previsão para ar-condicionado na suíte",
          "Esquadrias com persiana integrada e vão de 1,40 m",
          "Área técnica dedicada",
          "Previsão para ar-condicionado na sala",
          "Living e jantar integrados",
        ],
      },
      {
        id: "apt-70",
        name: "70 m² · 3 Dorms. (1 Suíte)",
        area: "70 m²",
        dorms: "3 dorms. (1 suíte)",
        vagas: "2 vagas",
        signature: "Lavabo e terraço gourmet",
        summary:
          "Planta pensada para receber, com lavabo, varanda com churrasqueira e previsão de ar-condicionado na sala.",
        highlights: [
          "Lavabo integrado à área social",
          "Terraço com churrasqueira a carvão",
          "2 vagas de garagem",
          "Ambientes sociais integrados",
          "Previsão para ar-condicionado na sala",
          "Esquadrias com persiana integrada e vão de 1,40 m",
          "Área técnica organizada",
        ],
      },
      {
        id: "apt-59",
        name: "59 m² · 2 Dorms. (2 Suítes)",
        area: "59 m²",
        dorms: "2 dorms. (2 suítes)",
        vagas: "1 vaga",
        signature: "Lavabo e terraço amplo",
        summary:
          "Tipologia versátil com suítes espelhadas, terraço generoso e preparo completo para climatização.",
        highlights: [
          "Lavabo e terraço com churrasqueira a carvão",
          "1 vaga de garagem",
          "Previsão para ar-condicionado na suíte",
          "Banheiros com ventilação natural",
          "Esquadrias com persiana integrada e vão de 1,40 m",
          "Área técnica funcional",
          "Sala e cozinha integradas",
          "Previsão para ar-condicionado na sala",
        ],
      },
      {
        id: "apt-56",
        name: "56 m² · 2 Dorms. (1 Suíte)",
        area: "56 m²",
        dorms: "2 dorms. (1 suíte)",
        vagas: "1 vaga",
        signature: "Terraço com churrasqueira",
        summary:
          "Ambientes integrados que se abrem para um terraço amplo, com infraestrutura para climatização nos principais cômodos.",
        highlights: [
          "Terraço com churrasqueira a carvão",
          "1 vaga de garagem",
          "Previsão para ar-condicionado na suíte",
          "Esquadrias com persiana integrada e vão de 1,40 m",
          "Área técnica discreta",
          "Living integrado",
          "Previsão para ar-condicionado na sala",
          "Terraço amplo para convivência",
        ],
      },
    ],
  },
  {
    id: "garden",
    name: "Garden",
    description:
      "Opções com terraços jardim para criar extensões ao ar livre, ideais para receber e aproveitar a sensação de casa.",
    layouts: [
      {
        id: "garden-97",
        name: "97 m² · 3 Dorms. (2 Suítes)",
        area: "97 m²",
        dorms: "3 dorms. (2 suítes)",
        vagas: "2 vagas",
        signature: "Terraço garden com churrasqueira",
        summary:
          "Integração total entre áreas internas e externas, com terraço ajardinado e preparo para climatização completa.",
        highlights: [
          "Terraço garden com churrasqueira a carvão",
          "2 vagas de garagem",
          "Previsão para ar-condicionado na suíte",
          "Previsão para ar-condicionado na sala",
          "Esquadrias com persiana integrada e vão de 1,40 m",
          "Ambientes sociais integrados",
          "Área técnica dedicada",
          "Terraço amplo com possibilidades de paisagismo",
        ],
      },
      {
        id: "garden-93",
        name: "93 m² · 2 Dorms. (2 Suítes)",
        area: "93 m²",
        dorms: "2 dorms. (2 suítes)",
        vagas: "1 vaga",
        signature: "Lavabo e terraço garden",
        summary:
          "Duas suítes completas somadas a um terraço garden com churrasqueira, garantindo ventilação natural e conforto.",
        highlights: [
          "Lavabo e terraço garden com churrasqueira a carvão",
          "1 vaga de garagem",
          "Previsão para ar-condicionado na suíte",
          "Banheiros com ventilação natural",
          "Esquadrias com persiana integrada e vão de 1,40 m",
          "Ambientes integrados",
          "Previsão para ar-condicionado na sala",
          "Área técnica estratégica",
        ],
      },
      {
        id: "garden-92",
        name: "92 m² · 2 Dorms. (1 Suíte)",
        area: "92 m²",
        dorms: "2 dorms. (1 suíte)",
        vagas: "1 vaga",
        signature: "Terraço garden expansivo",
        summary:
          "Conceito garden com ambientes integrados e terraço amplo para criar lounges externos exclusivos.",
        highlights: [
          "Terraço garden com churrasqueira a carvão",
          "1 vaga de garagem",
          "Previsão para ar-condicionado na suíte",
          "Ambientes integrados",
          "Previsão para ar-condicionado na sala",
          "Área técnica",
          "Terraço com espaço para paisagismo",
        ],
      },
    ],
  },
  {
    id: "penthouse",
    name: "Penthouse",
    description:
      "Coberturas suspensas com terraços panorâmicos e experiências exclusivas ao ar livre, pensadas para receber com sofisticação.",
    layouts: [
      {
        id: "penthouse-101",
        name: "101 m² · 3 Dorms. (2 Suítes)",
        area: "101 m²",
        dorms: "3 dorms. (2 suítes)",
        vagas: "2 vagas",
        signature: "Terraço panorâmico com churrasqueira",
        summary:
          "Cobertura com ventilação natural nos banheiros, terraço generoso e esquadrias ampliadas para máxima entrada de luz.",
        highlights: [
          "Terraço panorâmico com churrasqueira a carvão",
          "2 vagas de garagem",
          "Esquadrias com persiana integrada e vão de 1,40 m",
          "Banheiros com ventilação natural",
          "Previsão para ar-condicionado na sala",
          "Ambientes sociais com conexão ao terraço",
        ],
      },
      {
        id: "penthouse-110",
        name: "110 m² · 3 Dorms. (1 Suíte)",
        area: "110 m²",
        dorms: "3 dorms. (1 suíte)",
        vagas: "2 vagas",
        signature: "Lavabo e terraço panorâmico",
        summary:
          "Penthouse que combina lavabo, áreas integradas e preparo completo para climatização em sala e suíte.",
        highlights: [
          "Lavabo e terraço panorâmico com churrasqueira a carvão",
          "2 vagas de garagem",
          "Previsão para ar-condicionado na sala",
          "Previsão para ar-condicionado na suíte",
          "Esquadrias com persiana integrada e vão de 1,40 m",
          "Área técnica dedicada",
          "Ambientes integrados",
        ],
      },
      {
        id: "penthouse-84",
        name: "84 m² · 2 Dorms. (1 Suíte)",
        area: "84 m²",
        dorms: "2 dorms. (1 suíte)",
        vagas: "2 vagas",
        signature: "Terraço panorâmico integrador",
        summary:
          "Cobertura compacta com dois dormitórios, terraço panorâmico e infraestrutura de climatização em todos os ambientes.",
        highlights: [
          "Terraço panorâmico com churrasqueira a carvão",
          "2 vagas de garagem",
          "Previsão para ar-condicionado na suíte",
          "Ambientes integrados",
          "Área técnica",
          "Previsão para ar-condicionado na sala",
          "Esquadrias com persiana integrada e vão de 1,40 m",
        ],
      },
    ],
  },
] as const;

type PlantCollection = (typeof PLANT_COLLECTION)[number];
type PlantLayout = PlantCollection["layouts"][number];

const Plantas = () => {
  const navigate = useNavigate();
  const [activeCategoryId, setActiveCategoryId] = useState<string>(PLANT_COLLECTION[0].id);
  const [activeLayoutId, setActiveLayoutId] = useState<string>(PLANT_COLLECTION[0].layouts[0].id);

  const activeCategory = useMemo<PlantCollection | undefined>(
    () => PLANT_COLLECTION.find((collection) => collection.id === activeCategoryId),
    [activeCategoryId],
  );

  useEffect(() => {
    if (!activeCategory) {
      return;
    }

    const hasLayout = activeCategory.layouts.some((layout) => layout.id === activeLayoutId);
    if (!hasLayout) {
      setActiveLayoutId(activeCategory.layouts[0].id);
    }
  }, [activeCategory, activeLayoutId]);

  const activeLayout = useMemo<PlantLayout | undefined>(() => {
    if (!activeCategory) {
      return undefined;
    }

    return (
      activeCategory.layouts.find((layout) => layout.id === activeLayoutId) ?? activeCategory.layouts[0]
    );
  }, [activeCategory, activeLayoutId]);

  const metrics = activeLayout
    ? [
        { label: activeLayout.area, icon: Ruler },
        { label: activeLayout.dorms, icon: BedDouble },
        { label: activeLayout.vagas, icon: Car },
        { label: activeLayout.signature, icon: Sparkles },
      ]
    : [];

  if (!activeCategory || !activeLayout) {
    return null;
  }

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: PALETTE.background, color: PALETTE.text }}
    >
      <GeometricLines />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-12 md:gap-16 md:px-10">
        <header className="flex items-center justify-between gap-6">
          <button
            onClick={() => navigate("/menu")}
            className="flex items-center gap-2 rounded-full border px-5 py-2 text-sm uppercase tracking-[0.4em] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: `${PALETTE.soft}66`,
              color: `${PALETTE.primary}CC`,
            }}
          >
            <ArrowLeft className="h-4 w-4" color={PALETTE.primary} />
            Voltar
          </button>

          <span
            className="hidden h-px flex-1 md:block"
            style={{
              background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${PALETTE.soft}44 50%, rgba(0,0,0,0) 100%)`,
            }}
          />
        </header>

        <section className="space-y-6">
          <div className="space-y-5">
            <h1
              className="font-playfair text-4xl uppercase tracking-[0.45em] md:text-5xl"
              style={{ color: PALETTE.primary }}
            >
              Plantas Exclusivas
            </h1>
            <p className="max-w-2xl font-cormorant text-lg" style={{ color: `${PALETTE.text}B3` }}>
              Escolha a tipologia que mais combina com o seu estilo. Ambientes pensados em detalhes para entregar
              conforto, funcionalidade e uma estética sofisticada em cada metragem.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {PLANT_COLLECTION.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`rounded-full border px-6 py-2 text-xs uppercase tracking-[0.4em] transition-all duration-300 md:px-8 md:py-3 ${
                  activeCategoryId === category.id ? "shadow-[0_18px_36px_rgba(123,70,51,0.25)]" : "hover:-translate-y-1"
                }`}
                style={
                  activeCategoryId === category.id
                    ? {
                        backgroundColor: PALETTE.primary,
                        color: PALETTE.background,
                        borderColor: PALETTE.primary,
                      }
                    : {
                        backgroundColor: `${PALETTE.background}AA`,
                        color: `${PALETTE.primary}CC`,
                        borderColor: `${PALETTE.soft}66`,
                      }
                }
              >
                {category.name}
              </button>
            ))}
          </div>

          <p className="max-w-3xl font-cormorant text-base" style={{ color: `${PALETTE.text}99` }}>
            {activeCategory.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {activeCategory.layouts.map((layout) => (
              <button
                key={layout.id}
                onClick={() => setActiveLayoutId(layout.id)}
                className={`group flex items-center gap-3 rounded-full border px-6 py-3 text-xs uppercase tracking-[0.4em] transition-all duration-300 md:px-8 md:py-4 ${
                  activeLayoutId === layout.id
                    ? "shadow-[0_18px_36px_rgba(123,70,51,0.25)]"
                    : "hover:-translate-y-1"
                }`}
                style={
                  activeLayoutId === layout.id
                    ? {
                        backgroundColor: PALETTE.primary,
                        color: PALETTE.background,
                        borderColor: PALETTE.primary,
                      }
                    : {
                        backgroundColor: `${PALETTE.background}AA`,
                        color: `${PALETTE.primary}CC`,
                        borderColor: `${PALETTE.soft}66`,
                      }
                }
              >
                <Layers
                  className="h-4 w-4 transition-colors duration-300"
                  color={activeLayoutId === layout.id ? PALETTE.background : PALETTE.primary}
                />
                {layout.name}
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <article
            className="space-y-8 rounded-3xl p-8 shadow-[0_35px_65px_rgba(0,0,0,0.15)]"
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.5em]" style={{ color: `${PALETTE.primary}99` }}>
                Tipologia
              </span>
              <h2
                className="font-playfair text-3xl uppercase tracking-[0.35em] md:text-4xl"
                style={{ color: PALETTE.primary }}
              >
                {activeLayout.name}
              </h2>
              <p className="font-cormorant text-base md:text-lg" style={{ color: `${PALETTE.text}B3` }}>
                {activeLayout.summary}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {metrics.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border px-4 py-3"
                  style={{
                    borderColor: `${PALETTE.soft}55`,
                    backgroundColor: `${PALETTE.background}E6`,
                  }}
                >
                  <Icon className="h-6 w-6" color={PALETTE.primary} />
                  <span
                    className="font-cormorant text-base uppercase tracking-[0.3em]"
                    style={{ color: `${PALETTE.primary}CC` }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-playfair text-xl uppercase tracking-[0.3em]" style={{ color: PALETTE.accent }}>
                Diferenciais da planta
              </h3>
              <ul className="space-y-3">
                {activeLayout.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ color: `${PALETTE.text}CC` }}>
                    <span
                      className="mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: PALETTE.accent }}
                    />
                    <span className="font-cormorant text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <figure
            className="relative overflow-hidden rounded-3xl border shadow-[0_45px_80px_rgba(0,0,0,0.1)]"
            style={{
              borderColor: `${PALETTE.soft}66`,
              background: `linear-gradient(135deg, ${PALETTE.primary} 0%, ${PALETTE.accent} 50%, ${PALETTE.soft} 100%)`,
            }}
          >
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.08)" }} />
            <div className="relative flex h-full min-h-[320px] flex-col justify-end gap-4 p-8 text-white">
              <span className="text-xs uppercase tracking-[0.45em] text-white/80">Ambiente destaque</span>
              <h3 className="font-playfair text-3xl uppercase tracking-[0.35em]">
                {activeLayout.signature}
              </h3>
              <p className="font-cormorant text-base text-white/80">{activeLayout.summary}</p>
            </div>
          </figure>
        </section>
      </main>
    </div>
  );
};

export default Plantas;
