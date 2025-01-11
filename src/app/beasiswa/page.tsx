import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const scholarships = [
  {
    name: "Academic Excellence Scholarship",
    amount: "Rp10.000.000",
    deadline: "1 Maret 2024",
    requirements: "Nilai rata-rata 90"
  },
  {
    name: "Academic Excellence Scholarship",
    amount: "Rp10.000.000",
    deadline: "1 Maret 2024",
    requirements: "Nilai rata-rata 90"
  },
  {
    name: "Academic Excellence Scholarship",
    amount: "Rp10.000.000",
    deadline: "1 Maret 2024",
    requirements: "Nilai rata-rata 90"
  },
]

export default function ScholarshipsPage() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 w-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Beasiswa & Kalender</h1>
      
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Beasiswa</h2>
          <div className="space-y-4 sm:space-y-6">
            {scholarships.map((scholarship) => (
              <Card key={scholarship.name}>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl">{scholarship.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">Tanggungan: {scholarship.amount}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-2 text-sm sm:text-base">
                    <div>
                      <span className="font-semibold">Deadline:</span> {scholarship.deadline}
                    </div>
                    <div>
                      <span className="font-semibold">Syarat:</span> {scholarship.requirements}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Kalender Beasiswa</h2>
          <Card>
            <CardContent className="p-2 sm:p-4">
              <Calendar
                mode="single"
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Catat tanggal-tanggal ini:</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>• March 1: Academic Excellence Scholarship Deadline</li>
              <li>• April 15: STEM Innovation Award Deadline</li>
              <li>• May 1: Community Leadership Grant Deadline</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

