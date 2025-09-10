import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import AnimalCarousel from "../components/animalCarousel/AnimalCarousel";
import ProductGrid from "../components/productGrid/ProductGrid";
import Footer from "../components/footer/Footer";

const Comprar = () => {
  return (
    <>
      <Navbar />
      <Hero title="Aqui você encontra os melhores produtos para seu pet" />
      <AnimalCarousel />
      <ProductGrid />
      <Footer />
    </>
  );
};

export default Comprar;
