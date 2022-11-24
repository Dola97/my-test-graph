import { Box, Flex, NumberInput, Select } from "@mantine/core";
import { FC, useCallback } from "react";
import { DevicesTypes } from "../constants";
import { device, useDevicesStore } from "../store";
import { IconEraser } from "@tabler/icons";

export const ChooseDeviceComponent: FC<device> = ({ id, name, quantity }) => {
  const { deleteRow, updateQauntity, updateType } = useDevicesStore();
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
    (value: string) => {
      updateType(id, value);
    },
    [id, updateType]
  );

  return (
    <Flex
      my="lg"
      justify="space-between"
      align="center"
      sx={{ flexDirection: "row" }}
    >
      <Select
        label="Years of Experience"
        w="40%"
        value={name}
        onChange={onTypeChange}
        mr="lg"
        data={DevicesTypes}
      />
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
