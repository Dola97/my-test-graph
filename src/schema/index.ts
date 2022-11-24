export const loginSchema = {
  email: (value: string) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  password: (val: string) =>
    val.length <= 6 ? "Password should include at least 6 characters" : null,
};
export const loginValues = {
  email: "",
  password: "",
};

export const registerSchema = {
  email: (value: string) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  password: (val: string) =>
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(val)
      ? "Password should include at least 8 characters and conatain at least 1 number and 1 special character"
      : null,
  contact: (value: string) => (value ? null : "Contact Required"),
  location: (value: string) => (value ? null : "Location Required"),
  education: (value: string) => (value ? null : "Education Required"),
  job: (value: string) => (value ? null : "Job Required"),
  org: (value: string) => (value ? null : "organization Required"),
  exp: (value: string) => (value ? null : "Experience Required"),
};
export const registerValues = {
  email: "",
  password: "",
  contact: "",
  location: "",
  education: "",
  job: "",
  org: "",
  exp: "",
};
