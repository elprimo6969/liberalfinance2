import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Landmark, PiggyBank, Shield, Wallet } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Landmark className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold">LiberalFinance</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/accounts" className="text-sm font-medium hover:underline">
              Accounts
            </Link>
            <Link href="/services" className="text-sm font-medium text-red-600 hover:underline">
              Services
            </Link>
            <Link href="/locations" className="text-sm font-medium hover:underline">
              Locations
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                Online Banking
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-600 to-red-700">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Banking Services for Students
              </h1>
              <p className="mt-4 text-white md:text-xl">
                Comprehensive financial solutions designed specifically for students' unique needs.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                From everyday banking to planning for the future, we've got you covered.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="mb-2 rounded-full bg-red-100 p-2 w-10 h-10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Student Loans</CardTitle>
                  <CardDescription>Flexible financing for your education</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our student loans offer competitive rates, flexible repayment options, and no origination fees to
                    help you focus on your studies without financial stress.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Competitive interest rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>No application or origination fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Flexible repayment options</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="mb-2 rounded-full bg-red-100 p-2 w-10 h-10 flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Credit Cards</CardTitle>
                  <CardDescription>Build credit while earning rewards</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our student credit cards help you establish credit history while earning rewards on everyday
                    purchases, with no annual fee and educational resources.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>No annual fee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Cash back on purchases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Credit education resources</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="mb-2 rounded-full bg-red-100 p-2 w-10 h-10 flex items-center justify-center">
                    <PiggyBank className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Financial Education</CardTitle>
                  <CardDescription>Tools to build financial literacy</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access free financial education resources, workshops, and personalized guidance to help you develop
                    strong money management skills.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Online learning modules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Campus workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>One-on-one financial counseling</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="mb-2 rounded-full bg-red-100 p-2 w-10 h-10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Insurance</CardTitle>
                  <CardDescription>Protection for what matters</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get affordable insurance coverage for your belongings, health, and more with special student
                    discounts and flexible payment options.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Renters insurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Auto insurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Health insurance options</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="mb-2 rounded-full bg-red-100 p-2 w-10 h-10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Mobile Banking</CardTitle>
                  <CardDescription>Banking on the go</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Manage your finances anytime, anywhere with our feature-rich mobile app designed specifically for
                    students' busy lifestyles.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Mobile check deposit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Peer-to-peer payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Spending insights and budgeting tools</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="mb-2 rounded-full bg-red-100 p-2 w-10 h-10 flex items-center justify-center">
                    <Landmark className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>International Services</CardTitle>
                  <CardDescription>Banking across borders</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Special services for international students including currency exchange, wire transfers, and
                    dedicated support for your unique banking needs.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Foreign currency exchange</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>International wire transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Multi-language support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need Help?</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Our dedicated student support team is here to assist you with any questions or concerns.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button className="bg-red-600 hover:bg-red-700">Contact Us</Button>
                <Button variant="outline">Schedule an Appointment</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Landmark className="h-5 w-5 text-red-600" />
            <span className="text-lg font-semibold">LiberalFinance</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            © 2025 LiberalFinance. All rights reserved. This is a simulated bank for educational purposes.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

