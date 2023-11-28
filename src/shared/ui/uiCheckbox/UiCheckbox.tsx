import React from "react";
import { ConfigProvider, Checkbox, CheckboxProps } from "antd";

export const UiCheckbox: React.FC<CheckboxProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#5B21B6",
        },
      }}
    >
      <Checkbox className="checkbox" {...props} />
    </ConfigProvider>
  );
};
