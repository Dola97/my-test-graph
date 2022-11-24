import { useCallback, useState } from "react";
import {
  Button,
  Loader,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { registerSchema, registerValues } from "../schema";
import { inputStyle } from "../theme";
import { selectorProps } from "../component-props";
import { registerValuesType } from "../types";
import { _handleRegister } from "../api/register";
import { useNavigate } from "react-router-dom";
import { EDU, EXP, JOBTITLE, LOCATIONS, ORGS } from "../constants";

export const RegisterForm = () => {
  const { classes } = inputStyle();
  const navigate = useNavigate();
  const [loading, updateState] = useState(false);
  const form = useForm({
    initialValues: registerValues,
    validate: registerSchema,
  });
  const _handleSubmit = useCallback(
    (data: registerValuesType) => {
      updateState(true);
      _handleRegister(data, form, navigate);
      updateState(false);
    },
    [form, navigate]
  );

  return (
    <form onSubmit={form.onSubmit(_handleSubmit)}>
      <TextInput
        withAsterisk
        disabled={loading}
        label="Email"
        classNames={{ input: classes.input }}
        my="lg"
        required
        name="email"
        {...form.getInputProps("email")}
      />
      <PasswordInput
        label="Password"
        disabled={loading}
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
        disabled={loading}
        classNames={{ input: classes.input }}
        my="lg"
        required
        name="contact"
        {...form.getInputProps("contact")}
      />
      <Select
        label="Location"
        disabled={loading}
        name="location"
        my="lg"
        {...selectorProps}
        {...form.getInputProps("location")}
        data={LOCATIONS}
      />
      <Select
        label="Education"
        name="education"
        disabled={loading}
        {...selectorProps}
        {...form.getInputProps("education")}
        data={EDU}
      />
      <Select
        label="Job Title"
        disabled={loading}
        name="job"
        my="lg"
        {...selectorProps}
        {...form.getInputProps("job")}
        data={JOBTITLE}
      />
      <Select
        label="Organization"
        disabled={loading}
        name="org"
        {...selectorProps}
        {...form.getInputProps("org")}
        data={ORGS}
      />
      <Select
        label="Years of Experience"
        disabled={loading}
        name="exp"
        my="lg"
        {...selectorProps}
        {...form.getInputProps("exp")}
        data={EXP}
      />

      <Button
        my="xl"
        disabled={loading}
        type="submit"
        size="md"
        fullWidth
        bg="pink.5"
        radius="md"
      >
        {loading ? <Loader /> : "Sign Up".toUpperCase()}
      </Button>
    </form>
  );
};
