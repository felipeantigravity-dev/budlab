import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { lovable } from "@/integrations/lovable";
import { toast } from "sonner";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Login realizado com sucesso!");
          navigate("/");
        }
      } else {
        if (!fullName.trim()) {
          toast.error("Digite seu nome completo");
          setLoading(false);
          return;
        }
        const { error } = await signUp(email, password, fullName);
        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Conta criada com sucesso!");
          navigate("/");
        }
      }
    } catch (error) {
      toast.error("Ocorreu um erro. Tente novamente.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in-up">
          <Link to="/" className="inline-block mb-12">
            <span className="font-display text-3xl tracking-wider">
              BUDLAB<span className="text-primary">.</span>
            </span>
          </Link>

          <h1 className="font-display text-4xl mb-2">
            {isLogin ? "BEM-VINDO DE VOLTA" : "CRIAR CONTA"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {isLogin
              ? "Entre na sua conta para continuar comprando"
              : "Crie sua conta e faça parte da comunidade BUDLAB"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-border focus:border-primary outline-none transition-colors bg-transparent"
                  placeholder="Seu nome"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-border focus:border-primary outline-none transition-colors bg-transparent"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-border focus:border-primary outline-none transition-colors bg-transparent pr-12"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-brand w-full disabled:opacity-50"
            >
              {loading ? "Carregando..." : isLogin ? "Entrar" : "Criar Conta"}
            </button>
          </form>

          <p className="mt-8 text-center text-muted-foreground">
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-medium hover:underline"
            >
              {isLogin ? "Criar conta" : "Fazer login"}
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex w-1/2 bg-foreground items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <span className="font-display text-8xl text-background/10">
            BUDLAB
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Login;
