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

import { Button, Modal } from 'antd';
import { useCallback, useState } from "react";
import { ModalComponent } from "../../shared/ui/Modal";
import { useAppContext } from "../../hooks/useAppContext";
import { clsx } from "../../helper/clsx";

function LeftMenu() {
  // const { showModal } = useAppContext();
  const { t } = useTranslation();

  // const [isModalOpen, setIsModalOpen] = useState(false);

  const {visibleLeft, setIsModalOpen} = useAppContext()

  return (
    <>
      <div className={clsx([styles.leftMenu], {[styles.leftMenuActive]: visibleLeft})}>
        <div className={styles.leftTop}>
          <h2>{t("TO-DO LIST")}</h2>
          <button onClick={() => setIsModalOpen(true)}>{t("Add New Task")}</button>
        </div>
        <div className={styles.leftBottom}>
          <ul>
            <li>
              <NavLink to="/">
                <FaTasks /> <p>{t("All tasks")}</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="today">
                <MdToday />
                {t("Today tasks")}
              </NavLink>
            </li>
            <li>
              <NavLink to="important">
                <MdOutlineNotificationImportant /> {t("Important tasks")}
              </NavLink>
            </li>
            <li>
              <NavLink to="completed">
                <MdOutlineCheckBox /> {t("Completed tasks")}
              </NavLink>
            </li>
            <li>
              <NavLink to="uncompleted">
                <MdRadioButtonUnchecked /> {t("Uncompleted tasks")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <ModalComponent>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus labore fuga commodi debitis. Ab ullam facere praesentium distinctio incidunt veritatis, assumenda impedit libero eveniet consequuntur ratione, corrupti neque dicta atque dolor sit minima perspiciatis quisquam consequatur reiciendis sint quaerat dignissimos explicabo vero? Delectus ipsa possimus atque deleniti animi? Officiis commodi hic eos reiciendis voluptatibus magni dolorum itaque sed fugiat possimus dicta illum minus esse error vero cum, saepe nobis enim. Totam, enim deserunt quo nam velit quisquam modi similique officia reprehenderit illum error reiciendis eius quod quam? A quod pariatur exercitationem ea facere, dolor vero ut labore totam id perspiciatis minima architecto consectetur eos dolores. Iste, modi libero esse aliquam nemo aperiam dicta suscipit architecto sapiente sed ea ut repudiandae, qui dolorem harum. Doloremque voluptate natus voluptatibus harum quibusdam vero voluptatum distinctio ad autem unde accusamus amet molestiae sit ducimus ut fugiat est suscipit quae explicabo, commodi delectus. Eos autem quam sint pariatur itaque harum unde dignissimos provident, nulla, delectus eligendi inventore aut consectetur dolor voluptatum a fuga temporibus, assumenda illum praesentium quisquam ducimus corrupti dolorem! Minus, odit consequatur excepturi ipsa vel neque quaerat quam et aspernatur explicabo repellendus commodi ad deleniti alias, mollitia accusamus quidem beatae consequuntur dicta ut.
        </p>
      </ModalComponent>
    </>
  );
}

export default LeftMenu;
