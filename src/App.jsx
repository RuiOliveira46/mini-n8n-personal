import React, { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

const nodeTypes = ['Webhook', 'HTTP Request', 'Email'];

let id = 0;
const getId = () => `node_${id++}`;

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const addNode = (type) => {
    const newNode = {
      id: getId(),
      type: 'default',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `${type} Node` },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/5 p-4 bg-gray-100 border-r">
        <h2 className="text-lg font-bold mb-4">Nodes</h2>
        {nodeTypes.map((type) => (
          <button
            key={type}
            onClick={() => addNode(type)}
            className="w-full p-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add {type}
          </button>
        ))}
        <pre className="mt-4 text-xs overflow-auto max-h-[300px] bg-white p-2 rounded border">
          {JSON.stringify({ nodes, edges }, null, 2)}
        </pre>
      </div>
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}
