import GeometricLines from "@/components/GeometricLines";
import DecorativeFrames from "@/components/DecorativeFrames";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logoMaxima from "@/assets/logo-maxima-ares.png";

const Menu = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const menuItems = [
    { title: "Implantação", path: "/implantacao", description: "Conheça o projeto" },
    { title: "Perspectivas", path: "/perspectivas", description: "Visualize os ambientes" },
    { title: "Plantas", path: "/plantas", description: "Descubra as tipologias" },
    { title: "Localização", path: "/localizacao", description: "Localização privilegiada" },
  ];

  const handleMenuClick = (path: string, index: number) => {
    setActiveIndex(index);
    setTimeout(() => navigate(path), 280);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/Imagens/Imagem para menu.jpg"
          alt="Olhar sofisticado"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
      </div>

      <GeometricLines />
      <DecorativeFrames />

      <main className="relative z-20 flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl text-center animate-fade-in">
            {/* Logo */}
          <div className="flex justify-center mb-10">
            <img
              src={logoMaxima}
              alt="Máxima Ares Altino"
              className="h-auto w-full max-w-lg drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            />
          </div>

          <div className="mx-auto mb-16 h-[2px] w-36 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {menuItems.map((item, index) => (
              <button
                key={item.path}
                onClick={() => handleMenuClick(item.path, index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-xl border border-gold/50 bg-black/30 px-10 py-10 text-foreground backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:bg-black/50 hover:shadow-[0_25px_45px_rgba(0,0,0,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${activeIndex === index ? "scale-95 border-gold bg-black/60 shadow-[0_25px_45px_rgba(0,0,0,0.55)]" : ""}`}
                disabled={activeIndex !== null && activeIndex !== index}
              >
                {/* Animated overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${hoveredIndex === index || activeIndex === index ? "opacity-100" : ""}`}
                />

                {/* Corner accents */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-0 top-0 h-12 w-12 border-t border-l border-gold/50 transition-all duration-500 group-hover:h-16 group-hover:w-16" />
                  <div className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-gold/50 transition-all duration-500 group-hover:h-16 group-hover:w-16" />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <span className={`font-playfair text-3xl tracking-wider italic transition-colors duration-500 ${hoveredIndex === index || activeIndex === index ? "text-gold" : "text-foreground"}`}>
                    {item.title}
                  </span>
                  <span className="font-cormorant text-base uppercase tracking-[0.3em] text-white/80 transition-all duration-500 group-hover:text-white">
                    {item.description}
                  </span>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
