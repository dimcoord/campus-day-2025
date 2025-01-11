/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  const [value, setValue] = useState('')

  return (
    <main className="bg-generic w-screen bg-no-repeat bg-cover">
      <div className="container mx-auto p-4">
      <Card className="max-w-screen mx-auto mt-20">
        <CardHeader>
          <CardTitle>Materi Rumpun</CardTitle>
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
                <p>
                  <b></b>
                  <b></b>
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="humaniora">
              <AccordionTrigger>Humaniora</AccordionTrigger>
              <AccordionContent>
                <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kedinasan">
              <AccordionTrigger>Kedinasan</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kesehatan">
              <AccordionTrigger>Kesehatan</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ekbis">
              <AccordionTrigger>Ekbis</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mipakom">
              <AccordionTrigger>Mipakom</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pendidikan">
              <AccordionTrigger>Pendidikan</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sospol">
              <AccordionTrigger>Sospol</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="teknik">
              <AccordionTrigger>Teknik</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vokasi">
              <AccordionTrigger>Vokasi</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </CardContent>
      </Card>
      </div>
    </main>
  )
}