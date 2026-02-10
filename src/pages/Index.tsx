import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ImageGallery } from "@/components/home/ImageGallery";
import { usePageTitle } from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle("Home | BudLab");
  return (
    <Layout>
      <HeroSection />
      <ImageGallery />
      <FeaturedProducts />
    </Layout>
  );
};

export default Index;
