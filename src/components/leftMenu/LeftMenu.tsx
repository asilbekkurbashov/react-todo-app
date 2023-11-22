// styles
import styles from "./LeftMenu.module.scss";
import { NavLink } from "react-router-dom";

// icons
import { FaTasks } from "react-icons/fa";
import {
  MdToday,
  MdOutlineNotificationImportant,
  MdOutlineCheckBox,
  MdRadioButtonUnchecked,
} from "react-icons/md";
import { useTranslation } from "react-i18next";

// import { Button, Modal } from 'antd';
// import { useCallback, useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { clsx } from "../../helper/clsx";

function LeftMenu() {
  // const { showModal } = useAppContext();
  const { t } = useTranslation();

  // const [isModalOpen, setIsModalOpen] = useState(false);

  const {visibleLeft, setVisibleLeft,setIsModalOpen} = useAppContext()
  const handleModal = () => {
    setIsModalOpen(true)
    setVisibleLeft(false)
  }
  const closeDrawer = () => {
    setVisibleLeft(false);
  }

  return (
    <>
      <div className={clsx([styles.leftMenu], {[styles.leftMenuActive]: visibleLeft})}>
        <div className={styles.leftTop}>
          <h2>{t("TO-DO LIST")}</h2>
          <button onClick={handleModal}>{t("Add New Task")}</button>
        </div>
        <div className={styles.leftBottom}>
          <ul>
            <li onClick={closeDrawer}>
              <NavLink to="/">
                <FaTasks /> <p>{t("All tasks")}</p>
              </NavLink>
            </li>
            <li onClick={closeDrawer}>
              <NavLink to="today">
                <MdToday />
                {t("Today tasks")}
              </NavLink>
            </li>
            <li onClick={closeDrawer}>
              <NavLink to="important">
                <MdOutlineNotificationImportant /> {t("Important tasks")}
              </NavLink>
            </li>
            <li onClick={closeDrawer}>
              <NavLink to="completed">
                <MdOutlineCheckBox /> {t("Completed tasks")}
              </NavLink>
            </li>
            <li onClick={closeDrawer}>
              <NavLink to="uncompleted">
                <MdRadioButtonUnchecked /> {t("Uncompleted tasks")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LeftMenu;
