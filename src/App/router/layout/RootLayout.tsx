// components
import LeftMenu from "../../../components/leftMenu/LeftMenu";
import MainPage from "../../../components/mainPage/MainPage";
import RightMenu from "../../../components/rightMenu/RightMenu";
import ModalComponent from "../../../components/Modal/Modal";
import { useResponsive } from "../../../hooks/useResponsive";
import { useAppSelector } from "../../../hooks/useRedux";
import { SharedSliceActions } from "../../../state/shared/sharedSlice";
import UiDrawer from "../../../shared/ui/uiDrawer/UiDrawer";

function RootLayout() {
  const { drawerLeft, drawerRight } = useAppSelector(
    (state) => state.SharedSliceReducer
  );
  const { setDrawerLeft, setDrawerRight } = SharedSliceActions;
  const { isMobile } = useResponsive(1200);
  return (
    <div>
      <UiDrawer place="left" drawer={drawerLeft} setDrawer={setDrawerLeft}>
        <LeftMenu />
      </UiDrawer>
      {!isMobile && <LeftMenu />}
      
      <MainPage />

      <UiDrawer place="right" drawer={drawerRight} setDrawer={setDrawerRight}>
        <RightMenu />
      </UiDrawer>
      {!isMobile && <RightMenu />}

      <ModalComponent />
    </div>
  );
}

export default RootLayout;
