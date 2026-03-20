import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import ValueProps from "@/components/sections/ValueProps";
import Testimonials from "@/components/sections/Testimonials";
import StoreLocation from "@/components/sections/StoreLocation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <ValueProps />
        <Testimonials />
        <StoreLocation />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
