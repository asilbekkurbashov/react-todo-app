// components
import LeftMenu from "../../../components/leftMenu/LeftMenu";
import MainPage from "../../../components/mainPage/MainPage";
import RightMenu from "../../../components/rightMenu/RightMenu";
import ModalComponent from "../../../components/Modal/Modal";
import { useResponsive } from "../../../hooks/useResponsive";
import { Drawer } from "antd";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { SharedSliceActions } from "../../../state/shared/sharedSlice";

function RootLayout() {
  const { drawerLeft, drawerRight } = useAppSelector(
    (state) => state.SharedSliceReducer
  );
  const dispatch = useAppDispatch();
  const { setDrawerLeft, setDrawerRight } = SharedSliceActions;
  const { isMobile } = useResponsive(1200);
  return (
    <div>
      <Drawer
        placement="left"
        open={drawerLeft}
        closable={false}
        onClose={() => dispatch(setDrawerLeft(false))}
        width={300}
        mask={isMobile}
        bodyStyle={{ backgroundColor: "var(--menu-bg-default)" }}
      >
        <LeftMenu />
      </Drawer>

      {!isMobile && <LeftMenu />}
      <MainPage />

      <Drawer
        placement="right"
        open={drawerRight}
        closable={false}
        onClose={() => dispatch(setDrawerRight(false))}
        width={300}
        mask={isMobile}
        bodyStyle={{ backgroundColor: "var(--menu-bg-default)" }}
      >
        <RightMenu />
      </Drawer>

      {!isMobile && <RightMenu />}

      <ModalComponent />
    </div>
  );
}

export default RootLayout;
