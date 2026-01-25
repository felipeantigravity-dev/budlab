-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  category TEXT,
  sizes TEXT[] DEFAULT ARRAY['P', 'M', 'G', 'GG'],
  colors TEXT[],
  stock INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Cart items table
CREATE TABLE public.cart_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  size TEXT,
  color TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

-- Products policies (public read, admin write - for now everyone can read)
CREATE POLICY "Products are viewable by everyone" ON public.products
  FOR SELECT USING (true);

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- Cart items policies
CREATE POLICY "Users can view their own cart items" ON public.cart_items
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own cart items" ON public.cart_items
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own cart items" ON public.cart_items
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own cart items" ON public.cart_items
  FOR DELETE USING (auth.uid() = user_id);

-- Function to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger to auto-create profile
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert 4 fictional products
INSERT INTO public.products (name, description, price, image_url, category, sizes, colors, stock, featured) VALUES
  ('Camiseta BUDLAB Core', 'Camiseta oversized premium com logo bordado. Algodão 100% egípcio, corte relaxado.', 189.90, '/products/tshirt-core.jpg', 'camisetas', ARRAY['P', 'M', 'G', 'GG'], ARRAY['Preto', 'Branco', 'Verde'], 50, true),
  ('Moletom BUDLAB Street', 'Moletom pesado com capuz duplo. Interior felpudo, punhos canelados. Estampa costas.', 349.90, '/products/hoodie-street.jpg', 'moletons', ARRAY['P', 'M', 'G', 'GG'], ARRAY['Preto', 'Verde Neon'], 30, true),
  ('Calça Cargo BUDLAB', 'Calça cargo com bolsos laterais funcionais. Tecido ripstop resistente. Ajuste no tornozelo.', 279.90, '/products/cargo-pants.jpg', 'calças', ARRAY['38', '40', '42', '44', '46'], ARRAY['Preto', 'Verde Militar'], 25, true),
  ('Boné BUDLAB Logo', 'Boné dad hat com logo bordado frontal. Aba curva, ajuste traseiro em metal.', 129.90, '/products/cap-logo.jpg', 'acessórios', ARRAY['Único'], ARRAY['Preto', 'Branco'], 40, true);