
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

export function merge(left: number[], right: number[]) {
  let merged: number[] = []
  const larr = left.reverse()
  const rarr = right.reverse()
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