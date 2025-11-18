import GeometricLines from "@/components/GeometricLines";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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

          <section className="grid gap-8 md:grid-cols-2">
            {/* VEMPLAN */}
            <article className="relative overflow-hidden rounded-3xl bg-white/85 p-8 shadow-[0_25px_45px_rgba(0,0,0,0.08)] backdrop-blur-sm">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7B4633] via-[#A15C46] to-transparent" />
              <div className="mb-6 flex items-center gap-3">
                <img 
                  src="/vemplan.png" 
                  alt="VEMPLAN" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed text-[#3D2A22]/80">
                Com a expertise de mais de 30 anos de atuação nas áreas de marketing, desenvolvimento e consultoria
                imobiliária, a VEMPLAN é fruto da união entre o comprometimento e a sólida experiência de profissionais
                verdadeiramente apaixonados pelo que fazem. Sua estratégia comercial é fortemente marcada pelo
                aprimoramento contínuo das práticas de marketing e vendas, pela modernização constante dos processos e
                adequação aos indicadores de mercado, não somente no que se refere à preferência dos consumidores, mas
                também às regiões mais propícias para a implantação de projetos imobiliários de sucesso. Desenvolvendo
                soluções sempre adequadas às exigências de seus clientes, a VEMPLAN credita suas conquistas à prática
                da responsabilidade social e ao forte compromisso que mantém com incorporadores e construtores. O que
                lhe garante confiança e solidez e a faz ser reconhecida ano após ano como uma referência no setor.
              </p>
            </article>

            {/* ZAFIR CONSTRUTORA */}
            <article className="relative overflow-hidden rounded-3xl bg-white/85 p-8 shadow-[0_25px_45px_rgba(0,0,0,0.08)] backdrop-blur-sm">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8F4C37] via-[#A15C46] to-transparent" />
              <div className="mb-6 flex items-center gap-3">
                <img 
                  src="/zafira.png" 
                  alt="ZAFIR CONSTRUTORA" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed text-[#3D2A22]/80">
                Com destacada atuação no mercado, a ZAFIR CONSTRUTORA traz em sua área técnica a satisfação de seus
                clientes, traduzidos em mais de 650.000 m² de área construída e mais de 6.000 unidades entregues.
                Reconhecida pela execução de obras com qualidade, a ZAFIR CONSTRUTORA imprime em seus empreendimentos
                a busca constante pela melhoria da qualidade dos seus produtos, refletidos na qualidade de vida de seus
                clientes.
              </p>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SafiraEdition;


