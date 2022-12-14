import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks";

export const AuthLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <main style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      {outlet}
    </main>
  );
};
