import { useState } from "react";
import style from "./Header.module.scss";

const Header = () => {
  const [isActive, setIsActive] = useState("menu");
  const showMenu = () => {
    isActive === "menu" ? setIsActive("menuActive") : setIsActive("menu");
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}></div>
        <div className={style.humbergerMenu} onClick={showMenu}>
          <span></span>
        </div>
        <nav className={style[isActive]}>
          <div className={style.menuItem}>1</div>
          <div className={style.menuItem}>2</div>
          <div className={style.menuItem}>3</div>
          <div className={style.menuItem}>4</div>
          <div className={style.menuItem}>5</div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
