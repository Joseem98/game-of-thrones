import { Link } from "react-router-dom";
import './Footer.scss'

export default function Footer() {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/homes">Casas</Link>
      <Link to="/cronology">Cronologia</Link>
    </footer>
  );
}
