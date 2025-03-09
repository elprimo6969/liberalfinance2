import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, CreditCard, Landmark, PiggyBank } from "lucide-react"

export default function AccountsPage() {
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
            <Link href="/accounts" className="text-sm font-medium text-red-600 hover:underline">
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
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Student Banking Accounts
              </h1>
              <p className="mt-4 text-white md:text-xl">
                Choose the perfect account for your financial needs with no monthly fees and exclusive student benefits.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="checking" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="checking">Checking</TabsTrigger>
                <TabsTrigger value="savings">Savings</TabsTrigger>
              </TabsList>
              <TabsContent value="checking" className="mt-6">
                <div className="mx-auto max-w-5xl">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                    <Card className="border-2 border-red-600">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-red-600" />
                          <CardTitle>Student Checking</CardTitle>
                        </div>
                        <CardDescription>Perfect for everyday banking needs</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="text-center">
                            <span className="text-4xl font-bold">$0</span>
                            <span className="text-sm text-muted-foreground"> / month</span>
                          </div>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span>No monthly maintenance fee</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span>No minimum balance requirement</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span>Free debit card with contactless payment</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span>Access to 40,000+ fee-free ATMs</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span>Mobile and online banking access</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span>Mobile check deposit</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-red-600 hover:bg-red-700">Open an Account</Button>
                      </CardFooter>
                    </Card>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold">Student Checking Benefits</h3>
                        <p className="mt-2 text-muted-foreground">
                          Our Student Checking account is designed specifically for students, offering flexibility and
                          convenience with no hidden fees.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <h4 className="font-medium">Fee-Free Banking</h4>
                          <p className="text-sm text-muted-foreground">
                            No monthly maintenance fees, no minimum balance requirements, and no ATM fees at any
                            LiberalFinance or partner ATMs.
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <h4 className="font-medium">Digital Banking</h4>
                          <p className="text-sm text-muted-foreground">
                            Access your account 24/7 with our mobile app and online banking platform. Transfer money,
                            deposit checks, and pay bills from anywhere.
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <h4 className="font-medium">Overdraft Protection</h4>
                          <p className="text-sm text-muted-foreground">
                            Link your Student Savings account for overdraft protection to avoid fees and declined
                            transactions.
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <h4 className="font-medium">Financial Education</h4>
                          <p className="text-sm text-muted-foreground">
                            Access to financial literacy resources and tools to help you manage your money effectively.
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <h4 className="font-medium">Eligibility</h4>
                        <p className="mt-1 text-sm">
                          Available to students enrolled in high school, college, or university with valid student ID.
                          Account holders must be at least 16 years old.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="savings" className="mt-6">
                <div className="mx-auto max-w-5xl">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                    <Card className="border-2 border-red-600">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <PiggyBank className="h-5 w-5 text-red-600" />
                          <CardTitle>Student Savings</CardTitle>
                        </div>
                        <CardDescription>Start building your financial future</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="text-center">
                            <span className="text-4xl font-bold">2.25%</span>
                            <span className="text-sm text-muted-foreground"> APY</span>
                          </div>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span>Competitive interest rate</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span>No monthly maintenance fee</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span>$5 minimum opening deposit</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span>Automatic savings options</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span>Goal tracking tools</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span>FDIC insured up to $250,000</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-red-600 hover:bg-red-700">Open an Account</Button>
                      </CardFooter>
                    </Card>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold">Student Savings Benefits</h3>
                        <p className="mt-2 text-muted-foreground">
                          Our Student Savings account helps you build your financial future with competitive interest
                          rates and helpful savings tools.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <h4 className="font-medium">Higher Interest Rate</h4>
                          <p className="text-sm text-muted-foreground">
                            Earn a competitive 2.25% APY on your balance, helping your money grow faster than
                            traditional savings accounts.
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <h4 className="font-medium">Automatic Savings</h4>
                          <p className="text-sm text-muted-foreground">
                            Set up recurring transfers from your checking account to build your savings consistently
                            without having to think about it.
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <h4 className="font-medium">Savings Goals</h4>
                          <p className="text-sm text-muted-foreground">
                            Create and track savings goals for things like spring break, a new laptop, or
                            post-graduation plans.
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <h4 className="font-medium">Easy Access</h4>
                          <p className="text-sm text-muted-foreground">
                            Access your savings account through our mobile app and online banking platform. Transfer
                            funds easily between accounts.
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <h4 className="font-medium">Eligibility</h4>
                        <p className="mt-1 text-sm">
                          Available to students enrolled in high school, college, or university with valid student ID.
                          Account holders must be at least 16 years old.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Opening an account is quick and easy. Apply online in just a few minutes.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button className="bg-red-600 hover:bg-red-700">Open an Account</Button>
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

