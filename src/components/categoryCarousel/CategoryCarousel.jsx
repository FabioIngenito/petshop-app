import CategoryCard from "../categoryCard/categoryCard";
import Carousel from "..\\carousel\\Carousel";

const lista = [
  {
    title: "Acessórios",
    productCount: 64,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyUBXO8s9Chgc2Uan0tFIa4L-65Dk9c525A&s",
  },
  {
    title: "Comida",
    productCount: 30,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.0h2WftHmyTU05KUj29GyowHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Refeição",
    productCount: 22,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.0h2WftHmyTU05KUj29GyowHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Alimento",
    productCount: 11,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.0h2WftHmyTU05KUj29GyowHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

// const lista0 = [];

const categoryCarousel = () => {
  return (
    <Carousel
      title={"Pesquise por Categoria"}
      items={lista}
      RenderComponent={({ item }) => <CategoryCard category={item} />}
    />
  );
};

export default categoryCarousel;
