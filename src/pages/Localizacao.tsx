import GeometricLines from "@/components/GeometricLines";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Localizacao = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background-light via-background to-background-dark">
      <GeometricLines />

      <main className="relative z-10 min-h-screen px-6 py-12">
        <button
          onClick={() => navigate("/menu")}
          className="flex items-center gap-2 text-foreground/80 hover:text-foreground font-cormorant text-lg transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-normal text-foreground tracking-tight mb-8 italic">
            Localização
          </h1>

          <div className="h-px w-32 bg-gradient-to-r from-gold via-gold to-transparent opacity-60 mb-12" />

          <div className="space-y-6 font-cormorant text-xl text-foreground/80 leading-relaxed">
            <p>
              Conteúdo sobre localização do projeto Máxima.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Localizacao;
