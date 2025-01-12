/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import placeholder from '../../../public/placeholder-materi.jpg'

export default function Home() {
  const [value, setValue] = useState('')

  return (
    <main className="bg-generic w-screen bg-no-repeat bg-cover">
      <div className="container mx-auto p-4">
      <Card className="max-w-screen mx-auto mt-20">
        <CardHeader>
          <CardTitle className='text-2xl'>Materi Rumpun</CardTitle>
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
              <AccordionTrigger className='text-xl'>Agraria</AccordionTrigger>
              <AccordionContent>
                <p>
                  <b></b>
                  <b></b>
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="humaniora">
            <AccordionTrigger className='text-xl'>Humaniora</AccordionTrigger>
              <AccordionContent>
                <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kedinasan">
            <AccordionTrigger className='text-xl'>Kedinasan</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kesehatan">
            <AccordionTrigger className='text-xl'>Kesehatan</AccordionTrigger>
              <AccordionContent>
              <span>
                <p className='text-lg bold'>1. Kedokteran</p>
                <p className='text-justify'>
                  Ilmu kedokteran adalah ilmu yang mempelajari cara kerja tubuh manusia dalam pemeliharaan kesehatan, kesetimbangannya, pencegahan, pengobatan atau penatalaksanaan penyakit.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                  Selain membuka praktik, Dokter juga bisa bekerja struktural. Misalnya di Kementerian Kesehatan, Badan Pengawas Obat dan Makanan, Badan Narkotika Nasional, Badan Penyelenggara Jaminan Sosial, Badan SAR Nasional, dan sebagainya. Prospek lainnya, yaitu Teknisi Medis Gawat Darurat (Paramedis), Ahli Diet (Dietitian), Teknisi Radiologi Medis, Teknisi Alat Kesehatan, dll.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                  Rata-rata kampus Kedokteran menggunakan sistem blok, belajar gimana cara menangani suatu kasus (problem based learning). Kira-kira ada sekitar 21 blok yang akan dipelajari, setiap blok biasanya ditempuh 6-7 minggu, termasuk dengan praktikum dan ujiannya. Selain itu, kita juga belajar cara melayani pasien, melakukan pemeriksaan, memberikan pengobatan, juga menjelaskan suatu keadaan kepada pasien dan keluarganya dalam skill lab. Jadi, semua teori di fase praklinik bisa diselesaikan paling cepat 3,5 tahun.
                <br/>Setelah meraih gelar Sarjana Kedokteran, akan memasuki fase klinik dan disebut sebagai Dokter Muda atau dikenal dengan koas. Kamu akan belajar dari satu stase ke stase lainnya di rumah sakit. Fase klinik ini akan kamu tempuh selama 1,5 sampai 2 tahun. Selanjutnya, untuk menyandang  gelar Dokter, kamu harus menempuh Ujian Kompetensi Dokter Indonesia (UKDI). Kalau udah sah jadi Dokter, kamu harus mengikuti program internship selama 1 tahun agar bisa memperoleh Surat Ijin Praktik (SIP) dan Surat Tanda Register (STR). Setelah resmi mendapatkan surat-surat penting tersebut kamu dapat memutuskan apakah mau ambil spesialisasi atau langsung berkarir sebagai Dokter Umum.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                  Universitas Airlangga, Universitas Brawijaya, Universitas Lambung Mangkurat, Universitas Pembangunan Nasional Veteran Jakarta, Universitas Padjadjaran, Universitas Katolik Parahyangan, Universitas Islam Bandung, Universitas Pertahanan, Universitas Surabaya, Universitas Islam Malang, dll.
                </p>
              </span>
              <br/><br/>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ekbis">
            <AccordionTrigger className='text-xl'>Ekbis</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mipakom">
            <AccordionTrigger className='text-xl'>Mipakom</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pendidikan">
            <AccordionTrigger className='text-xl'>Pendidikan</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sospol">
            <AccordionTrigger className='text-xl'>Sospol</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="teknik">
            <AccordionTrigger className='text-xl'>Teknik</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vokasi">
            <AccordionTrigger className='text-xl'>Vokasi</AccordionTrigger>
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