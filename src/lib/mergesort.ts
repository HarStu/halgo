// helper types for our stepMergeSort function
export type Action = "split" | "merge" | "done"
export type State = {
  arr: number[][],
  act: Action
}

// Merging helper function
export function merge(left: number[], right: number[]) {
  let merged: number[] = []
  const larr = structuredClone(left.reverse())
  const rarr = structuredClone(right.reverse())
  while (larr.length > 0 && rarr.length > 0) {
    if (rarr[rarr.length - 1]! < larr[larr.length - 1]!) {
      merged.push(rarr.pop()!)
    } else {
      merged.push(larr.pop()!)
    }
  }

  if (larr.length > 0) {
    merged = merged.concat(larr.reverse())
  } else {
    merged = merged.concat(rarr.reverse())
  }

  return merged
}

// initial recursive merge sort
export function mergeSort(arr: number[]): number[] {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2)

    const leftArr = mergeSort(arr.slice(0, mid))
    const rightArr = mergeSort(arr.slice(mid, arr.length))

    return merge(leftArr, rightArr)

  } else {
    return arr
  }
}

// Version that's easier to visualize
export function mergeSortTwo(arr: number[]) {
  let splitArr = [arr]
  while (splitArr.find(subArr => (subArr.length > 1))) {
    console.log(splitArr)
    splitArr = splitArr.map(subArr => {
      return [
        subArr.slice(0, Math.floor(subArr.length / 2)),
        subArr.slice(Math.floor(subArr.length / 2), subArr.length)
      ]
    }).flat()
  }
  console.log(splitArr)

  console.log('and now we merge')

  let baseArr = structuredClone(splitArr)
  while (baseArr.length > 1) {
    console.log(baseArr)
    let workArr = []
    for (let i = 0; i < baseArr.length; i += 2) {
      workArr.push(merge(baseArr[i]!, baseArr[i + 1]!))
    }
    // if baseArr is odd, there'll be one leftover to account for 
    baseArr = baseArr.length % 2 == 1 ? workArr.concat(baseArr.pop()!) : workArr
  }
  console.log(baseArr)
}

export function wrapArray(arr: number[]): number[][] {
  return [arr]
}

export function stepMergeSort({ arr, act }: State): State {
  if (act === 'split') {
    if (arr.find(subArr => (subArr.length > 1))) {
      arr = arr.map(subArr => {
        return [
          subArr.slice(0, Math.floor(subArr.length / 2)),
          subArr.slice(Math.floor(subArr.length / 2), subArr.length)
        ]
      }).flat()
    }

    if (arr.find((subArr) => subArr.length > 1)) {
      return { arr, act: 'split' }
    } else {
      return { arr, act: 'merge' }
    }
  } else if (act == 'merge') {
    if (arr.length > 1) {
      let workArr = []
      for (let i = 0; i < arr.length; i += 2) {
        workArr.push(merge(arr[i]!, arr[i + 1]!))
      }
      const retArr = arr.length % 2 == 1 ? workArr.concat(arr.pop()!) : workArr
      return { arr: retArr, act: 'merge' }
    }
  }
  return { arr, act: 'done' }
}

const start = wrapArray([4, 6, 9, 1, 7, 3, 5, 10, 1])
let state: State = {
  arr: start,
  act: 'split'
}

while (state.act !== 'done') {
  console.log(state.arr)
  state = stepMergeSort(state)
}


//mergeSort(arr)
