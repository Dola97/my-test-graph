import { Paper, PaperProps, Text } from "@mantine/core";
import { SocialLinks } from "./social-links";
import { AuthFooter } from "./auth-footer";
import { RegisterForm } from "./register-form";

export const RegisterComponent = (props: PaperProps) => {
  return (
    <Paper w="50%" radius="md" p="xl" withBorder {...props}>
      <Text color="grey.7">{"Login".toUpperCase()}</Text>
      <RegisterForm />
      <SocialLinks />
      <AuthFooter linkName="login" to="/login" message="Already a user?" />
    </Paper>
  );
};
