import { useCallback } from "react";
import {
  Paper,
  PaperProps,
  Text,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { loginSchema, loginValues } from "../schema";
import { SocialLinks } from "./social-links";
import { AuthFooter } from "./auth-footer";
import { inputStyle } from "../theme";

export const LoginComponent = (props: PaperProps) => {
  const { classes } = inputStyle();
  const form = useForm({
    initialValues: loginValues,
    validate: loginSchema,
  });
  const _handleSubmit = useCallback(
    (data: { email: string; password: string }) => {
      console.log("data", data);
    },
    []
  );
  return (
    <Paper w="50%" radius="md" p="xl" withBorder {...props}>
      <Text color="grey.7">{"Login".toUpperCase()}</Text>
      <form onSubmit={form.onSubmit(_handleSubmit)}>
        <TextInput
          withAsterisk
          label="Email"
          classNames={{ input: classes.input }}
          my="lg"
          required
          name="email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          description="Password must include at least one capital letter, It should start with special character @ or #,Length of password should be between range 8 to 14"
          withAsterisk
          classNames={{ input: classes.input }}
          name="password"
          pb="sm"
          required
          {...form.getInputProps("password")}
        />
        <Checkbox color={"pink.5"} label="Remember Me?" mt="xl" size="md" />
        <Button type="submit" size="md" fullWidth bg="pink.5" radius="md">
          LOGIN
        </Button>
      </form>
      <SocialLinks />
      <AuthFooter linkName="SIGN UP" to="/signup" message="Need an account?" />
    </Paper>
  );
};
