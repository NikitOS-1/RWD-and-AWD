import { useState } from "react";
import style from "./Header.module.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const showMenu = () => {
    isActive === false ? setIsActive(true) : setIsActive(false);
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}></div>
        <div className={style.humbergerMenu} onClick={showMenu}>
          <span></span>
        </div>
        <nav
          className={[style.menu, [`${isActive ? "active" : " "}`]].join(" ")}>
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
