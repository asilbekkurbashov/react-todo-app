import "../../pages/StylePages.scss";

import { Popconfirm, message } from "antd";
import Button from "../../shared/ui/Button/Button";
//icons
import { MdToday } from "react-icons/md";
import { AiFillStar, AiFillDelete } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { FaCheck, FaXmark } from "react-icons/fa6";

import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { useTranslation } from "react-i18next";
import { useDebounce } from "../../hooks/useDebounce";
import {
  useDeleteTaskMutation,
  useEditTaskCompletedMutation,
  useEditTaskImportantMutation,
} from "../../state/tasks/task.api";
import { TaskActions } from "../../state/tasks/task.slice";
import { SharedSliceActions } from "../../state/shared/sharedSlice";
import { T_TaskItem } from "../../state/tasks/task.type";

interface Props {
  data?: T_TaskItem[];
}

function InfoTodo(props: Props) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.SharedSliceReducer);
  const [deleteTask] = useDeleteTaskMutation();
  const [editImportant] = useEditTaskImportantMutation();
  const [editCompleted] = useEditTaskCompletedMutation();
  const { data } = props;

  const condirmDelete = async (id: string) => {
    await deleteTask(id);
    message.success(t("successDeleted"));
  };

  const toggleCompleted = async (elem: T_TaskItem) => {
    const body = { ...elem, completed: !elem.completed };
    await editCompleted(body);
  };
  const toggleImportant = async (elem: T_TaskItem) => {
    const body = { ...elem, important: !elem.important };
    await editImportant(body);
  };

  const editTask = (elem: T_TaskItem) => {
    dispatch(TaskActions.setTask(elem));
    dispatch(SharedSliceActions.setIsModal(true));
  };

  const debounce = useDebounce<string>(search.toLowerCase());
  const searchedData = data?.filter((el) =>
    el.title.toLowerCase().includes(`${debounce}`)
  );

  const todos = debounce ? searchedData : data;

  return todos?.length ? (
    todos.map((elem: T_TaskItem) => {
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
              onClick={() => toggleCompleted(elem)}
              class_btn="for_laptop"
              type_btn={elem.completed ? "completed" : "uncompleted"}
            >
              {elem.completed ? t("completed") : t("uncompleted")}
            </Button>
            <Button
              onClick={() => toggleCompleted(elem)}
              class_btn="for_mobile"
              type_btn={elem.completed ? "completed" : "uncompleted"}
            >
              {elem.completed ? <FaCheck /> : <FaXmark />}
            </Button>
            <div className="rightOption">
              <span
                onClick={() => toggleImportant(elem)}
                className={elem.important ? "important" : ""}
              >
                <AiFillStar />
              </span>
              <Popconfirm
                className="delete"
                title={elem.title}
                description={t("sure")}
                okText={t("Yes")}
                cancelText={t("No")}
                onConfirm={() => condirmDelete(elem.id)}
              >
                <span>
                  <AiFillDelete />
                </span>
              </Popconfirm>
              <span onClick={() => editTask(elem)}>
                <HiDotsVertical />
              </span>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div className="not">
      <p>{t("Not found")}</p>
    </div>
  );
}

export default InfoTodo;
