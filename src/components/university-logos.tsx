import Image from "next/image"
import { pt } from "@/lib/pt"

const universities = pt

export function UniversityLogos() {
  return (
    <div className="w-full bg-muted/50 py-8 sm:py-12">
      <div className="text-center mb-6 sm:mb-8 px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Perguruan Tinggi</h2>
        <p className="text-sm sm:text-base text-muted-foreground">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {universities.map((university) => (
            <div
              key={university.name}
              className="flex-shrink-0 mx-4 sm:mx-8"
            >
              <Image
                src={university.logo}
                alt={university.name}
                width={200}
                height={80}
                className="object-contain h-16 sm:h-20"
              />
            </div>
          ))}
          {universities.map((university) => (
            <div
              key={`${university.name}-duplicate`}
              className="flex-shrink-0 mx-4 sm:mx-8"
            >
              <Image
                src={university.logo}
                alt={university.name}
                width={200}
                height={80}
                className="object-contain h-16 sm:h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

