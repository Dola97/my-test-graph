import { useMemo } from "react";
type NodesType = {
  label: string;
  id: number;
};
export const useEdges = (Nodes: NodesType[]) => {
  const edgesNodes = useMemo(() => {
    const edgesNodes: any = [];
    Nodes.unshift({ label: "Internet", id: 1 });
    Nodes.map((node) => {
      edgesNodes.push({
        from: 1,
        to: node.id,
      });
    });

    return edgesNodes;
  }, [Nodes]);
  return {
    edgesNodes,
  };
};
