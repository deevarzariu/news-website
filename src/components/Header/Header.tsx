import { useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "hooks/useWindowSize";
import style from "assets/styles/Header.module.scss";
import { CATEGORIES } from "constants/Category";
import Hamburger from "./Hamburger";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize() || {};
  const listClassName = `${style.navbar__links} ${isOpen ? style.active : ""}`;

  function toggle() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  if (!width) {
    return null;
  }

  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <div className={style.navbar__top}>
          <Link className={style.navbar__title} to="/">
            Generic News Website
          </Link>
          <Hamburger isOpen={isOpen} onToggle={toggle} />
        </div>
        <div className={listClassName}>
          {CATEGORIES.map(({ path, name }) => (
            <Link className={style.navbar__link} to={path}>
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
