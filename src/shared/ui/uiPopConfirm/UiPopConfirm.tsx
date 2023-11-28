import React from "react";
import { Popconfirm, PopconfirmProps, ConfigProvider } from "antd";
import { useAppSelector } from "../../../hooks/useRedux";
import { usePopconfirmMode } from "./UiPropConfirmMode";

export const UiPopConfirm: React.FC<PopconfirmProps> = (props) => {
  const { theme } = useAppSelector((state) => state.ThemeReducer);
  const mode = usePopconfirmMode(theme);
  return (
    <ConfigProvider theme={{token:mode}}>
      <Popconfirm {...props} />
    </ConfigProvider>
  );
};
