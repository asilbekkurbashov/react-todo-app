// components
import LeftMenu from "../components/leftMenu/LeftMenu";
import MainPage from "../components/mainPage/MainPage";
import RightMenu from "../components/rightMenu/RightMenu";

import ModalComponent from "../components/Modal/Modal";

function RootLayout() {
  return (
    <div>
      <LeftMenu />
      <MainPage />
      <RightMenu />
      <ModalComponent/>
    </div>
  );
}

export default RootLayout;
