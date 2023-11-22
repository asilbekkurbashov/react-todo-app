import styles from './Header.module.scss'

import { time } from "../UI/data/data";
//icons
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidUserCircle } from "react-icons/bi";

import { useTranslation } from "react-i18next";
import { useAppContext } from "../../hooks/useAppContext";

import { useResponsive } from "../../hooks/useResponsive";
import HeaderSearch from "../header/headerSearch/HeaderSearch";
import HeaderBadge from "../header/headerBadge/HeaderBadge";
import HeaderLang from "../header/headerLang/HeaderLang";

function Header() {
    const { t } = useTranslation();
    const { isMobile } = useResponsive(1200);
    const { setVisibleLeft, setVisibleRight } = useAppContext();
  return (
    <header className={styles.header}>
      {isMobile && (
        <div onClick={() => setVisibleLeft(true)} className={styles.hamburger}>
          <RxHamburgerMenu />
        </div>
      )}
      {!isMobile && <HeaderSearch />}
      <div className={styles.date}>
        {isMobile && <h2 className={styles.todo_list}>{t("TO-DO LIST")}</h2>}
        <p>{time()}</p>
      </div>
      <div className={styles.headerBlock}>
        <HeaderBadge />
        <HeaderLang />
        {isMobile && (
          <div onClick={() => setVisibleRight(true)} className={styles.avatar}>
            <BiSolidUserCircle />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
