export type Edge = {
  nodes: string[],
  weight: number
}

export type Graph = {
  nodes: string[],
  edges: Edge[]
}

const graph1 = {
  nodes: ['a', 'b', 'c', 'd'],
  edges: [
    { nodes: ['a', 'b'], weight: 2 },
    { nodes: ['a', 'c'], weight: 9 },
    { nodes: ['b', 'c'], weight: 3 },
    { nodes: ['b', 'd'], weight: 10 },
    { nodes: ['c', 'd'], weight: 6 }
  ]
}

const graph2 = {
  nodes: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
  edges: [
    { nodes: ['a', 'b'], weight: 3 },
    { nodes: ['a', 'd'], weight: 9 },
    { nodes: ['d', 'c'], weight: 4 },
    { nodes: ['b', 'e'], weight: 9 },
    { nodes: ['c', 'f'], weight: 6 },
    { nodes: ['c', 'i'], weight: 2 },
    { nodes: ['e', 'f'], weight: 5 },
    { nodes: ['f', 'g'], weight: 5 },
    { nodes: ['f', 'h'], weight: 2 },
    { nodes: ['h', 'j'], weight: 3 },
    { nodes: ['g', 'k'], weight: 5 },
    { nodes: ['j', 'k'], weight: 6 },
  ]
}

function dijkstra(graph: Graph) {
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
    unvisited.delete(current)

    // produce a list of all the edges involving 'current' and another node in 'unvisited'
    const curEdges = []
    for (let edge of graph.edges) {
      if (edge.nodes[0] === current && unvisited.has(edge.nodes[1])) {
        curEdges.push(edge)
      }
    }

    // iterate over the edges found
    for (let edge of curEdges) {
      // calculate the total distance to connected nodes via edges from current
      const newDist = dists.get(edge.nodes[0]!)! + edge.weight
      // if any of these distances are less than the current shortest distance to that node, update
      if (newDist < dists.get(edge.nodes[1]!)!) {
        dists.set(edge.nodes[0]!, newDist)
        prevs.set(edge.nodes[1]!, edge.nodes[0]!)
      }
    }
  }
  return {
    prevs,
    dists
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

