export const loginSchema = {
  email: (value: string) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  password: (val: string) =>
    val.length <= 6 ? "Password should include at least 6 characters" : null,
};
export const loginValues = {
  email: "",
  password: "",
};
