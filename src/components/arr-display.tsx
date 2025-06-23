import type { State } from '@/lib/mergesort'

export function ArrDisplay({ state }: { state: State | undefined }) {

  function mapSubArray(arr: number[]) {
    return (
      <div className="flex border-2 rounded-2xl bg-amber-200 p-4 gap-6">
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

  if (!state) {
    return (
      <div>
        press start to begin
      </div>
    )
  } else {
    return (
      <div className="flex gap-8">
        {
          state.arr.map((arr, idx) => {
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
}