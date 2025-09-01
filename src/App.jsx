//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import AnimalCard from "./components/animalCard/AnimalCard";
import Carousel from "./components/carousel/Carousel";
import CategoryCard from "./components/categoryCard/categoryCard";
import CategoryCarousel from "./components/categoryCarousel/CategoryCarousel";
import Navbar from "./components/navbar/Navbar";

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
      {/* <Navbar /> */}
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
      <AnimalCard
        animal={{
          name: "Rex",
          image: "./src/assets/dog.png",
        }}
      />
    </>
  );
}

export default App;
