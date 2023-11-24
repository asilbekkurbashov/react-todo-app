import styles from "./RightMenu.module.scss";
import { Link } from "react-router-dom";

//icons
import { BiSolidUserCircle } from "react-icons/bi";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { ThemeActions } from "../../state/themeSlice/ThemeSlice";
import { useTranslation } from "react-i18next";
import { clsx } from "../../helper/clsx";
import { useDefaultQuery } from "../../state";

function RightMenu() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.ThemeReducer);
  const { data = [] } = useDefaultQuery();
  const completedTodos = data.filter((el) => el.completed);
  const { t } = useTranslation();
  const { drawerRight } = useAppSelector((state) => state.SharedSliceReducer);

  return (
    <div
      className={clsx([styles.rightMenu], {
        [styles.rightMenuActive]: drawerRight,
      })}
    >
      <div>
        <div className={styles.user}>
          <h2>{t("Hi, User!")}</h2>
          <BiSolidUserCircle />
        </div>
        <div className={styles.mode}>
          <p>{t("Darkmode")}</p>
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
            <p>{t("All tasks")}</p>
            <p>
              {completedTodos.length}/{data.length}
            </p>
          </div>
          <div className={styles.rangeBlock}>
            <div
              className={styles.range}
              style={{
                width: `${(completedTodos.length * 100) / data.length}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.made}>
        <div className={styles.by}>
          <Link to="https://t.me/asilbekkurbashov">
            {t("Made by")} Asilbek Kurbashov
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RightMenu;
