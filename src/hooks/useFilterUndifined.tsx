import { useMemo } from "react";
import { device } from "../store";
export const useFilterUndifined = (devices: device[]) => {
  const Nodes = useMemo(
    () =>
      devices?.filter((item: any) => {
        if (item.name.label) {
          return item;
        }
      }),
    [devices]
  );

  return {
    Nodes,
  };
};
