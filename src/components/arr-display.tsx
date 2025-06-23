import type { State } from '@/lib/mergesort'

export function ArrDisplay({ state }: { state: State | undefined }) {

  function mapMainArray(arr: number[][]) {
    return (
      <div className="flex gap-8">
        {
          arr.map((arr, idx) => {
            if (arr.length !== 0) {
              return (
                <div id={idx.toString()}>
                  {mapSubArray(arr)}
                </div>
              )
            } else {
              return undefined
            }
          })
        }
      </div>
    )
  }

  function mapSubArray(arr: number[]) {
    return (
      <div className="flex border-2 rounded-2xl bg-amber-200 p-4 gap-4">
        {arr.map((num, idx) => {
          return (
            <div className="border-2 rounded-2xl p-2 bg-amber-400" id={idx.toString()}>
              {num}
            </div>
          )
        })}
      </ div>
    )
  }

  function flavorText() {
    if (state) {
      if (state.act == 'split') {
        return "splitting the array..."
      } else if (state.act === "merge") {
        return "merging the subarrays"
      } else if (state.act === "done") {
        return "sorted!"
      }
    } else {
      return undefined
    }
  }

  if (!state) {
    return (
      <div>
        press start to begin
      </div>
    )
  } else {
    return (
      <div className="flex flex-col text-center gap-8 p-6">
        {mapMainArray(state.arr)}
        {flavorText()}
      </div>

    )

  }
}