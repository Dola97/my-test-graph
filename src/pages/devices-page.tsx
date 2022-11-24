import { Button, Flex } from "@mantine/core";
import React, { Fragment, useId, useMemo } from "react";
import { ChooseDeviceComponent } from "../components";
import { useDevicesStore } from "../store";

export const DevicesPage = () => {
  const id = useId();
  const { rows, addDevice } = useDevicesStore();
  const renderRows = useMemo(() => {
    return rows.map((row) => {
      return (
        <Fragment key={`adder-row-${row.id}-${id}`}>
          <ChooseDeviceComponent {...row} />
        </Fragment>
      );
    });
  }, [rows, id]);

  return (
    <>
      {renderRows}
      <Flex direction="row" justify="center" align="center">
        <Button
          mr="md"
          w="20%"
          size="md"
          variant="outline"
          mt="xl"
          onClick={addDevice}
        >
          Add Device
        </Button>
      </Flex>
    </>
  );
};
