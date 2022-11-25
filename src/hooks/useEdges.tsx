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
    //   for (let i = 1; i <= Nodes; i++) {

    //     edgesNodes.push({
    //       label: obj.name.label,
    //       id: obj.id + Math.random(),
    //     });
    //   }

    return edgesNodes;
  }, [Nodes]);
  return {
    edgesNodes,
  };
};
