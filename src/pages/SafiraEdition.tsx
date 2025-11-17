import GeometricLines from "@/components/GeometricLines";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

const SafiraEdition = () => {
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
              <span className="text-xs uppercase tracking-[0.45em] text-[#7B4633]/70">Edição exclusiva</span>
              <h1 className="text-4xl font-semibold uppercase tracking-[0.4em] text-[#7B4633] md:text-5xl">
                Safira Edition
              </h1>
            </div>
            <p className="max-w-3xl text-base leading-relaxed text-[#3D2A22]/85">
              Uma edição limitada que eleva o conceito de morar ao mais alto padrão de sofisticação e exclusividade.
            </p>
          </header>

          <section className="space-y-8 rounded-3xl bg-white/85 p-10 shadow-[0_25px_45px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3 text-[#7B4633]">
              <Sparkles className="h-6 w-6" />
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em]">Exclusividade em cada detalhe</h2>
            </div>
            <p className="text-base leading-relaxed text-[#3D2A22]/80">
              A Safira Edition representa o ápice do luxo e da exclusividade no Máxima Ares Altino. Esta edição
              limitada oferece acabamentos premium, layouts diferenciados e uma experiência de morar única, pensada
              para quem busca o extraordinário em cada detalhe.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7B4633]">
                  Características exclusivas
                </h3>
                <ul className="space-y-2 text-sm text-[#3D2A22]/80">
                  <li>• Acabamentos de primeira linha</li>
                  <li>• Layouts diferenciados e exclusivos</li>
                  <li>• Áreas privativas ampliadas</li>
                  <li>• Design de interiores assinado</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7B4633]">
                  Experiência premium
                </h3>
                <ul className="space-y-2 text-sm text-[#3D2A22]/80">
                  <li>• Atendimento personalizado</li>
                  <li>• Entrega com decoração completa</li>
                  <li>• Benefícios exclusivos</li>
                  <li>• Edição limitada e numerada</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SafiraEdition;


