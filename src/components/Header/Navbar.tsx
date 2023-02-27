import { CATEGORIES } from "constants/Category";
import style from "assets/styles/Navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.navbar}>
      {CATEGORIES.map(({ path, name }) => (
        <Link className={style.navbar__link} to={path}>
          {name}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
