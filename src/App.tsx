import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { CookieProvider } from "@/contexts/CookieContext";
import CookieBanner from "@/components/ui/CookieBanner";
import Index from "./pages/Index";
import Produtos from "./pages/Produtos";
import Produto from "./pages/Produto";
import Carrinho from "./pages/Carrinho";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <CookieProvider>
            <Toaster />
            <Sonner />
            <CookieBanner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/produto/:id" element={<Produto />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/login" element={<Login />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </CookieProvider>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
