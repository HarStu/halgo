function genVals(count: number) {
  let total = 0
  const vals = []

  while (vals.length < count) {
    total += Math.floor(Math.random() * 10)
    vals.push(total)
  }
  return vals
}

function binarySearch(arr: number[], target: number, lowIdx: number, highIdx: number) {
  const midIdx = Math.floor((lowIdx + highIdx) / 2)
  console.log(`middle index here is ${midIdx}`)

  if (arr.length === 0) {
    // target not in array
    console.log(`target not in array`)
    return -1
  } else if (arr[midIdx] === target) {
    console.log(`target found! ${target} === ${arr[midIdx]}`)
    return midIdx
  } else if (arr[midIdx]! < target) {
    console.log(`midIdx value ${arr[midIdx]} < target ${target}`)
    return binarySearch(vals, target, lowIdx, midIdx)
  } else if (target < arr[midIdx]!) {
    console.log(`target value ${target} < midIdx value ${arr[midIdx]}`)
    return binarySearch(vals, target, midIdx, highIdx)
  }
}

const vals = [
  4, 5, 5, 13, 17, 19, 19, 22, 22, 22, 30, 33,
  42, 46, 55, 56, 56, 58, 60, 65, 70, 71, 78, 83,
  87, 87, 89, 97, 101, 103, 112, 121, 130, 138, 139, 144,
  145, 151, 151, 153, 153, 161, 166, 167, 167, 171, 177, 182,
  186, 194, 195, 199, 208, 217, 221, 223, 232, 233, 234, 237,
  240, 248, 250, 259, 259, 261, 268, 270, 275, 284, 289, 293,
  296, 303, 305, 310, 317, 318, 322, 322, 329, 333, 339, 347,
  351, 359, 368, 373, 373, 382, 387, 389, 398, 398, 401, 402,
  410, 414, 418, 420
]

console.log(binarySearch(vals, 322, 0, vals.length))