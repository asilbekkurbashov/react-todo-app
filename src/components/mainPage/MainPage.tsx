// styles
import styles from "./MainPage.module.scss";
import { Select, Popover } from "antd";
import { Outlet } from "react-router-dom";

//icons
import { MdOutlineSearch } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/useRedux";
import { useAppContext } from "../../hooks/useAppContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidUserCircle } from "react-icons/bi";
import { GoPlus } from "react-icons/go";

function MainPage() {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const { todos } = useAppSelector((state) => state.TodoReducer);
  const dataLength = todos.filter((elem) => !elem.completed);
  const { t, i18n } = useTranslation();
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const { search, setSearch, showModal,setVisibleLeft,setVisibleRight } = useAppContext();
  const changeInput = (e: string) => {
    setSearch(e);
  };

  const uncompletedTodos = todos.filter((el) => !el.completed);
  const content = uncompletedTodos.map((el, index) => (
    <div key={el.id}>
      <p>
        {index + 1}. {el.title}
      </p>
    </div>
  ));

  return (
    <div className={styles.mainPage}>
      <header className={styles.header}>
        <div onClick={() => setVisibleLeft(true)} className={styles.hamburger}>
          <RxHamburgerMenu />
        </div>
        <div className={`${styles.search} ${styles.search_laptop}`}>
          <input
            type="text"
            value={search}
            onChange={(e) => changeInput(e.target.value)}
            placeholder={t("Search")}
          />
          <MdOutlineSearch />
        </div>
        <div className={styles.date}>
          <div className={styles.todo_list}>
            <h2>{t("TO-DO LIST")}</h2>
          </div>
          <p>
            {year}, {months[month]} {day}
          </p>
        </div>
        <div className={styles.headerBlock}>
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
          <div onClick={() => setVisibleRight(true)} className={styles.avatar}>
            <BiSolidUserCircle />
          </div>
        </div>
      </header>
      <div className={`${styles.search} ${styles.search_phone_device}`}>
        <input
          type="text"
          value={search}
          onChange={(e) => changeInput(e.target.value)}
          placeholder={t("Search")}
        />
        <MdOutlineSearch />
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>{t("TO-DO LIST")}</footer>
      <div onClick={showModal} className={styles.add_task_phone}>
        <GoPlus />
      </div>
    </div>
  );
}

export default MainPage;
