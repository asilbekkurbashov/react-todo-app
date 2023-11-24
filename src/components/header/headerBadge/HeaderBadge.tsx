import styles from "./HeaderBadge.module.scss";
import { Popover } from "antd";
import { BsFillBellFill } from "react-icons/bs";
import { t } from "i18next";
import { useDefaultQuery } from "../../../state";

function HeaderBadge() {
  const {data=[]} = useDefaultQuery()
  const dataLength = data.filter((elem) => !elem.completed);
  const content = dataLength.map((el, index) => (
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
