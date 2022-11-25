import { Button, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCallback } from "react";
import { ItemsSchema, itemsValues } from "../schema";
import { useListStore, useModal } from "../store";
import { inputStyle } from "../theme";
import { ModalComponent } from "./modal";

export const AddModalContent = () => {
  const { classes } = inputStyle();
  const { addItem } = useListStore();
  const { stateModals, setModal } = useModal();
  const open = stateModals.find((modal) => modal.name === "addItem");
  const form = useForm({
    initialValues: itemsValues,
    validate: ItemsSchema,
  });
  const _handleSubmit = useCallback(
    (data: { name: string; desciption: string }) => {
      const { name, desciption } = data;
      addItem(name, desciption);
      setModal(false, "addItem");
      form.reset();
    },
    [addItem, form, setModal]
  );
  return (
    <>
      <ModalComponent state={open?.state} modalName={"addItem"}>
        <Text color="grey.7">{"Add Item".toUpperCase()}</Text>
        <form onSubmit={form.onSubmit(_handleSubmit)}>
          <TextInput
            withAsterisk
            label="Name"
            classNames={{ input: classes.input }}
            my="lg"
            required
            name="name"
            {...form.getInputProps("name")}
          />
          <TextInput
            withAsterisk
            label="Description"
            classNames={{ input: classes.input }}
            my="lg"
            required
            name="desciption"
            {...form.getInputProps("desciption")}
          />

          <Button
            my="lg"
            type="submit"
            size="md"
            fullWidth
            bg="pink.5"
            radius="md"
          >
            Save
          </Button>
        </form>
      </ModalComponent>
    </>
  );
};
