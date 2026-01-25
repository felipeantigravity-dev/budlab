import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandBanner } from "@/components/home/BrandBanner";
import { AboutPreview } from "@/components/home/AboutPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <BrandBanner />
      <AboutPreview />
    </Layout>
  );
};

export default Index;
