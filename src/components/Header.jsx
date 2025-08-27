import img from "../assets/CachorroTela.svg";

export default function Header() {
  return (
    <header>
      <h1>Bem-vindo ao Pet Shop do Pedro!</h1>
      <img src={img} alt="Ilustração de um petshop" />
      <a href="https://storyset.com/love">Love illustrations by Storyset</a>
      {/* https://storyset.com/illustration/animal-shelter/bro */}
    </header>
  );
}

//export default Header;
