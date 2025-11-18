import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const PERSPECTIVA_GALLERY = [
  {
    file: "PISCINA ADULTO E INFANTIL COM SOLARIUM.jpg",
    title: "Piscina Adulto e Infantil com Solarium",
  },
  {
    file: "BANGALÔS.jpg",
    title: "Bangalôs",
  },
  {
    file: "BEACH TENNIS.jpg",
    title: "Beach Tennis",
  },
  {
    file: "SPORTS BAR.jpg",
    title: "Sports Bar",
  },
  {
    file: "CHURRASQUEIRA.jpg",
    title: "Churrasqueira",
  },
  {
    file: "ESPAÇO GOURMET.jpg",
    title: "Espaço Gourmet",
  },
  {
    file: "MINI MARKET.jpg",
    title: "Mini Market",
  },
  {
    file: "COWORKING.jpg",
    title: "Coworking",
  },
  {
    file: "ESPAÇO CORPO.jpg",
    title: "Espaço Corpo",
  },
  {
    file: "ESPAÇO YOGA.jpg",
    title: "Espaço Yoga",
  },
  {
    file: "ESPAÇO JOVEM.jpg",
    title: "Espaço Jovem",
  },
  {
    file: "BRINQUEDOTECA.jpg",
    title: "Brinquedoteca",
  },
  {
    file: "PLAYGROUND.jpg",
    title: "Playground",
  },
  {
    file: "PET CARE.jpg",
    title: "Pet Care",
  },
  {
    file: "QUADRA RECREATIVA.jpg",
    title: "Quadra Recreativa",
  },
  {
    file: "REDÁRIO.jpg",
    title: "Redário",
  },
  {
    file: "PORTARIA.jpg",
    title: "Portaria",
  },
  {
    file: "LOBBY.jpg",
    title: "Lobby",
  },
  {
    file: "ESPAÇO WELLNESS.jpg",
    title: "Espaço Wellness",
  },
  {
    file: "SPA PRIVATIVO.jpg",
    title: "Spa Privativo",
  },
  {
    file: "LIVING AMPLIADO.jpg",
    title: "Living Ampliado",
  },
  {
    file: "FITNESS.jpg",
    title: "Fitness",
  },
  {
    file: "SALÃO DE FESTAS.jpg",
    title: "Salão de Festas",
  },
] as const;

type PerspectivaMedia = (typeof PERSPECTIVA_GALLERY)[number];

const AUTO_PLAY_INTERVAL = 5000;

const Perspectivas = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

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

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    // Pausa autoplay temporariamente ao navegar manualmente
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // Pausa autoplay temporariamente ao navegar manualmente
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, [images.length]);

  useEffect(() => {
    if (currentIndex >= images.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    // Limpa o intervalo anterior se existir
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    // Reinicia o autoplay após 3 segundos de inatividade manual
    const timeoutId = setTimeout(() => {
      autoplayRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, AUTO_PLAY_INTERVAL);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [currentIndex, images.length]);

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
            className="flex items-center gap-2 rounded-full border px-5 py-2 text-sm uppercase tracking-[0.4em] transition-all duration-300 hover:-translate-y-0.5"
            style={{ borderColor: "#B18A74AA", color: "#7B4633CC" }}
          >
            <ArrowLeft className="w-4 h-4" color="#7B4633" />
            Voltar
          </button>
          <h1 className="font-cormorant text-xl tracking-[0.3em] text-foreground">
            PERSPECTIVAS
          </h1>
        </div>

        {/* Main Image */}
        <div className="flex-1 px-6 pb-4 flex items-center justify-center relative">
          <div
            key={currentImage.file}
            className="w-full max-w-7xl animate-fade-in relative"
          >
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="w-full h-[60vh] md:h-[70vh] object-cover transition-opacity duration-1000 ease-in-out"
              loading="lazy"
              decoding="async"
            />
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white transition-all duration-300 hover:bg-black/70 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white transition-all duration-300 hover:bg-black/70 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Label */}
        <div className="text-center py-4">
          <h2 className="font-playfair text-2xl md:text-3xl text-foreground/90">
            {currentImage.title}
          </h2>
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
