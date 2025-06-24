export type Node = {
  id: string
}

export type Edge = {
  source: string,
  target: string
}

export type Graph = {
  nodes: Node[],
  edges: Edge[]
}

const data = {
  nodes: [
    { id: "a" },
    { id: "b" },
    { id: "c" },
    { id: "d" },
    { id: "e" },
    { id: "f" },
    { id: "g" },
    { id: "h" },
    { id: "i" },
    { id: "j" },
    { id: "k" }
  ],
  edges: [
    { source: "a", target: "b" },
    { source: "a", target: "d" },
    { source: "d", target: "c" },
    { source: "b", target: "e" },
    { source: "c", target: "f" },
    { source: "c", target: "i" },
    { source: "e", target: "f" },
    { source: "f", target: "g" },
    { source: "f", target: "h" },
    { source: "h", target: "j" },
    { source: "g", target: "k" },
    { source: "j", target: "k" },
  ]
}