import { ConfigProvider, Input, InputProps } from "antd";
import React from "react";
import { useAppSelector } from "../../../hooks/useRedux";
import { useInputMode } from "./UiInputMode";

export const UiInput: React.FC<InputProps> = (props) => {
  const { theme } = useAppSelector((state) => state.ThemeReducer);
  const mode = useInputMode(theme);

  return (
    <ConfigProvider
      theme={{
        token: mode,
      }}
    >
      <Input {...props} />
    </ConfigProvider>
  );
};

