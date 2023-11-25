import { useLocation } from "react-router-dom";
import { useCallback, useMemo } from "react";
import { T_TaskItem } from "../state/tasks/task.type";

export const useFilterData = (data: T_TaskItem[]) => {
  const { pathname } = useLocation();
  const filterData = useCallback(
    (data?: T_TaskItem[]) => {
      if (data) {
        switch (pathname) {
          case "/":
            return data;
          case "/today":
            return;
          case "/important":
            return data.filter((el) => el.important);
          case "/completed":
            return data.filter((el) => el.completed);
          case "/uncompleted":
            return data.filter((el) => !el.completed);
          default:
            return [];
        }
      }
    },
    [pathname]
  );
  const newFilterData = useMemo(() => filterData(data), [data, pathname]);
  return newFilterData
};
