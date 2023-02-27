import { useWindowSize } from "hooks/useWindowSize";
import HeaderMobile from "./HeaderMobile";
import style from "assets/styles/Header.module.scss";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  const { width } = useWindowSize() || {};

  if (!width) {
    return null;
  }

  return (
    <header className={style.header}>
      {width < 800 ? (
        <HeaderMobile />
      ) : (
        <>
          <Link className={style.header__linkHome} to="/">
            Generic News Website
          </Link>
          <Navbar />
        </>
      )}
    </header>
  );
}

export default Header;
