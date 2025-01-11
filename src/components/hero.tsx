import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import hero from "../../public/hero.png"

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute bg-hero bg-no-repeat bg-cover inset-0 from-primary/10 to-primary/5 -z-10" />
      <div className="container max-w-[90vw] mx-auto flex flex-col items-center text-center py-12 px-4 md:py-32 md:px-8">
        <div className="space-y-4 max-w-3xl">
          <Image alt="hero" src={hero} width={600} height={600}></Image>
          {/* <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary-foreground/80">
            SMAN 24 Bandung
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Tagline di sini yeah{" "}
            <span className="text-primary">CampusDay 2025</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-muted-foreground">
            Lorem ipsum dolor sit amet, conseculur ambatukam gyatt rizz.
          </p> */}
        </div>
        <div className="flex flex-col w-full sm:flex-row sm:w-auto gap-3 mt-8 px-4 sm:px-0">
          <Button className="w-full sm:w-auto bg-gradient-to-r from-merah_2 to-kuning_2 
          border-2 hover:from-kuning_2 hover:to-merah_2 transition" asChild size="lg">
            <Link href="/entre">Lihat Entre</Link>
          </Button>
          <Button className="w-full sm:w-auto bg-gradient-to-r from-merah_2 to-kuning_2 
          border-2 hover:from-kuning_2 hover:to-merah_2 transition" asChild size="lg">
            <Link href="/beasiswa">Cari Beasiswa</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

