import Graph from "react-graph-vis";
import { useEdges, useFilterUndifined, useGraphNodes } from "../hooks";
import { useDevicesStore } from "../store";

export const GraphPage = () => {
  const { rows } = useDevicesStore();
  const { Nodes } = useFilterUndifined(rows);
  const { graphNodes } = useGraphNodes(Nodes);
  const { edgesNodes } = useEdges(graphNodes);

  const graph = {
    nodes: graphNodes,
    edges: edgesNodes,
  };
  const options = {
    layout: {
      hierarchical: true,
    },
    edges: {
      color: "#000000",
    },
    height: "500px",
  };
  const events = {
    select: function (event: any) {},
  };
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={(network: any) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
};
