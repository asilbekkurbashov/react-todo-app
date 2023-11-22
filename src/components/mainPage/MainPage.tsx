// styles
import styles from "./MainPage.module.scss";

import { Outlet } from "react-router-dom";

//icons
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../hooks/useAppContext";
import { GoPlus } from "react-icons/go";

import { useResponsive } from "../../hooks/useResponsive";
import HeaderSearch from "../header/headerSearch/HeaderSearch";
import Header from "../header/Header";

function MainPage() {
  const { t } = useTranslation();
  const { isMobile } = useResponsive(1200);
  const { showModal } = useAppContext();

  return (
    <div className={styles.mainPage}>
      <Header/>
      {isMobile && <HeaderSearch />}
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>{t("TO-DO LIST")}</footer>
      <div onClick={showModal} className={styles.add_task_phone}>
        <GoPlus />
      </div>
    </div>
  );
}

export default MainPage;
