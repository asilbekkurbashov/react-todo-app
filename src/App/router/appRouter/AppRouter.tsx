import { Route, Routes } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { routes } from "./routes";
import { useTheme } from "../../../hooks/useTheme";

function AppRouter() {
  useTheme();
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default AppRouter;
