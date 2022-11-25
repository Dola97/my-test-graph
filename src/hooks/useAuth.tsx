import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import api from "../api/api";
import { toast } from "react-toastify";
const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [status, updateStauts] = useState(false);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = (data: any) => {
    updateStauts(true);
    const { email, password } = data;
    api
      .post("auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.jwt);
        setUser(response.data);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
    updateStauts(false);
  };
  const _handleRegister = (data: any, form: any) => {
    updateStauts(true);
    const { email, password, contact, location, education, job, org, exp } =
      data;
    let values = {
      email,
      password,
      contact,
      location,
      education,
      jobTitle: job,
      organization: org,
      experience: exp,
    };

    api
      .post("auth/local/register", { ...values, username: `test${email}` })
      .then((response) => {
        form.reset();
        navigate("/login");
        toast.success("User Registerd Succssefully");
      })
      .catch((error) => {
        toast.error(error.response.data.error.message);
      });
    updateStauts(false);
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      status,
      _handleRegister,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
