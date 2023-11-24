import { useTranslation } from "react-i18next";

import { BsFillClipboardCheckFill, BsUiRadiosGrid } from "react-icons/bs";
import { MdOutlineNotificationImportant, MdToday } from "react-icons/md";
import { TbNotesOff } from "react-icons/tb";

type T_Route = {
  key: string;
  label: string;
  icon: JSX.Element;
};

export const getRoutes = () => {
  const { t } = useTranslation();
  const routes: T_Route[] = [
    {
      key: "/",
      label: t("All tasks"),
      icon: <BsUiRadiosGrid />,
    },
    {
      key: "/today",
      label: t("Today tasks"),
      icon: <MdToday />,
    },
    {
      key: "/important",
      label: t("Important tasks"),
      icon: <MdOutlineNotificationImportant />,
    },
    {
      key: "/completed",
      label: t("Completed tasks"),
      icon: <BsFillClipboardCheckFill />,
    },
    {
      key: "/uncompleted",
      label: t("Uncompleted tasks"),
      icon: <TbNotesOff />,
    },
  ];
  return routes
};
