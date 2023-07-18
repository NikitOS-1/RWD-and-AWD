import { useState } from "react";
import style from "./Header.module.scss";

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState("hidden");
  const showMenu = () => {
    hamburgerMenu == "hidden"
      ? setHamburgerMenu("show")
      : setHamburgerMenu("hidden");
  };
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}></div>
        <nav className={style.menu}>
          <div className={style.menuItem}>1</div>
          <div className={style.menuItem}>2</div>
          <div className={style.menuItem}>3</div>
          <div className={style.menuItem}>4</div>
          <div className={style.menuItem}>5</div>
          <div className={style.humbergerMenu} onClick={showMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>
      <div className={[style.hiddenMenu, style[hamburgerMenu]].join(" ")}></div>
    </header>
  );
};
export default Header;
