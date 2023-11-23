import { useLocation } from "react-router-dom";
import { I_Todo } from "../state/todosSlice/Todos";
import { useCallback, useMemo } from "react";

export const useFilterData = (data: I_Todo[]) => {
  const { pathname } = useLocation();
  const filterData = useCallback(
    (data?: I_Todo[]) => {
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
