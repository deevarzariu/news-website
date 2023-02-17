import { Link } from "react-router-dom";
import { CATEGORIES } from "constants/Category";
import style from "assets/styles/Header.module.scss";

function Header() {
  return (
    <header className={style.header}>
      <Link className={style.header__linkHome} to="/">
        Generic News Website
      </Link>
      <div className={style.header__links}>
        {CATEGORIES.map(({ path, name }) => (
          <Link className={style.header__link} to={path}>
            {name}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
