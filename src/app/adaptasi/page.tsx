export default function TimelinePage() {
  return (
    <div className="container py-8 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">College Expo Timeline</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {[
            {
              date: "January 15, 2024",
              title: "Early Registration Opens",
              description: "Priority registration for high school juniors and seniors"
            },
            {
              date: "February 1, 2024",
              title: "University Presentations Begin",
              description: "Virtual information sessions with university representatives"
            },
            {
              date: "March 15, 2024",
              title: "Main Expo Event",
              description: "In-person expo featuring all participating universities"
            },
            {
              date: "April 1, 2024",
              title: "Application Workshop",
              description: "Get help with your college applications"
            },
            {
              date: "May 1, 2024",
              title: "Decision Day",
              description: "National College Decision Day celebration"
            }
          ].map((event, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 border-l-2 border-primary pb-6 sm:pb-8 last:pb-0">
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full -left-[7px] sm:-left-[9px] top-0" />
              <div className="text-xs sm:text-sm text-muted-foreground mb-1">{event.date}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

