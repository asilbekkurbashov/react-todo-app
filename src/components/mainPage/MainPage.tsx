// styles
import styles from "./MainPage.module.scss";

import { Outlet } from "react-router-dom";

//icons
import { useTranslation } from "react-i18next";
import { GoPlus } from "react-icons/go";

import { useResponsive } from "../../hooks/useResponsive";
import HeaderSearch from "../header/headerSearch/HeaderSearch";
import Header from "../header/Header";
import {SharedSliceActions} from '../../state/shared/sharedSlice'
import { useAppDispatch } from "../../hooks/useRedux";

function MainPage() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch()
  const {setIsModal} = SharedSliceActions
  const { isMobile } = useResponsive(1200);

  return (
    <div className={styles.mainPage}>
      <Header/>
      {isMobile && <HeaderSearch />}
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>{t("TO-DO LIST")}</footer>
      <div onClick={() => dispatch(setIsModal(true))} className={styles.add_task_phone}>
        <GoPlus />
      </div>
    </div>
  );
}

export default MainPage;
