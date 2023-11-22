import styles from "./HeaderLang.module.scss";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

function HeaderLang() {
  const { i18n } = useTranslation();
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  return (
    <div className={styles.langBlock}>
      <Select
        defaultValue="EN"
        className={styles.currentLang}
        style={{ width: "60px", height: "40px" }}
        onChange={handleChange}
        options={[
          { value: "ru", label: "RU" },
          { value: "en", label: "EN" },
        ]}
      />
    </div>
  );
}

export default HeaderLang;
