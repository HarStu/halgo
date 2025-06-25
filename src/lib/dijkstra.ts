export type Node = {
  id: string
}

export type Edge = {
  from: string,
  to: string,
  weight: number
}

export type Graph = {
  nodes: Node[],
  edges: Edge[]
}

const graph = {
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
    { from: "a", to: "b", weight: 3 },
    { from: "a", to: "d", weight: 9 },
    { from: "d", to: "c", weight: 4 },
    { from: "b", to: "e", weight: 9 },
    { from: "c", to: "f", weight: 6 },
    { from: "c", to: "i", weight: 2 },
    { from: "e", to: "f", weight: 5 },
    { from: "f", to: "g", weight: 5 },
    { from: "f", to: "h", weight: 2 },
    { from: "h", to: "j", weight: 3 },
    { from: "g", to: "k", weight: 5 },
    { from: "j", to: "k", weight: 6 },
  ]
}

function heapInsert(heap: number[], val: number) {
  // add new element
  heap.push(val)

  // index of new element 
  let idx = heap.length - 1

  // index of new element's parent
  let parentIdx = ((idx - ((idx % 2) ? 1 : 2))) / 2

  // swap our way up the heap
  while (idx > 0 && heap[parentIdx]! > heap[idx]!) {
    const val = heap[idx]
    heap[idx] = heap[parentIdx]!
    heap[parentIdx] = val!
    idx = parentIdx
    parentIdx = ((idx - ((idx % 2) ? 1 : 2))) / 2
  }

  // adjust the heap
  return heap
}

function dijkstra(graph: Graph) {
  const visited = graph.nodes.map(node => ({ id: node.id, distanceTo: Infinity }))
  // start at the first node

  let currentNode = graph.nodes[0]
}
