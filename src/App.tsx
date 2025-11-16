import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Maldives from "./pages/Maldives";
import Bali from "./pages/Bali";
import NewYork from "./pages/NewYork";
import Santorini from "./pages/Santorini";
import Seoul from "./pages/Seoul";
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
        <Route path="/register" element={<Register />} />
          <Route path="/maldives" element={<Maldives />} />
          <Route path="/bali" element={<Bali />} />
          <Route path="/newyork" element={<NewYork />} />
          <Route path="/santorini" element={<Santorini />} />
          <Route path="/seoul" element={<Seoul />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
