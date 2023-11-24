// styles
import styles from "./LeftMenu.module.scss";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { clsx } from "../../helper/clsx";
import { getRoutes } from "../../App/router/appRouter/routes/getRoutes";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { SharedSliceActions } from "../../state/shared/sharedSlice";

function LeftMenu() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { drawerLeft } = useAppSelector(
    (state) => state.SharedSliceReducer
  );
  const handleModal = () => {
    dispatch(SharedSliceActions.setIsModal(true))
    dispatch(SharedSliceActions.setDrawerLeft(false));
  };
  const closeDrawer = () => {
    dispatch(SharedSliceActions.setDrawerLeft(false))
  };

  return (
    <>
      <div
        className={clsx([styles.leftMenu], {
          [styles.leftMenuActive]: drawerLeft,
        })}
      >
        <div className={styles.leftTop}>
          <h2>{t("TO-DO LIST")}</h2>
          <button onClick={handleModal}>{t("Add New Task")}</button>
        </div>
        <div className={styles.leftBottom}>
          <ul>
            {getRoutes().map((el) => (
              <li key={el.key} onClick={closeDrawer}>
                <NavLink to={el.key}>
                  {el.icon} <p>{t(el.label)}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default LeftMenu;
