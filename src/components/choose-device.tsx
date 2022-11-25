import { Box, Flex, NumberInput } from "@mantine/core";
import { FC, useCallback, useState } from "react";
import { useDevicesStore } from "../store";
import { IconEraser } from "@tabler/icons";
import { DevicesTypes } from "../constants";
import CreatableSelect from "react-select/creatable";

export type deviceType = {
  id: number;
  name: any;
  quantity: number;
  index: number;
};
export const ChooseDeviceComponent: FC<deviceType> = ({
  id,
  name,
  quantity,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(DevicesTypes);
  const { deleteRow, updateQauntity, updateType, rows } = useDevicesStore();

  const onDelete = useCallback(() => {
    deleteRow(id);
  }, [id, deleteRow]);
  const onQauntityChange = useCallback(
    (value: number) => {
      updateQauntity(id, value);
    },
    [id, updateQauntity]
  );

  const onTypeChange = useCallback(
    (value: { label: string; value: string }) => {
      updateType(id, value);
    },
    [id, updateType]
  );
  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = {
        label: inputValue,
        value: inputValue.toLowerCase().replace(/\W/g, ""),
      };
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
    }, 1000);
  };

  const values = rows.map((row) => row.name.value);

  return (
    <Flex
      my="lg"
      justify="space-between"
      align="center"
      sx={{ flexDirection: "row" }}
    >
      <Box w="40%" pos="relative" top="10px">
        <CreatableSelect
          onCreateOption={handleCreate}
          isDisabled={isLoading}
          isLoading={isLoading}
          onChange={(value) => {
            onTypeChange(value as any);
          }}
          value={name}
          options={options.filter((n) => !values.includes(n.value))}
        />
      </Box>

      <NumberInput
        label="Qauntity input"
        value={quantity}
        onChange={onQauntityChange}
        type="number"
        min={1}
        max={5}
        name="qantity"
        sx={{ width: "40%" }}
      />
      <Box
        sx={{
          cursor: "pointer",
          position: "relative",
          top: 10,
          color: "grey",
          ":hover": {
            color: "red",
          },
        }}
        onClick={onDelete}
      >
        <IconEraser />
      </Box>
    </Flex>
  );
};
