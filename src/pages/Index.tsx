import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ImageGallery } from "@/components/home/ImageGallery";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <ImageGallery />
    </Layout>
  );
};

export default Index;
