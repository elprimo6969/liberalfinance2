import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, CreditCard, PiggyBank, Landmark, Shield } from "lucide-react"

export default function Home() {
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
            <Link href="/services" className="text-sm font-medium hover:underline">
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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                  Banking Made Simple for Students
                </h1>
                <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience hassle-free banking with LiberalFinance. Open an account today and enjoy exclusive student
                  benefits.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/accounts">
                    <Button className="bg-white text-red-600 hover:bg-gray-100">Open an Account</Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Banking App Interface"
                  className="rounded-lg object-cover shadow-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Banking Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the perfect banking solutions tailored for students
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-full bg-red-100 p-2 w-10 h-10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Student Checking</CardTitle>
                  <CardDescription>No monthly fees and no minimum balance requirements</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Free debit card</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Mobile banking access</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Fee-free ATM network</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/accounts/checking">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-full bg-red-100 p-2 w-10 h-10 flex items-center justify-center">
                    <PiggyBank className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Student Savings</CardTitle>
                  <CardDescription>Competitive interest rates to help your money grow</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Higher interest rate</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Automatic savings plans</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Goal tracking tools</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/accounts/savings">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-full bg-red-100 p-2 w-10 h-10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Student Loans</CardTitle>
                  <CardDescription>Flexible education financing options</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Competitive rates</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Flexible repayment options</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>No origination fees</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/services/loans">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mobile Banking at Your Fingertips</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access your accounts, transfer funds, pay bills, and deposit checks from anywhere with our mobile app.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-red-600 hover:bg-red-700">Download App</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mobile Banking App"
                  className="rounded-lg object-cover shadow-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose LiberalFinance?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're committed to helping students build a strong financial foundation
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-red-100 p-3">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Secure Banking</h3>
                <p className="text-sm text-gray-500">
                  Advanced security measures to protect your financial information
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-red-100 p-3">
                  <CreditCard className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">No Hidden Fees</h3>
                <p className="text-sm text-gray-500">Transparent pricing with no surprise charges</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-red-100 p-3">
                  <PiggyBank className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Financial Education</h3>
                <p className="text-sm text-gray-500">Resources to help you make informed financial decisions</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-red-100 p-3">
                  <Landmark className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Campus Presence</h3>
                <p className="text-sm text-gray-500">Convenient ATMs and branches near your campus</p>
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

