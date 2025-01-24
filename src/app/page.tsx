import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hero } from "@/components/hero"
import { UniversityLogos } from "@/components/university-logos"
import Image from "next/image"
import { pt } from "@/lib/pt"

const universities = pt

export default function HomePage() {
  return (
    <div>
      <Hero />
      <UniversityLogos />
      <div className="container max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Perguruan Tinggi</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Lihat informasi tentang perguruan tinggi favoritmu di sini.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {universities.map((university) => (
            <Card key={university.name} className="overflow-hidden">
              <Image
                src={university.image}
                alt={university.name}
                width={400}
                height={200}
                className="w-full object-cover h-48 sm:h-56"
              />
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">{university.name}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{university.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold mb-2">Kategori:</h3>
                <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground">
                  {university.programs.map((program) => (
                    <li key={program}>{program}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

