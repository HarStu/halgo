
export function mergeSort(arr: number[]): number[] {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)

    console.log(`Looking at array ${arr}`)
    console.log(`The array has length ${arr.length}, and a midpoint of ${mid}`)
    console.log(`left:  ${left}`)
    console.log(`right: ${right}`)
    console.log(`\n`)

    const newLeft = mergeSort(left)
    const newRight = mergeSort(right)

    return merge(newLeft, newRight)

  } else {
    console.log(`arr only has one element: ${arr}. Return.`)
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

const arr = [2, 10, 3, 14, 7, 89, 30]
console.log(`FINAL RESULT: ${mergeSort(arr)}`)