import { Routes, Route } from "react-router-dom";
import {
  RegisterPage,
  LoginPage,
  DevicesPage,
  GraphPage,
  DashboardPage,
  ToDoPage,
  PageNotFound,
} from "../src/pages";
import { AuthLayout, HomeLayout } from "../src/layouts";
const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/devices" element={<DevicesPage />} />
        <Route path="/graph" element={<GraphPage />} />
        <Route path="/todolist" element={<ToDoPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
