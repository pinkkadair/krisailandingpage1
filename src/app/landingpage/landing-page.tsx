import { Metadata } from 'next'
import LandingPage from './landing-page'

export const metadata: Metadata = {
  title: 'Kris.AI Health Guardian',
  description: 'Your personal AI health monitoring assistant',
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      <div className="container relative">
        <LandingPage />
      </div>
    </main>
  )
} 