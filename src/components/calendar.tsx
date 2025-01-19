'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export default function CalendarWithPopover() {
  const [date, setDate] = useState<Date>()

  return (
    
    <Popover>
      <PopoverTrigger asChild>
      <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <p>GYAAAAAATTTTTT</p>
      </PopoverContent>
    </Popover>
  )
}