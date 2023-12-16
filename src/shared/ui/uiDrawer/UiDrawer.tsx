import { Drawer } from "antd";
import { useAppDispatch } from "../../../hooks/useRedux";
import { useResponsive } from "../../../hooks/useResponsive";
import React from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface I_Props {
  children: React.ReactNode;
  drawer: boolean;
  place: "right" | "left";
  setDrawer:
    | ActionCreatorWithPayload<boolean, "sharedSlice/setDrawerLeft">
    | ActionCreatorWithPayload<boolean, "sharedSlice/setDrawerRight">;
}

function UiDrawer(props: I_Props) {
  const dispatch = useAppDispatch();
  const { isMobile } = useResponsive(1200);
  const { children, place, drawer, setDrawer } = props;
  return (
    <Drawer
      placement={place}
      open={drawer}
      closable={false}
      onClose={() => dispatch(setDrawer(false))}
      width={256}
      mask={isMobile}
      bodyStyle={{ backgroundColor: "var(--menu-bg-default)" }}
    >
      {children}
    </Drawer>
  );
}

export default UiDrawer;
