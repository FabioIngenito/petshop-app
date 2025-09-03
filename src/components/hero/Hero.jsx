import HeroImg from "../../assets/heroImg.svg";
import "./Hero.css";
import CTAButton from "../CTABtn/CTAButton.jsx";

const Hero = ({ title }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="subtitle">Pet Shop</span>
        <h1>{title}</h1>
        <p>
          Aqui você encontra tudo para seu animal de estimação ficar no estilo
          sempre!
        </p>
        <CTAButton text="Comprar Agora" />
      </div>
      <div className="hero-image-container">
        <img src={HeroImg} alt="Imagem da Seção Hero" />
      </div>
    </section>
  );
};

export default Hero;
