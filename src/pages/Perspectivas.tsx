import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const PERSPECTIVA_FILES = [
  "Captura de Tela 2025-11-09 às 15.23.25.jpg",
  "Captura de Tela 2025-11-09 às 15.23.42.jpg",
  "Captura de Tela 2025-11-09 às 15.23.56.jpg",
  "Captura de Tela 2025-11-09 às 15.25.00.jpg",
  "Captura de Tela 2025-11-09 às 15.25.13.jpg",
  "Captura de Tela 2025-11-09 às 15.25.33.jpg",
  "Captura de Tela 2025-11-09 às 15.25.42.jpg",
  "Captura de Tela 2025-11-09 às 15.26.00.jpg",
  "Captura de Tela 2025-11-09 às 15.26.24.jpg",
  "Captura de Tela 2025-11-09 às 15.26.41.jpg",
  "Captura de Tela 2025-11-09 às 15.26.56.jpg",
  "Captura de Tela 2025-11-09 às 15.27.06.jpg",
  "Captura de Tela 2025-11-09 às 15.27.17.jpg",
  "Captura de Tela 2025-11-09 às 15.27.33.jpg",
  "Captura de Tela 2025-11-09 às 15.27.42.jpg",
  "Captura de Tela 2025-11-09 às 15.27.56.jpg",
  "Captura de Tela 2025-11-09 às 15.28.07.jpg",
  "Captura de Tela 2025-11-09 às 15.28.46.jpg",
  "Captura de Tela 2025-11-09 às 15.29.07.jpg",
  "Captura de Tela 2025-11-09 às 15.29.32.jpg",
  "Captura de Tela 2025-11-09 às 15.32.56.jpg",
] as const;

type PerspectivaFile = (typeof PERSPECTIVA_FILES)[number];

const buildLabel = (file: PerspectivaFile) => {
  const withoutExtension = file.replace(/\.[^/.]+$/, "");
  const normalizedWhitespace = withoutExtension.replace(/_/g, " ").replace(/\s+/g, " ");
  const formattedTime = normalizedWhitespace.replace(
    /(\d{2})\.(?=\d{2}(?:\b|$))/g,
    "$1:"
  );

  return formattedTime.trim();
};

const AUTO_PLAY_INTERVAL = 5000;

const Perspectivas = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBasePath = base.endsWith("/") ? base : `${base}/`;
  const assetQuery = import.meta.env.VITE_ASSET_VERSION
    ? `?v=${import.meta.env.VITE_ASSET_VERSION}`
    : "";

  const images = useMemo(
    () =>
      PERSPECTIVA_FILES.map((file) => ({
        file,
        label: buildLabel(file),
        src: `${normalizedBasePath}perspectiva/${file}${assetQuery}`,
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
              alt={currentImage.label}
              className="w-full h-[60vh] md:h-[70vh] object-cover transition-opacity duration-1000 ease-in-out"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Label */}
        <div className="text-center py-4">
          <p className="font-cormorant text-sm tracking-[0.2em] text-foreground/60">
            {currentImage.label.toUpperCase()}
          </p>
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
                  alt={image.label}
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
