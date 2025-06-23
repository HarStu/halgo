'use client'

import { useState, useEffect } from 'react'

import { Play, StepForward } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'

import { wrapArray, stepMergeSort } from '@/lib/mergesort'
import type { State } from '@/lib/mergesort'

export function Sorter() {
  const [sortState, setSortState] = useState<State | undefined>(undefined)
  const [input, setInput] = useState<string>('7, 4, 3, 5, 2, 1, 6')
  const [sorting, setSorting] = useState(false)

  function newSortState() {
    // validate the input string
    const ok = /^\s*\d+\s*(,\s*\d+\s*)*$/.test(input);
    if (!ok) {
      // call the toast here
      console.log('invalid input')
    } else {
      const newState: State = {
        arr: wrapArray((input.split(',')).map(num => Number(num.trim()))),
        act: 'split'
      }
      setSorting(true)
      setSortState(newState)
    }
  }

  function iterateSortState() {
    if (!sortState || !sorting) {
      // call the toast here
      console.log('no valid sort state!')
    } else {
      setSortState(stepMergeSort(sortState))
      console.log('sortState')
    }
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
        <Button size='icon' onClick={newSortState}>
          <Play />
        </Button>
        <Button size='icon' onClick={iterateSortState}>
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