import { Link } from "react-router-dom";
import style from "assets/styles/Header.module.scss";

function Header() {
  // business entertainment general health science sports technology
  return (
    <header className={style.header}>
      <Link className={style.header__link} to="/">
        Generic News Website
      </Link>
      <Link className={style.header__link} to="/business">
        Business
      </Link>
      <Link className={style.header__link} to="/entertainment">
        Entertainment
      </Link>
      <Link className={style.header__link} to="/health">
        Health
      </Link>
      <Link className={style.header__link} to="/science">
        Science
      </Link>
      <Link className={style.header__link} to="/sports">
        Sports
      </Link>
      <Link className={style.header__link} to="/technology">
        Technology
      </Link>
    </header>
  );
}

export default Header;
