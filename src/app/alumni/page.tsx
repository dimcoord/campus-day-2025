/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import useSWR from 'swr'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

// Fetch function for SWR
const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.')
  }
  return res.json()
}

const ResultDisplay = ({ data }: { data: any }) => {
  if (!data) return null

  if (Array.isArray(data)) {
    return (
      <table className="bg-muted p-4 rounded-lg space-y-2 text-sm">
        <thead className='container'>
            <tr className='flex justify-between'>
                <th>Nama</th>
                <th>Angkatan</th>
                <th>Prodi</th>
                <th>PT</th>
                <th>Kontak</th>
                <th>IG</th>
            </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-b last:border-0 pb-2 last:pb-0">
            <td>{item.nama}</td>
            <td>{item.angkatan}</td>
            <td>{item.prodi}</td>
            <td>{item.pt}</td>
            <td>{item.kontak}</td>
            <td>{item.ig}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
  }

  return (
    <div className="bg-muted p-4 rounded-lg space-y-1 text-sm">
      {Object.entries(data).map(([key, value]) => (
        <p key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:{' '}
          {(value as any).toString()}
        </p>
      ))}
    </div>
  )
}

const QuerySection = ({ operation, value }: { operation: string; value: string }) => {
  const { data, error, isLoading } = useSWR(
    value === operation ? `/api/alumni?operation=${operation}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  )

  if (error) {
    return (
      <div className="text-red-500 text-sm">
        Error loading data. Please try again later.
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    )
  }

  if (operation === 'stats' && data) {
    return <ResultDisplay data={data[0]} />
  }

  if (operation === 'count' && data) {
    return <ResultDisplay data={{ count: data }} />
  }

  return <ResultDisplay data={data} />
}

export default function Home() {
  const [value, setValue] = useState('')

  return (
    <main className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto mt-20">
        <CardHeader>
          <CardTitle>Persebaran Alumni</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion 
            type="single" 
            collapsible 
            className="w-full"
            value={value}
            onValueChange={setValue}
          >
            <AccordionItem value="agraria">
              <AccordionTrigger>Agraria</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="agraria" value={value} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="count">
              <AccordionTrigger>User Count</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="count" value={value} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="stats">
              <AccordionTrigger>User Statistics</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="stats" value={value} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="teknik">
              <AccordionTrigger>Teknik</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="teknik" value={value} />
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </CardContent>
      </Card>
    </main>
  )
}