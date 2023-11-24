import styles from "./Header.module.scss";

import { time } from "../../shared/data/data";
//icons
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidUserCircle } from "react-icons/bi";

import { useTranslation } from "react-i18next";
import { useResponsive } from "../../hooks/useResponsive";
import HeaderSearch from "../header/headerSearch/HeaderSearch";
import HeaderBadge from "../header/headerBadge/HeaderBadge";
import HeaderLang from "../header/headerLang/HeaderLang";
import { SharedSliceActions } from "../../state/shared/sharedSlice";
import { useAppDispatch } from "../../hooks/useRedux";

function Header() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { setDrawerLeft, setDrawerRight } = SharedSliceActions;
  const { isMobile } = useResponsive(1200);
  return (
    <header className={styles.header}>
      {isMobile && (
        <div
          onClick={() => dispatch(setDrawerLeft(true))}
          className={styles.hamburger}
        >
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
          <div
            onClick={() => dispatch(setDrawerRight(true))}
            className={styles.avatar}
          >
            <BiSolidUserCircle />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
