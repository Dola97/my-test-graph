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
import { EDU, EXP, JOBTITLE, LOCATIONS, ORGS } from "../constants";
import { useAuth } from "../hooks";

export const RegisterForm = () => {
  const { _handleRegister, status } = useAuth();
  const { classes } = inputStyle();
  const form = useForm({
    initialValues: registerValues,
    validate: registerSchema,
  });
  const _handleSubmit = useCallback(
    (data: registerValuesType) => {
      _handleRegister(data, form);
    },
    [_handleRegister, form]
  );

  return (
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
        disabled={status}
        classNames={{ input: classes.input }}
        my="lg"
        required
        name="contact"
        {...form.getInputProps("contact")}
      />
      <Select
        label="Location"
        disabled={status}
        name="location"
        my="lg"
        {...selectorProps}
        {...form.getInputProps("location")}
        data={LOCATIONS}
      />
      <Select
        label="Education"
        name="education"
        disabled={status}
        {...selectorProps}
        {...form.getInputProps("education")}
        data={EDU}
      />
      <Select
        label="Job Title"
        disabled={status}
        name="job"
        my="lg"
        {...selectorProps}
        {...form.getInputProps("job")}
        data={JOBTITLE}
      />
      <Select
        label="Organization"
        disabled={status}
        name="org"
        {...selectorProps}
        {...form.getInputProps("org")}
        data={ORGS}
      />
      <Select
        label="Years of Experience"
        disabled={status}
        name="exp"
        my="lg"
        {...selectorProps}
        {...form.getInputProps("exp")}
        data={EXP}
      />

      <Button
        my="xl"
        disabled={status}
        type="submit"
        size="md"
        fullWidth
        bg="pink.5"
        radius="md"
      >
        {status ? <Loader /> : "Sign Up".toUpperCase()}
      </Button>
    </form>
  );
};
