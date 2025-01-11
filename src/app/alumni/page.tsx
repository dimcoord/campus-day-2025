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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
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
      <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Nama</TableHead>
                <TableHead>Angkatan</TableHead>
                <TableHead>Prodi</TableHead>
                <TableHead>PT</TableHead>
                <TableHead>Kontak</TableHead>
                <TableHead>IG</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.nama}</TableCell>
            <TableCell>{item.angkatan}</TableCell>
            <TableCell>{item.prodi}</TableCell>
            <TableCell>{item.pt}</TableCell>
            <TableCell>{item.kontak}</TableCell>
            <TableCell>{item.ig}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
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
      <Card className="max-w-screen mx-auto mt-20">
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

            <AccordionItem value="humaniora">
              <AccordionTrigger>Humaniora</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="humaniora" value={value} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kedinasan">
              <AccordionTrigger>Kedinasan</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="kedinasan" value={value} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kesehatan">
              <AccordionTrigger>Kesehatan</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="kesehatan" value={value} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ekbis">
              <AccordionTrigger>Ekbis</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="ekbis" value={value} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mipakom">
              <AccordionTrigger>Mipakom</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="mipakom" value={value} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pendidikan">
              <AccordionTrigger>Pendidikan</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="pendidikan" value={value} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sospol">
              <AccordionTrigger>Sospol</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="sospol" value={value} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="teknik">
              <AccordionTrigger>Teknik</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="teknik" value={value} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vokasi">
              <AccordionTrigger>Vokasi</AccordionTrigger>
              <AccordionContent>
                <QuerySection operation="vokasi" value={value} />
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </CardContent>
      </Card>
    </main>
  )
}