function genVals(count: number) {
  let total = 0
  const vals = []

  while (vals.length < count) {
    total += Math.floor(Math.random() * 10)
    vals.push(total)
  }
  return vals
}

console.log(genVals(100))

function binarySearch(arr: number[], target: number) {
  const midIdx = Math.floor(arr.length / 2)
}