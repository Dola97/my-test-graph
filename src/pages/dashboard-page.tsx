import { Flex } from "@mantine/core";
import React from "react";
import { DoughnutChart, PieChart } from "../components";

export const DashboardPage = () => {
  return (
    <Flex justify="space-evenly">
      <PieChart />
      <DoughnutChart />
    </Flex>
  );
};
