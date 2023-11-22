import React from "react";
import { Modal } from "antd";
import { Portal } from "../../Portal";

interface IProps {
  children: React.ReactNode;
  
}

export function ModalComponent(props: IProps) {
  return (
    <Portal container={document.body}>
      <Modal>{props.children}</Modal>
    </Portal>
  );
}
