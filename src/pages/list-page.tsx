import { Button, Flex, Text } from "@mantine/core";
import React, { Fragment, useCallback, useId, useMemo } from "react";
import { AddModalContent, EmptyList, ToDoItem } from "../components";
import { useListStore, useModal } from "../store";

export const ToDoPage = () => {
  const id = useId();
  const { items } = useListStore();
  const { setModal } = useModal();
  const renderItems = useMemo(() => {
    return items.map((item, key) => {
      return (
        <Fragment key={`To_Do_List-row-${item.id}-${id}`}>
          <ToDoItem {...item} />
        </Fragment>
      );
    });
  }, [items, id]);
  const OpenModal = useCallback(() => {
    setModal(true, "addItem");
  }, [setModal]);
  if (items.length === 0) {
    return (
      <Flex justify="center" align="center" direction="column">
        <AddModalContent />
        <EmptyList />
        <Button
          mr="md"
          w="20%"
          size="md"
          color="pink"
          variant="outline"
          my="xl"
          onClick={OpenModal}
        >
          <Text
            size="xl"
            align="center"
            my="xl"
            sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}
          >
            Add Items
          </Text>
        </Button>
      </Flex>
    );
  }
  return (
    <>
      {renderItems}
      <AddModalContent />
      <Flex direction="row" justify="center" align="center">
        <Button
          mr="md"
          w="20%"
          size="md"
          color="pink"
          variant="outline"
          mt="xl"
          onClick={OpenModal}
        >
          Add Item
        </Button>
      </Flex>
    </>
  );
};
