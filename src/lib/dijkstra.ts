export type Edge = {
  from: string,
  to: string,
  weight: number
}

export type Graph = {
  nodes: string[],
  edges: Edge[]
}

const graph = {
  nodes: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
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

function dijkstra(graph: Graph, sourceId: string) {
  const dists = new Map<string, number>()
  const prevs = new Map<string, string | undefined>()

  let unvisited = new Set()
  for (let node of graph.nodes) {
    dists.set(node, Infinity)
    prevs.set(node, undefined)
    unvisited.add(node)
  }
  dists.set(graph.nodes[0]!, 0)

  while (unvisited.size !== 0) {
    // Look for the unvisited node with the lowest dist
    let current = undefined
    let minDist = Infinity
    for (let [node, dist] of dists) {
      if (dist < minDist) {
        current = node
        minDist = dist
      }
    }

    // remove the current node from the set of unvisited nodes

  }

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

