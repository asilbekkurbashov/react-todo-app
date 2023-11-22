import "../../pages/style/StylePages.scss";

import { Popconfirm } from "antd";
import Button from "../Button/Button";
//icons
import { MdToday } from "react-icons/md";
import { AiFillStar, AiFillDelete } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { FaCheck,FaXmark } from "react-icons/fa6";

import { I_Todo } from "../../state/todosSlice/Todos";
import { deleteTodo,getForEdit } from "../../state/todosSlice/Todos";
import { useAppDispatch } from "../../hooks/useRedux";
import { useAppContext } from "../../hooks/useAppContext";
import { useTranslation } from "react-i18next";
import { toggleCompleted } from "../../state/todosSlice/Todos";
import { useDebounce } from "../../hooks/useDebounce";

interface Props {
  data?: I_Todo[];
}

interface Obj {
  id: string;
  title: string;
  date: string;
  description: string;
  directory: string;
  important: boolean;
  completed: boolean;
}

function InfoTodo(props: Props) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { setIsModalOpen, search } = useAppContext();
  const { data } = props;

  const toggleCom = (elem: I_Todo) => {
    const body = { ...elem, completed: !elem.completed };
    dispatch(toggleCompleted(body));
  };
  const toggleImp = (elem: I_Todo) => {
    const body = { ...elem, important: !elem.important };
    dispatch(toggleCompleted(body));
  };

  const getAndEdit = (elem:I_Todo) => {
    dispatch(getForEdit(elem))
    setIsModalOpen(true);
  }

  const debounce = useDebounce<string>(search.toLowerCase());
  const searchedData = data?.filter((el) =>
    el.title.toLowerCase().includes(`${debounce}`)
  );

  const todos = debounce ? searchedData : data;

  return todos?.length ? (
    todos.map((elem: Obj) => {
      return (
        <div className="todo" key={elem.id}>
          <p className="directory">{elem.directory}</p>
          <p className="title">{elem.title}</p>
          <p className="text">{elem.description}</p>
          <div className="date">
            <MdToday /> <p>{elem.date}</p>
          </div>
          <div className="option">
            <Button
              onClick={() => toggleCom(elem)}
              class_btn="for_laptop"
              type_btn={elem.completed ? "completed" : "uncompleted"}
            >
              {elem.completed ? 'completed' : 'uncompleted'}
            </Button>
            <Button
              onClick={() => toggleCom(elem)}
              class_btn = 'for_mobile'
              type_btn={elem.completed ? "completed" : "uncompleted"}
            >
              {elem.completed ? <FaCheck/> : <FaXmark/>}
            </Button>
            <div className="rightOption">
              <span
                onClick={() => toggleImp(elem)}
                className={elem.important ? "important" : ""}
              >
                <AiFillStar />
              </span>
              <Popconfirm
                className="delete"
                title={elem.title}
                description={t('sure')}
                okText={t('Yes')}
                cancelText={t('No')}
                onConfirm={() => dispatch(deleteTodo(elem.id))}
              >
                <span>
                  <AiFillDelete />
                </span>
              </Popconfirm>
              <span onClick={() => getAndEdit(elem)}>
                <HiDotsVertical />
              </span>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div className="not">
      <p>{t('Not found')}</p>
    </div>
  );
}

export default InfoTodo;
