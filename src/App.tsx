import { Routes, Route } from "react-router-dom";
import { RegisterPage, LoginPage } from "../src/pages";
import { AuthLayout, HomeLayout } from "../src/layouts";
const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<></>} />
      </Route>
    </Routes>
  );
};

export default App;
