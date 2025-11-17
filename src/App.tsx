import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Implantacao from "./pages/Implantacao";
import Perspectivas from "./pages/Perspectivas";
import Localizacao from "./pages/Localizacao";
import Plantas from "./pages/Plantas";
import Filme from "./pages/Filme";
import SafiraEdition from "./pages/SafiraEdition";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/implantacao" element={<Implantacao />} />
          <Route path="/perspectivas" element={<Perspectivas />} />
          <Route path="/plantas" element={<Plantas />} />
          <Route path="/localizacao" element={<Localizacao />} />
          <Route path="/filme" element={<Filme />} />
          <Route path="/safira-edition" element={<SafiraEdition />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
