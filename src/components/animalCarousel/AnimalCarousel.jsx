import CachorroImg from "../../assets/Cachorro.svg";
import CoelhoImg from "../../assets/Coelho.svg";
import GatoImg from "../../assets/Gato.svg";
import HamsterImg from "../../assets/Hamster.svg";
import PapagaioImg from "../../assets/Papagaio.svg";
import TartarugaImg from "../../assets/Tartaruga.svg";
import Carousel from "../carousel/Carousel.jsx";
import AnimalCard from "../animalCard/AnimalCard.jsx";

const animais = [
  { id: 1, name: "Cachorro", image: CachorroImg },
  { id: 2, name: "Coelho", image: CoelhoImg },
  { id: 3, name: "Gato", image: GatoImg },
  { id: 4, name: "Hamster", image: HamsterImg },
  { id: 5, name: "Papagaio", image: PapagaioImg },
  { id: 6, name: "Tartaruga", image: TartarugaImg },
];

const AnimalCarousel = () => {
  return (
    <Carousel
      title={"Compre a partir de seu Pet"}
      items={animais}
      RenderComponent={({ item }) => <AnimalCard animal={item} />}
    />
  );
};

export default AnimalCarousel;
