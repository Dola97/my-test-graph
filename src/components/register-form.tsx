import { useCallback } from "react";
import { Button, PasswordInput, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { registerSchema, registerValues } from "../schema";
import { inputStyle } from "../theme";
import { selectorProps } from "../component-props";

export const RegisterForm = () => {
  const { classes } = inputStyle();
  const form = useForm({
    initialValues: registerValues,
    validate: registerSchema,
  });
  const _handleSubmit = useCallback(
    (data: { email: string; password: string }) => {
      console.log("data", data);
    },
    []
  );

  return (
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
        description="Password should include at least 8 characters and conatain at least 1 number and 1 special character"
        withAsterisk
        classNames={{ input: classes.input }}
        name="password"
        required
        {...form.getInputProps("password")}
      />
      <TextInput
        withAsterisk
        label="Contact"
        classNames={{ input: classes.input }}
        my="lg"
        required
        name="contact"
        {...form.getInputProps("contact")}
      />
      <Select
        label="Location"
        name="location"
        my="lg"
        {...selectorProps}
        {...form.getInputProps("location")}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
      <Select
        label="Education"
        name="education"
        {...selectorProps}
        {...form.getInputProps("education")}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
      <Select
        label="Job Title"
        name="job"
        my="lg"
        {...selectorProps}
        {...form.getInputProps("job")}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
      <Select
        label="Organization"
        name="org"
        {...selectorProps}
        {...form.getInputProps("org")}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
      <Select
        label="Years of Experience"
        name="exp"
        my="lg"
        {...selectorProps}
        {...form.getInputProps("exp")}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />

      <Button my="lg" type="submit" size="md" fullWidth bg="pink.5" radius="md">
        SIGN UP
      </Button>
    </form>
  );
};
