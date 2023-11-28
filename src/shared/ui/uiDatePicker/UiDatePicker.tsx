import { ConfigProvider, DatePicker, DatePickerProps } from "antd";
import React from "react";
import { useAppSelector } from "../../../hooks/useRedux";
import { useDatePickerMode } from "./UiDatePickerMode";

export const UiDatePicker: React.FC<DatePickerProps> = (props) => {
  const { theme } = useAppSelector((state) => state.ThemeReducer);
  const mode = useDatePickerMode(theme);
  return (
    <ConfigProvider
      theme={{
        token: mode,
      }}
    >
      <DatePicker {...props} />
    </ConfigProvider>
  );
};

