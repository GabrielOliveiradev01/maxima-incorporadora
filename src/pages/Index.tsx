import GeometricLines from "@/components/GeometricLines";
import DecorativeFrames from "@/components/DecorativeFrames";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import logoMaxima from "@/assets/logo-maxima-transparent.png";

const Index = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(true);

  return (
    <div 
      className="relative min-h-screen overflow-hidden"
    >
      {/* Toggle Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowContent(!showContent);
        }}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-gold/40 text-white hover:bg-black/70 transition-all duration-300 hover:scale-110"
        aria-label={showContent ? "Esconder conteúdo" : "Mostrar conteúdo"}
      >
        {showContent ? <EyeOff size={24} /> : <Eye size={24} />}
      </button>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          onEnded={(event) => {
            const target = event.currentTarget;
            if (!target.loop) {
              target.currentTime = 0;
              target.play().catch(() => undefined);
            }
          }}
          className="w-full h-full object-cover"
        >
          <source src="/videos/apresentacao.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Geometric Lines Overlay */}
      <div className="relative z-[2]">
        <GeometricLines />
      </div>
      <div className="relative z-[2]">
        <DecorativeFrames />
      </div>

      {/* Main Content */}
      <main 
        onClick={() => navigate("/menu")}
        className={`relative z-10 flex min-h-screen items-center justify-center px-6 cursor-pointer transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="text-center animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <img 
              src={logoMaxima} 
              alt="Máxima Ares Altino" 
              className="w-full max-w-3xl h-auto animate-glow drop-shadow-2xl"
            />
          </div>

          {/* Decorative Line */}
          <div className="mt-8 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />
          </div>

          {/* Tagline */}
          <p className="mt-8 font-cormorant text-2xl md:text-3xl text-white/95 max-w-2xl mx-auto leading-relaxed italic drop-shadow-lg">
            Onde o luxo encontra a exclusividade
          </p>

          {/* Continue Button */}
          <div className="mt-12">
            <button className="group relative px-12 py-5 border-2 border-gold/80 text-white font-cormorant text-lg tracking-[0.2em] active:scale-95 transition-all duration-300 hover:bg-gold/20 hover:border-gold backdrop-blur-sm">
              <span className="relative z-10 drop-shadow-lg">Explorar empreendimento</span>
            </button>
          </div>
        </div>
      </main>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none z-[3]" />
    </div>
  );
};

export default Index;
