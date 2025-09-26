import { Routes, Route, BrowserRouter } from "react-router-dom";
import { _routes } from "./_routes";
import PrivateRoute from "./PrivateRoute";
import { settingStore } from "../store";
import Layout from "./Layout";

const Router = () => {
  const { theme } = settingStore();
  return (
    <BrowserRouter>
      <div className={theme}>
        <Routes>
          <Route element={<Layout />}>
            {_routes?.map(({ path, element: Component }, idx) => (
              <Route
                key={idx}
                path={path}
                element={<PrivateRoute child={<Component />} />}
              />
            ))}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
