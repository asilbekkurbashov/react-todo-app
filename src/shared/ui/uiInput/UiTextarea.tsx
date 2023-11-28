import {ConfigProvider, Input } from 'antd'
import { TextAreaProps } from 'antd/es/input'
import React from 'react'
import { useAppSelector } from '../../../hooks/useRedux';
import { useInputMode } from './UiInputMode';

export const UiTextarea:React.FC<TextAreaProps> = (props) => {
    const { theme } = useAppSelector((state) => state.ThemeReducer);
    const mode = useInputMode(theme);
  
    return (
      <ConfigProvider
        theme={{
          token: mode,
        }}
      >
        <Input.TextArea {...props} />
      </ConfigProvider>
    );
}
