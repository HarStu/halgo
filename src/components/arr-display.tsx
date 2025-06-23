import type { State } from '@/lib/mergesort'

export function ArrDisplay({ state }: { state: State | undefined }) {
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
          state.arr.map((a, idx) => {
            return (
              <div id={idx.toString()}>
                {a}
              </div>
            )
          })
        }
      </div>
    )

  }
}