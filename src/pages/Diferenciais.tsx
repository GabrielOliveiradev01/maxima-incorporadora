import GeometricLines from "@/components/GeometricLines";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Diferenciais = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background-light via-background to-background-dark">
      <GeometricLines />

      <main className="relative z-10 min-h-screen px-6 py-12">
        <button
          onClick={() => navigate("/menu")}
          className="mb-12 flex items-center gap-2 rounded-full border px-5 py-2 text-sm uppercase tracking-[0.4em] transition-all duration-300 hover:-translate-y-0.5"
          style={{ borderColor: "#B18A74AA", color: "#7B4633CC" }}
        >
          <ArrowLeft className="w-5 h-5" color="#7B4633" />
          Voltar
        </button>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-normal text-foreground tracking-tight mb-8 italic">
            Diferenciais
          </h1>

          <div className="h-px w-32 bg-gradient-to-r from-gold via-gold to-transparent opacity-60 mb-12" />

          <div className="space-y-6 font-cormorant text-xl text-foreground/80 leading-relaxed">
            <p>
              Conteúdo sobre diferenciais do projeto Máxima.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Diferenciais;
