import { useMemo } from "react";
import { device } from "../store";
export const useGraphNodes = (devices: device[]) => {
  const graphNodes = useMemo(() => {
    const graphNodes: any = [];
    devices.forEach((obj) => {
      for (let i = 1; i <= obj.quantity; i++) {
        graphNodes.push({
          label: obj.name.label,
          id: obj.id + Math.random(),
        });
      }
    });
    return graphNodes;
  }, [devices]);
  return {
    graphNodes,
  };
};
