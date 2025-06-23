import type { State } from '@/lib/mergesort'
import { motion } from 'motion/react'

export function ArrDisplay({ state }: { state: State | undefined }) {

  function mapMainArray(arr: number[][]) {
    return (
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex gap-8">
        {
          arr.map((arr) => {
            if (arr.length !== 0) {
              return (
                <motion.div key={crypto.randomUUID()}>
                  {mapSubArray(arr)}
                </motion.div>
              )
            } else {
              return undefined
            }
          })
        }
      </motion.div>
    )
  }

  function mapSubArray(arr: number[]) {
    return (
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex border-2 rounded-2xl bg-amber-200 p-4 gap-4">
        {arr.map((num) => {
          return (
            <motion.div className="border-2 rounded-2xl p-2 bg-amber-400" key={crypto.randomUUID()}>
              {num}
            </motion.div>
          )
        })}
      </motion.div>
    )
  }

  function flavorText() {
    if (state) {
      if (state.act == 'split') {
        return "first, we split up the array"
      } else if (state.act === "merge") {
        return "then, we merge the subarrays in-order"
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
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-col text-center gap-8 p-6">
        {mapMainArray(state.arr)}
        {flavorText()}
      </motion.div>

    )

  }
}