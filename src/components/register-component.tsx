import { Paper, PaperProps, Text } from "@mantine/core";
import { SocialLinks } from "./social-links";
import { AuthFooter } from "./auth-footer";
import { RegisterForm } from "./register-form";

export const RegisterComponent = (props: PaperProps) => {
  return (
    <Paper w="30%" radius="md" p="xl" withBorder {...props}>
      <Text color="grey.7">{"Register".toUpperCase()}</Text>
      <RegisterForm />
      <SocialLinks />
      <AuthFooter linkName="login" to="/" message="Already a user?" />
    </Paper>
  );
};
