// components
import LeftMenu from "../components/leftMenu/LeftMenu";
import MainPage from "../components/mainPage/MainPage";
import RightMenu from "../components/rightMenu/RightMenu";

import ModalComponent from "../components/Modal/Modal";
import { useAppContext } from "../hooks/useAppContext";
import { useResponsive } from "../hooks/useResponsive";
import { Drawer } from "antd";

function RootLayout() {
  const { visibleLeft, setVisibleLeft,visibleRight,setVisibleRight } = useAppContext();
  const { isMobile } = useResponsive(1200);
  return (
    <div>
      <Drawer
        placement="left"
        open={visibleLeft}
        closable={false}
        onClose={() => setVisibleLeft(false)}
        width={300}
        mask={isMobile}
        bodyStyle={{backgroundColor:'var(--menu-bg-default)'}}
      >
        <LeftMenu />
      </Drawer>

      {!isMobile && <LeftMenu />}
      <MainPage />

      <Drawer
        placement="right"
        open={visibleRight}
        closable={false}
        onClose={() => setVisibleRight(false)}
        width={300}
        mask={isMobile}
        bodyStyle={{backgroundColor:'var(--menu-bg-default)'}}
      >
        <RightMenu />
      </Drawer>

      {!isMobile && <RightMenu />}

      <ModalComponent />
    </div>
  );
}

export default RootLayout;
