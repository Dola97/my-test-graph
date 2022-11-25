import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks";
import { AppContainer } from "./app-container";
export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppContainer>
      <main>{outlet}</main>
    </AppContainer>
  );
};
