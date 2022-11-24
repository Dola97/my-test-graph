import api from "./api";
import { toast } from "react-toastify";

export const _handleRegister = (data: any, form: any, navigate: any) => {
  const { email, password, contact, location, education, job, org, exp } = data;
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
      navigate.replace("/login");
      toast.success("User Registerd Succssefully");
    })
    .catch((error) => {
      toast.error(error.response.data.error.message);
    });
};
