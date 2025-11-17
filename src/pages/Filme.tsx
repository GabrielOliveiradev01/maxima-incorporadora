import GeometricLines from "@/components/GeometricLines";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Filme = () => {
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
              <span className="text-xs uppercase tracking-[0.45em] text-[#7B4633]/70">Apresentação</span>
              <h1 className="text-4xl font-semibold uppercase tracking-[0.4em] text-[#7B4633] md:text-5xl">
                Filme
              </h1>
            </div>
          </header>

          <section className="space-y-8 rounded-3xl bg-white/85 p-10 shadow-[0_25px_45px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                controlsList="nodownload"
                className="h-full w-full object-contain"
              >
                <source src="/videos/apresentacao.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
            <p className="text-center text-sm text-[#3D2A22]/70">
              Conheça o Máxima Ares Altino em detalhes através do nosso vídeo de apresentação.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Filme;


