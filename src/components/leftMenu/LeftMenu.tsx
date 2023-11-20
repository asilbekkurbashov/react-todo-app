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
import { useAppContext } from "../../hooks/useAppContext";
import { useTranslation } from "react-i18next";

function LeftMenu() {
  const { showModal } = useAppContext();
  const {t} = useTranslation()
  return (
    <div className={styles.leftMenu}>
      <div className={styles.leftTop}>
        <h2>{t('TO-DO LIST')}</h2>
        <button onClick={showModal}>{t('Add New Task')}</button>
      </div>
      <div className={styles.leftBottom}>
        <ul>
          <li>
            <NavLink to="/">
              <FaTasks /> <p>{t('All tasks')}</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="today">
              <MdToday />{t('Today tasks')}
            </NavLink>
          </li>
          <li>
            <NavLink to="important">
              <MdOutlineNotificationImportant /> {t('Important tasks')}
            </NavLink>
          </li>
          <li>
            <NavLink to="completed">
              <MdOutlineCheckBox /> {t('Completed tasks')}
            </NavLink>
          </li>
          <li>
            <NavLink to="uncompleted">
              <MdRadioButtonUnchecked /> {t('Uncompleted tasks')}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftMenu;
