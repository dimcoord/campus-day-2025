import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { scholarships } from "@/lib/scholarship"

export default function ScholarshipsPage() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Beasiswa & Kalender</h1>
      <p className="text-justify mb-12">Beasiswa adalah pemberian bantuan berupa keuangan yang diberikan kepada perorangan dan bertujuan untuk keberlangsungan pendidikan yang ditempuh. Beasiswa dapat diberikan oleh lembaga pemerintah, perusahaan, ataupun yayasan.
        Adapun beasiswa yang akan dibuka pada tahun ajaran 2025-2026:
      </p>
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">Kalender Beasiswa</h2>
          <p className="mb-4 sm:mb-6">Beasiswa di tahun 2025</p>
          <Card>
            <CardContent className="p-2 sm:p-4">
              <div className="w-full">
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FJakarta&showPrint=0&showTz=0&showTitle=0&showTabs=0&showCalendars=0&src=YzY0NjgxYTIzYmZjMzg3MzI4ZWVjYWYwY2I4MjM4ODFkNzEzMGQ2MmM1Y2E4YjhkYzg3ODBmNzc2MjRmYzU5MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB&color=%2333B679" 
                  width="450" height="600" className="w-full h-64 md:h-96 lg:h-128"></iframe>
              </div>
            </CardContent>
          </Card>
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Catat tanggal-tanggal ini:</h3>
              {scholarships.map((scholarship) => ( <li className="text-sm" key={scholarship.nama}>{scholarship.nama}: {scholarship.deadline}</li> ))}
          </div>
        </div>

        <div>
          <h2 className="max-w-screen text-xl sm:text-2xl font-semibold">Beasiswa</h2>
          <p className="mb-4 sm:mb-6">Geser untuk melihat beasiswa lain!</p>
          <div className="space-y-4 sm:space-y-6">
            <Carousel className="w-[90vw] md:w-full mx-auto">
            <CarouselContent>
              {scholarships.map((scholarship) => (
              <CarouselItem key={scholarship.nama}>
                <Card key={scholarship.nama} className="">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">{scholarship.nama}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{scholarship.deskripsi}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-2 text-sm sm:text-base">
                      <div>
                        <p className="font-bold">Syarat:</p>
                        <ol>
                          {Object.entries(scholarship.syarat).map(([key, value]) => ( 
                            <li className="ml-4" key={key}>{value}</li> ))} 
                        </ol>
                      </div>
                      <div>
                        <span className="font-semibold">Pendaftaran/Deadline:</span> {scholarship.deadline}
                      </div>
                      <div>
                        <span className="font-semibold">Tunjangan:</span> {scholarship.tunjangan}
                      </div>
                      <div>
                        <span className="font-semibold">Infor lebih lanjut kunjungi: :</span> <Link className="underline hover:no-underline" href={scholarship.web} target="_blank">{scholarship.web}</Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
            </CarouselContent>
          </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

