'use client'

import { useState } from 'react'

import { Play, OctagonX, StepForward } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { toast } from 'sonner'

import { ArrDisplay } from 'src/components/arr-display'
import { wrapArray, stepMergeSort } from '@/lib/mergesort'
import type { State } from '@/lib/mergesort'

export function Sorter() {
  const [sortState, setSortState] = useState<State | undefined>(undefined)
  const [input, setInput] = useState<string>('7, 4, 3, 5, 2, 1, 6')

  function newSortState() {
    // validate the input string
    const ok = /^\s*\d+\s*(,\s*\d+\s*)*$/.test(input);
    if (!ok) {
      toast.warning("invalid input, please use numbers separated by commas!")
    } else {
      const newState: State = {
        arr: wrapArray((input.split(',')).map(num => Number(num.trim()))),
        act: 'split'
      }
      setSortState(newState)
    }
  }

  function iterateSortState() {
    if (!sortState) {
      toast.warning('input numbers and press start first!')
    } else {
      setSortState(stepMergeSort(sortState))
      console.log('sortState')
    }
  }

  function haltSort() {
    setSortState(undefined)
  }

  return (
    <div className="flex flex-col border-2 rounded-2xl bg-amber-200 w-2/3 gap-6 p-6">

      {/* control row */}
      <div className="flex gap-4 ">
        <Input
          className={sortState ? "flex-1 bg-gray-400" : "flex-1"}
          value={input}
          onChange={(e) => { setInput(e.target.value) }}
          disabled={Boolean(sortState)}
        />
        {/* start and stop button */}
        <Button
          className={sortState ? 'bg-red-400' : 'bg-green-400'}
          size='icon'
          onClick={sortState ? haltSort : newSortState}
        >
          {sortState ? <OctagonX /> : <Play />}
        </Button>
        {/* iterate sort button */}
        <Button
          className={sortState ? 'bg-amber-400' : 'bg-gray-400'}
          variant={sortState ? 'default' : 'inactive'}
          size='icon'
          onClick={iterateSortState}
        >
          <StepForward />
        </Button>
      </div>

      {/* display row */}
      <div className='flex text-center justify-center items-center bg-white border-2 rounded-2xl m-6 min-h-60'>
        <ArrDisplay state={sortState} />
      </div>
    </div>

  )
}