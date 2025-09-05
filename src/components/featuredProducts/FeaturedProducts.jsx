import ProductCard from "../productCard/ProductCard";
import "./FeaturedProducts.css";

// Dados de exemplo para simular a busca de produtos
const featuredProducts = [
  {
    name: "Premium Dog Food",
    price: 19.99,
    image:
      "https://images.tcdn.com.br/img/img_prod/1326417/racao_jaguar_para_caes_adultos_16_proteinas_5kg_39_1_542df53422abd15c60b4ec3bcee421f0.png",
  },
  {
    name: "Pedigree Dog Food da Myriam",
    price: 29.99,
    image:
      "https://thf.bing.com/th/id/OIP.NRRP47XkIONL9Xb8fdd30wHaHa?w=201&h=201&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
  },
  {
    name: "Premier Yorkshire",
    price: 39.99,
    image:
      "https://a-static.mlcdn.com.br/800x560/premier-yorkshire-filhote-1kg-34-premier-pet/formosaopremiumpetshop/york2/7f7e83b0ce0ae2766990a92808064c3f.jpg",
  },
  {
    name: "Royal Canin Adult",
    price: 49.99,
    image:
      "https://tse1.mm.bing.net/th/id/OIP._y6VqKC4cf_5nc1Z329j3AHaHa?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products-section">
      <h2 className="section-title">Produtos mais vendidos</h2>
      <div className="product-cards-container">
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
