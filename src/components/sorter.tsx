'use client'

import { useState, useEffect } from 'react'
import clsx from 'clsx'

import { Play, OctagonX, StepForward } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { toast } from 'sonner'

import { wrapArray, stepMergeSort } from '@/lib/mergesort'
import type { State } from '@/lib/mergesort'

export function Sorter() {
  const [sortState, setSortState] = useState<State | undefined>(undefined)
  const [input, setInput] = useState<string>('7, 4, 3, 5, 2, 1, 6')

  function newSortState() {
    // validate the input string
    const ok = /^\s*\d+\s*(,\s*\d+\s*)*$/.test(input);
    if (!ok) {
      toast.warning("invalid input, please use numbers separated by commas")
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
      toast.warning('no valid sort state, cannot iterate')
    } else {
      setSortState(stepMergeSort(sortState))
      console.log('sortState')
    }
  }

  function haltSort() {
    setSortState(undefined)
  }

  useEffect(() => {
    console.log('placeholder')
  }, [])

  return (
    <div className="flex border-2 rounded bg-amber-200 flex-col size-2/3 gap-12 m-6 p-6">

      {/* control row */}
      <div className="flex gap-4 ">
        <Input
          className="flex-1"
          value={input}
          onChange={(e) => { setInput(e.target.value) }}
        />
        <Button
          className={sortState ? 'bg-red-400' : 'bg-green-400'}
          size='icon'
          onClick={sortState ? haltSort : newSortState}
        >
          {sortState ? <OctagonX /> : <Play />}
        </Button>

        <Button
          size='icon'
          onClick={iterateSortState}
        >
          <StepForward />
        </Button>
      </div>

      {/* display row */}
      <div className="text-center">
        {
          sortState ?
            sortState.arr :
            'not currently sorting'
        }
      </div>

    </div>
  )
}