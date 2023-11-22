import styles from "./HeaderBadge.module.scss";
import { Popover } from "antd";
import { BsFillBellFill } from "react-icons/bs";
import { useAppSelector } from "../../../hooks/useRedux";
import { t } from "i18next";

function HeaderBadge() {
  const { todos } = useAppSelector((state) => state.TodoReducer);
  const dataLength = todos.filter((elem) => !elem.completed);
  const uncompletedTodos = todos.filter((el) => !el.completed);
  const content = uncompletedTodos.map((el, index) => (
    <div key={el.id}>
      <p>
        {index + 1}. {el.title}
      </p>
    </div>
  ));
  return (
    <div className={styles.uncompleted}>
      <Popover
        placement="bottomRight"
        title={t("Uncompleted tasks")}
        content={content}
        trigger="click"
      >
        <BsFillBellFill />
      </Popover>
      <p className={dataLength.length ? styles.countOfUncompleted : ""}>
        {dataLength.length ? dataLength.length : ""}
      </p>
    </div>
  );
}

export default HeaderBadge;
