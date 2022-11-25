import Graph from "react-graph-vis";
import { useEdges, useFilterUndifined, useGraphNodes } from "../hooks";
import { useDevicesStore } from "../store";

export const GraphPage = () => {
  const { rows } = useDevicesStore();
  const { Nodes } = useFilterUndifined(rows);
  const { graphNodes } = useGraphNodes(Nodes);

  console.log("graphNodes", graphNodes);
  const { edgesNodes } = useEdges(graphNodes);
  console.log("graphNodes", graphNodes);
  console.log("E", edgesNodes);
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
    select: function (event: any) {
      var { nodes, edges } = event;
    },
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
