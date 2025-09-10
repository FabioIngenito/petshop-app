//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
// import "./App.css";
// import AnimalCard from "./components/animalCard/AnimalCard";
// import AnimalCarousel from "./components/animalCarousel/AnimalCarousel";
// import Carousel from "./components/carousel/Carousel";
// import CategoryCard from "./components/categoryCard/categoryCard";
// import CategoryCarousel from "./components/categoryCarousel/CategoryCarousel";
// import Navbar from "./components/navbar/Navbar";
// import Hero from "./components/hero/Hero";
// import Footer from "./components/footer/Footer";
// import FeaturedProducts from "./components/featuredProducts/FeaturedProducts";
// import ShopSidebar from "./components/shopSidebar/ShopSidebar";
//import ProductGrid from "./components/productGrid/ProductGrid";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Comprar from "./pages/Comprar";

function App() {
  //const [count, setCount] = useState(0)

  // const lista1 = [
  //   {
  //     title: "Bolinhas",
  //     productCount: 5,
  //     image:
  //       "https://coelmar.com.br/wp-content/uploads/2024/07/Bolinha-pra-Cachorro.jpg",
  //   },
  // ];

  return (
    <>
      {/*       
      <Carousel title="Carrosel 1" />
      <Carousel title="Carrosel 2" /> 
      */}

      {/* 
      <CategoryCard
        category={{
          title: "Brinquedos",
          productCount: "84 itens",
          image:
            "https://coelmar.com.br/wp-content/uploads/2024/07/Bolinha-pra-Cachorro.jpg",
        }}
      />
      */}

      {/* 
      <CategoryCard category={lista1[0]} /> 
      */}

      {/* <CategoryCarousel /> */}

      {/* <AnimalCard
        animal={{
          name: "Rex",
          image: "./src/assets/dog.png",
        }}
      /> */}

      {/* <AnimalCarousel /> */}

      {/* *** Primeira Página **** */}
      {/* 
      <Navbar />
      */}

      {/* <Hero title="Bem-vindo ao pet shop do 'Fulano'!" /> */}

      {/* 
      <CategoryCarousel />
      <FeaturedProducts />
      <AnimalCarousel />
      <Footer /> 
      */}

      {/* *** Segunda Página **** */}
      {/* <ProductGrid /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comprar" element={<Comprar />} />
      </Routes>
    </>
  );
}

export default App;
