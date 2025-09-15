import "./Carousel.css";
import { ArrowLeft, ArrowRight } from "akar-icons";
import { useRef } from "react";

const Carousel = ({ title, items, RenderComponent }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <h2>{title}</h2>
        <div className="carousel-nav">
          <button className="nav-btn">
            <ArrowLeft className="nav-icon" onClick={() => scroll("left")} />
          </button>
          <button className="nav-btn">
            <ArrowRight className="nav-icon" onClick={() => scroll("right")} />
          </button>
        </div>
      </div>

      <div className="cards-container" ref={carouselRef}>
        {items && RenderComponent ? (
          items.map((componente) => (
            <RenderComponent key={componente.id} item={componente} />
          ))
        ) : (
          <div className="card">Nenhum item para exibir</div>
        )}
      </div>
    </section>
  );
};

export default Carousel;
