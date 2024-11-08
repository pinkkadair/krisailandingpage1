'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Activity, MessageSquare, Zap, Moon, Heart, TrendingUp, Droplet, Utensils, Thermometer, Brain } from 'lucide-react'

const generateChartData = (count = 24) => {
  return Array.from({ length: count }, (_, i) => ({
    time: new Date(Date.now() - (count - 1 - i) * 1000 * 60 * 60).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    estradiol: Math.sin(i / 4) * 20 + 50,
    testosterone: Math.cos(i / 3) * 15 + 65,
    insulin: Math.sin(i / 5) * 5 + 15,
  }))
}

const IPhoneMockup: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] sm:border-[14px] rounded-[1.5rem] sm:rounded-[2.5rem] h-[400px] sm:h-[600px] w-full max-w-[220px] sm:max-w-[300px] shadow-xl ${className}`}>
    <div className="w-[100px] sm:w-[148px] h-[12px] sm:h-[18px] bg-gray-800 top-0 rounded-b-[0.8rem] sm:rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div className="h-[40px] sm:h-[46px] w-[3px] bg-gray-800 absolute -left-[11px] sm:-left-[17px] top-[100px] sm:top-[124px] rounded-l-lg"></div>
    <div className="h-[40px] sm:h-[46px] w-[3px] bg-gray-800 absolute -left-[11px] sm:-left-[17px] top-[150px] sm:top-[178px] rounded-l-lg"></div>
    <div className="h-[50px] sm:h-[64px] w-[3px] bg-gray-800 absolute -right-[11px] sm:-right-[17px] top-[120px] sm:top-[142px] rounded-r-lg"></div>
    <div className="rounded-[1.3rem] sm:rounded-[2rem] overflow-hidden w-[204px] sm:w-[272px] h-[384px] sm:h-[572px] bg-[#0A1929] dark:bg-[#0A1929]">
      <div className="w-full h-full overflow-hidden bg-[#0A1929] dark:bg-[#0A1929]">{children}</div>
    </div>
  </div>
)

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const chartData = generateChartData()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    alert(`Thank you for joining the waitlist with email: ${email}`)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-[#0A1929] text-white py-6 px-4 sm:py-12 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-4 sm:mb-8 px-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-[#74B9FF] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            Kris.AI Health Guardian™
          </h1>
        </header>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 mb-4 sm:mb-8">
          <IPhoneMockup className="transform rotate-0 sm:-rotate-12 mb-4 sm:mb-0">
            <div className="p-4 h-full flex flex-col">
              <h2 className="text-lg font-semibold mb-4 text-[#74B9FF]">Quantum Biometric Monitor</h2>
              <div className="flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="time" stroke="#74B9FF" />
                    <YAxis stroke="#74B9FF" />
                    <Tooltip contentStyle={{ backgroundColor: '#0A1929', border: '1px solid #74B9FF' }} />
                    <Line type="monotone" dataKey="estradiol" name="Estradiol" stroke="#FF9FF3" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="testosterone" name="Testosterone" stroke="#74B9FF" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="insulin" name="Insulin" stroke="#A3A4F8" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </IPhoneMockup>

          <IPhoneMockup className="transform rotate-0 sm:rotate-12">
            <div className="p-4 h-full flex flex-col">
              <h2 className="text-lg font-semibold mb-4 text-[#74B9FF]">Kris.AI Health Assistant</h2>
              <div className="flex-grow overflow-y-auto space-y-4 mb-4">
                <div className="bg-[#1E293B] text-white p-2 sm:p-3 rounded-lg max-w-[85%] sm:max-w-[80%] text-sm sm:text-base">
                  Hi! I&apos;m Kris.AI, your personal health guardian. How are you feeling today?
                </div>
                <div className="bg-[#2C3E50] text-white p-2 sm:p-3 rounded-lg max-w-[85%] sm:max-w-[80%] text-sm sm:text-base ml-auto">
                  I&apos;ve been feeling more tired than usual lately, and I&apos;m having trouble sleeping.
                </div>
                <div className="bg-[#1E293B] text-white p-2 sm:p-3 rounded-lg max-w-[85%] sm:max-w-[80%] text-sm sm:text-base">
                  I&apos;m sorry to hear that you&apos;re experiencing fatigue and sleep issues. Let&apos;s take a look at your recent hormone levels and sleep patterns. Have you noticed any changes in your diet or stress levels recently?
                </div>
                <div className="bg-[#2C3E50] text-white p-2 sm:p-3 rounded-lg max-w-[85%] sm:max-w-[80%] text-sm sm:text-base ml-auto">
                  Now that you mention it, I&apos;ve been under more stress at work lately, and I&apos;ve been skipping meals more often.
                </div>
                <div className="bg-[#1E293B] text-white p-2 sm:p-3 rounded-lg max-w-[85%] sm:max-w-[80%] text-sm sm:text-base">
                  Thank you for sharing that information. Increased stress and irregular eating habits can definitely impact your energy levels and sleep quality. I&apos;ve analyzed your data, and it seems your cortisol levels are slightly elevated, which can be related to stress. Let&apos;s work on a plan to manage your stress and improve your sleep hygiene. Would you like some personalized recommendations?
                </div>
              </div>
              <div className="border-t border-[#74B9FF] pt-4">
                <Input
                  type="text"
                  placeholder="Ask about your health..."
                  className="w-full p-2 rounded-md border border-[#74B9FF] bg-[#1E293B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#74B9FF]"
                />
              </div>
            </div>
          </IPhoneMockup>
        </div>

        <div className="flex justify-center w-full mb-4 sm:mb-12">
          <div className="w-full max-w-[220px] sm:max-w-[300px] mt-4 sm:mt-[-50px] mx-auto">
            <IPhoneMockup>
              <div className="p-4 h-full flex flex-col">
                <h2 className="text-lg font-semibold mb-4 text-[#74B9FF]">Symptom Tracker</h2>
                <div className="space-y-4">
                  <Card className="bg-[#1E293B] border-[#74B9FF]">
                    <CardHeader>
                      <CardTitle className="text-[#74B9FF] flex items-center gap-2">
                        <Brain className="h-5 w-5" />
                        Current Symptoms
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Thermometer className="h-4 w-4 text-[#FF9FF3]" />
                            <span className="text-white">Body Temperature</span>
                          </div>
                          <span className="text-[#FF9FF3]">Elevated</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Droplet className="h-4 w-4 text-[#A3A4F8]" />
                            <span className="text-white">Water Retention</span>
                          </div>
                          <span className="text-[#A3A4F8]">Moderate</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Moon className="h-4 w-4 text-[#74B9FF]" />
                            <span className="text-white">Sleep Quality</span>
                          </div>
                          <span className="text-[#74B9FF]">Poor</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#1E293B] border-[#74B9FF]">
                    <CardHeader>
                      <CardTitle className="text-[#74B9FF]">Hormone Levels</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white">Estradiol</span>
                          <span className="text-[#FF9FF3]">45 pg/mL</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white">Testosterone</span>
                          <span className="text-red-500">75 ng/dL</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white">Insulin</span>
                          <span className="text-[#74B9FF]">18 µIU/mL</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </IPhoneMockup>
          </div>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#74B9FF] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Join the Waitlist</h2>
          <p className="text-lg sm:text-xl text-white mb-6">
            Be one of the first 1000 members to get complimentary hormone monitoring accuracy checks by our expert team!
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto px-2 sm:px-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#1E293B] border-[#74B9FF] text-white placeholder-gray-400 mb-2 sm:mb-0 h-12 sm:h-10"
              />
              <Button 
                type="submit" 
                className="bg-[#FF9FF3] hover:bg-[#A3A4F8] text-[#0A1929] font-semibold h-12 sm:h-10 text-base sm:text-sm"
              >
                Reserve Now - $49
              </Button>
            </div>
          </form>
        </div>

        <div className="grid gap-4 sm:gap-8 mb-4 sm:mb-8 sm:grid-cols-2">
          <Card className="bg-[#1E293B] border-[#74B9FF]">
            <CardHeader>
              <CardTitle className="text-[#74B9FF]">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-white">
                <li className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-[#FF9FF3]" />
                  <span>Real-time hormone monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-[#A3A4F8]" />
                  <span>AI-powered health insights</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-[#74B9FF]" />
                  <span>Personalized wellness recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Moon className="h-5 w-5 text-[#FF9FF3]" />
                  <span>Sleep and stress management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Utensils className="h-5 w-5 text-[#A3A4F8]" />
                  <span>Nutrition and supplement tracking</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1E293B] border-[#74B9FF]">
            <CardHeader>
              <CardTitle className="text-[#74B9FF]">Early Access Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white mb-2">$49<span className="text-2xl">/month</span></div>
              <p className="text-[#74B9FF] mb-4">Regular price will be $149/month</p>
              <ul className="space-y-2 text-white">
                <li className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-[#74B9FF]" />
                  <span>Unlimited hormone monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-[#74B9FF]" />
                  <span>Personalized health reports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Droplet className="h-5 w-5 text-[#74B9FF]" />
                  <span>Integration with wearable devices</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#FF9FF3] hover:bg-[#A3A4F8] text-[#0A1929] font-semibold" asChild>
                <a href="https://buy.stripe.com/bIYg1Pdj32RWgzC288" target="_blank" rel="noopener noreferrer">
                  Reserve Your Spot
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <footer className="text-center text-[#A3A4F8]">
          <p>© 2024 Kris.AI Health Guardian™. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}