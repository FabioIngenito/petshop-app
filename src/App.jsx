//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Carousel from "./components/carousel/Carousel";
import CategoryCard from "./components/categoryCard/categoryCard";
import Navbar from "./components/navbar/Navbar";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar />
      <Carousel title="Carrosel 1" />
      <Carousel title="Carrosel 2" /> */}
      <CategoryCard
        title={"Brinquedos"}
        productCount={"84 itens"}
        image={
          "https://coelmar.com.br/wp-content/uploads/2024/07/Bolinha-pra-Cachorro.jpg"
        }
      />
    </>
  );
}

export default App;
