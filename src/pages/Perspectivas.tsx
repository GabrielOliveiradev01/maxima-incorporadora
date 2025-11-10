import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const PERSPECTIVA_GALLERY = [
  {
    file: "Zafir_Presidente_Altino_Voo_Piscina_HR.jpg",
    title: "Piscina Sky Lounge",
    subtitle: "Bungalows imersivos com vista elevada",
  },
  {
    file: "Zafir_Presidente_Altino_Piscina_Bangalo_HR.jpg",
    title: "Piscina Bangalô Privilege",
    subtitle: "Águas tranquilas, lounges exclusivos",
  },
  {
    file: "Zafir_Presidente_Altino_Beach_Tennis_HR.jpg",
    title: "Beach Tennis Club",
    subtitle: "Esporte à beira de um cenário urbano",
  },
  {
    file: "Zafir_Presidente_Altino_Sport_Bar_HR.jpg",
    title: "Sport Bar Signature",
    subtitle: "Celebrar vitórias em alto estilo",
  },
  {
    file: "Zafir_Presidente_Altino_Churrasqueira_HR.jpg",
    title: "Terraço Gourmet",
    subtitle: "Sabores ao ar livre com atmosfera acolhedora",
  },
  {
    file: "Zafir_Presidente_Altino_Gourmet_HR.jpg",
    title: "Cozinha Experiência",
    subtitle: "Gastronomia autoral em ambiente sofisticado",
  },
  {
    file: "Zafir_Presidente_Altino_Mini_Market_HR.jpg",
    title: "Mini Market 24h",
    subtitle: "Praticidade premium ao alcance das mãos",
  },
  {
    file: "Zafir_Presidente_Altino_Coworking_HR.jpg",
    title: "Coworking Boutique",
    subtitle: "Produtividade envolta em design contemporâneo",
  },
  {
    file: "Zafir_Presidente_Altino_Espaco_Corpo_HR.jpg",
    title: "Studio Corpore",
    subtitle: "Wellness intensivo com equipamentos de ponta",
  },
  {
    file: "Zafir_Presidente_Altino_Yoga_HR.jpg",
    title: "Sala Zen & Yoga",
    subtitle: "Respire equilíbrio entre luz e textura",
  },
  {
    file: "Zafir_Presidente_Altino_Espaco_Jovem_HR.jpg",
    title: "Espaço Jovem Urbano",
    subtitle: "Um lounge criativo para novas conexões",
  },
  {
    file: "Zafir_Presidente_Altino_Brinquedoteca_HR.jpg",
    title: "Brinquedoteca Explorers",
    subtitle: "Aventuras lúdicas para a infância",
  },
  {
    file: "Zafir_Presidente_Altino_Playground_HR.jpg",
    title: "Playground Adventure",
    subtitle: "Diversão com toques de paisagismo autoral",
  },
  {
    file: "Zafir_Presidente_Altino_Pet_Care_HR.jpg",
    title: "Pet Care Experience",
    subtitle: "Bem-estar completo para os companheiros",
  },
  {
    file: "Zafir_Presidente_Altino_Quadra_Poli_HR.jpg",
    title: "Quadra Multi Arenas",
    subtitle: "Energia esportiva em ritmo urbano",
  },
  {
    file: "Zafir_Presidente_Altino_Redario_HR.jpg",
    title: "Redário Contemplativo",
    subtitle: "Calma suspendida sob o verde",
  },
  {
    file: "Zafir_Presidente_Altino_Portaria_Diurna_HR.jpg",
    title: "Portaria Galeria",
    subtitle: "Recepção com curadoria de materiais",
  },
  {
    file: "Zafir_Presidente_Altino_Hall_Lobby_HR.jpg",
    title: "Hall Sculptural",
    subtitle: "Primeira impressão em arquitetura sensorial",
  },
  {
    file: "Zafir_Presidente_Albino_Espaco_Mulher_HR.jpg",
    title: "Espaço Mulher Signature",
    subtitle: "Autocuidado com aura de salão boutique",
  },
  {
    file: "Zafir_Presidente_Altino_Spa_Privativo_HR.jpg",
    title: "Spa Privativo",
    subtitle: "Imersão de relaxamento sob luz suave",
  },
  {
    file: "Zafir_Presidente_Altino_Living_Ampliado_R02.jpg",
    title: "Living Ampliado",
    subtitle: "Conforto ilimitado em layout personalizável",
  },
] as const;

type PerspectivaMedia = (typeof PERSPECTIVA_GALLERY)[number];

const AUTO_PLAY_INTERVAL = 5000;

const Perspectivas = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBasePath = base.endsWith("/") ? base : `${base}/`;
  const assetQuery = import.meta.env.VITE_ASSET_VERSION
    ? `?v=${import.meta.env.VITE_ASSET_VERSION}`
    : "";

  const images = useMemo<Array<PerspectivaMedia & { src: string }>>(
    () =>
      PERSPECTIVA_GALLERY.map((item) => ({
        ...item,
        src: `${normalizedBasePath}perspectiva/${item.file}${assetQuery}`,
      })),
    [normalizedBasePath, assetQuery],
  );

  useEffect(() => {
    if (currentIndex >= images.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, images.length]);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [images.length]);

  const currentImage = images[currentIndex];

  if (!currentImage) {
    return null;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-6">
          <button
            onClick={() => navigate("/menu")}
            className="flex items-center gap-2 text-foreground/80 hover:text-foreground font-cormorant text-lg transition-colors border border-foreground/20 px-4 py-2 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <h1 className="font-cormorant text-xl tracking-[0.3em] text-foreground">
            PERSPECTIVAS
          </h1>
        </div>

        {/* Main Image */}
        <div className="flex-1 px-6 pb-4 flex items-center justify-center">
          <div
            key={currentImage.file}
            className="w-full max-w-7xl animate-fade-in"
          >
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="w-full h-[60vh] md:h-[70vh] object-cover transition-opacity duration-1000 ease-in-out"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Label */}
        <div className="text-center py-4">
          <h2 className="font-playfair text-2xl md:text-3xl text-foreground/90">
            {currentImage.title}
          </h2>
          {currentImage.subtitle && (
            <p className="font-cormorant text-sm tracking-[0.2em] text-foreground/60 mt-2">
              {currentImage.subtitle}
            </p>
          )}
        </div>

        {/* Thumbnails */}
        <div className="px-6 pb-8">
          <div className="flex gap-3 justify-center overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={image.file}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 transition-all duration-300 ${
                  currentIndex === index
                    ? "opacity-100 ring-2 ring-gold"
                    : "opacity-50 hover:opacity-75"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Perspectivas;
