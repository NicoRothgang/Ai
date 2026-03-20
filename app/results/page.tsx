import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/sections/Footer'
import { ResultsClient } from '@/components/dashboard/ResultsClient'

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ResultsClient />
      </main>
      <Footer />
    </>
  )
}
