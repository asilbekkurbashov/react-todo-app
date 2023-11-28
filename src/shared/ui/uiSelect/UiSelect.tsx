import React from "react";
import { Select, ConfigProvider, SelectProps } from "antd";
import { useAppSelector } from "../../../hooks/useRedux";
import { useSelectMode } from "./UiSelectMode";

export const UiSelect: React.FC<SelectProps> = (props) => {
  const { theme } = useAppSelector((state) => state.ThemeReducer);
  const mode = useSelectMode(theme);
  return (
    <ConfigProvider
      theme={{
        token: mode,
      }}
    >
      <Select {...props} />
    </ConfigProvider>
  );
};

