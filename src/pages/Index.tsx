import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ImageGallery } from "@/components/home/ImageGallery";
import { AboutPreview } from "@/components/home/AboutPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <ImageGallery />
      <AboutPreview />
    </Layout>
  );
};

export default Index;
