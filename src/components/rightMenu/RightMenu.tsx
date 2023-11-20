import styles from "./RightMenu.module.scss";

import { Link } from "react-router-dom";

//icons
import { BiSolidUserCircle } from "react-icons/bi";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { ThemeActions } from "../../state/themeSlice/ThemeSlice";
import {useTranslation} from 'react-i18next'

function RightMenu() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.ThemeReducer);
  const {todos} = useAppSelector(state => state.TodoReducer)
  const completedTodos = todos.filter(el => el.completed)
  const {t} = useTranslation()

  return (
    <div className={styles.rightMenu}>
      <div>
        <div className={styles.user}>
          <h2>{t('Hi, User!')}</h2>
          <BiSolidUserCircle />
        </div>
        <div className={styles.mode}>
          <p>{t('Darkmode')}</p>
          <div className={styles.modePort}>
            <div
              onClick={() => dispatch(ThemeActions.toggleTheme())}
              className={
                theme === "light"
                  ? styles.optionMode
                  : `${styles.optionMode} ${styles.optionDarkMode}`
              }
            >
              <span className={styles.darkMode}>
                <BsFillMoonStarsFill />
              </span>
              <span className={styles.circle}></span>
              <span className={styles.lightMode}>
                <BsFillSunFill />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.allTasks}>
            <p>{t('All tasks')}</p>
            <p>{completedTodos.length}/{todos.length}</p>
          </div>
          <div className={styles.rangeBlock}>
            <div className={styles.range} style={{width: `${(completedTodos.length*100)/todos.length}%`}}></div>
          </div>
        </div>
      </div>
      <div className={styles.made}>
        <div className={styles.by}>
          <Link to="https://t.me/asilbekkurbashov">
            {t('Made by')} Asilbek Kurbashov
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RightMenu;
