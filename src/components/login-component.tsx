import { useCallback } from "react";
import {
  Paper,
  PaperProps,
  Text,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Loader,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { loginSchema, loginValues } from "../schema";
import { SocialLinks } from "./social-links";
import { AuthFooter } from "./auth-footer";
import { inputStyle } from "../theme";
import { useAuth } from "../hooks";

export const LoginComponent = (props: PaperProps) => {
  const { login, status } = useAuth();
  const { classes } = inputStyle();
  const form = useForm({
    initialValues: loginValues,
    validate: loginSchema,
  });
  const _handleSubmit = useCallback(
    (data: { email: string; password: string }) => {
      login(data);
    },
    [login]
  );
  return (
    <Paper w="30%" radius="md" p="xl" withBorder {...props}>
      <Text color="grey.7">{"Login".toUpperCase()}</Text>
      <form onSubmit={form.onSubmit(_handleSubmit)}>
        <TextInput
          withAsterisk
          disabled={status}
          label="Email"
          classNames={{ input: classes.input }}
          my="lg"
          required
          name="email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          disabled={status}
          description="Password must include at least one capital letter, It should start with special character @ or #,Length of password should be between range 8 to 14"
          withAsterisk
          classNames={{ input: classes.input }}
          name="password"
          pb="sm"
          required
          {...form.getInputProps("password")}
        />
        <Checkbox
          disabled={status}
          color={"pink.5"}
          label="Remember Me?"
          mt="xl"
          size="md"
        />
        <Button
          my="lg"
          type="submit"
          size="md"
          disabled={status}
          fullWidth
          bg="pink.5"
          radius="md"
        >
          {status ? <Loader /> : "LOGIN"}
        </Button>
      </form>
      <SocialLinks />
      <AuthFooter linkName="SIGN UP" to="/signup" message="Need an account?" />
    </Paper>
  );
};
