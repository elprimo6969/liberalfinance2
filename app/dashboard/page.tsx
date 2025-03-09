"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpDown,
  CreditCard,
  Download,
  Home,
  Landmark,
  LayoutDashboard,
  LogOut,
  PiggyBank,
  Settings,
  User,
  Users,
} from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Simulated account data
  const accounts = [
    {
      id: "checking-1",
      name: "Student Checking",
      number: "•••• 4832",
      balance: 2749.0,
      type: "checking",
    },
    {
      id: "savings-1",
      name: "Student Savings",
      number: "•••• 7291",
      balance: 8234.5,
      type: "savings",
    },
  ]

  // Simulated transaction data
  const transactions = [
    {
      id: "t1",
      description: "Campus Bookstore",
      amount: -125.3,
      date: "Mar 8, 2025",
      category: "Education",
    },
    {
      id: "t2",
      description: "University Dining",
      amount: -42.75,
      date: "Mar 7, 2025",
      category: "Food",
    },
    {
      id: "t3",
      description: "Scholarship Deposit",
      amount: 1500.0,
      date: "Mar 5, 2025",
      category: "Income",
    },
    {
      id: "t4",
      description: "Campus Coffee",
      amount: -4.5,
      date: "Mar 4, 2025",
      category: "Food",
    },
    {
      id: "t5",
      description: "Monthly Transfer",
      amount: 300.0,
      date: "Mar 1, 2025",
      category: "Transfer",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Landmark className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold">LiberalFinance</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Welcome, Alex Student</span>
            <Button variant="outline" size="icon">
              <User className="h-4 w-4" />
              <span className="sr-only">Profile</span>
            </Button>
            <Button variant="outline" size="icon">
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Log out</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-gray-50 md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="py-2">
              <h2 className="text-lg font-semibold">Banking Dashboard</h2>
              <p className="text-sm text-gray-500">Manage your accounts</p>
            </div>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("overview")}>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Overview
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("accounts")}>
                <CreditCard className="mr-2 h-4 w-4" />
                Accounts
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("transactions")}>
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Transactions
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("transfers")}>
                <Users className="mr-2 h-4 w-4" />
                Transfers
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("bills")}>
                <Home className="mr-2 h-4 w-4" />
                Bill Pay
              </Button>
            </div>
            <div className="mt-auto space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </Button>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="transfers">Transfers</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${accounts.reduce((sum, account) => sum + account.balance, 0).toFixed(2)}
                    </div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Checking</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${accounts.find((a) => a.type === "checking")?.balance.toFixed(2)}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {accounts.find((a) => a.type === "checking")?.number}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Savings</CardTitle>
                    <PiggyBank className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${accounts.find((a) => a.type === "savings")?.balance.toFixed(2)}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {accounts.find((a) => a.type === "savings")?.number}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Rewards Points</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-muted-foreground">+180 points this month</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactions.slice(0, 4).map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">{transaction.description}</p>
                            <p className="text-sm text-muted-foreground">{transaction.date}</p>
                          </div>
                          <div className={`text-sm font-medium ${transaction.amount > 0 ? "text-green-500" : ""}`}>
                            {transaction.amount > 0 ? "+" : ""}
                            {transaction.amount.toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-center">
                      <Button variant="outline" size="sm" onClick={() => setActiveTab("transactions")}>
                        View All Transactions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Manage your banking needs</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <Button className="w-full justify-start" onClick={() => setActiveTab("transfers")}>
                      <ArrowUpDown className="mr-2 h-4 w-4" />
                      Transfer Money
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Download Statement
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Manage Cards
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Account Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="accounts" className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold">Your Accounts</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {accounts.map((account) => (
                  <Card key={account.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{account.name}</CardTitle>
                        {account.type === "checking" ? (
                          <CreditCard className="h-5 w-5 text-red-600" />
                        ) : (
                          <PiggyBank className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                      <CardDescription>{account.number}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">${account.balance.toFixed(2)}</div>
                      <div className="mt-4 flex gap-2">
                        <Button size="sm">View Details</Button>
                        <Button variant="outline" size="sm">
                          Statements
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="transactions" className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Recent Transactions</h2>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
              <Card>
                <CardContent className="p-0">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 border-b p-4 font-medium">
                      <div>Description</div>
                      <div>Date</div>
                      <div>Category</div>
                      <div className="text-right">Amount</div>
                    </div>
                    {transactions.map((transaction) => (
                      <div key={transaction.id} className="grid grid-cols-4 p-4 hover:bg-muted/50">
                        <div>{transaction.description}</div>
                        <div>{transaction.date}</div>
                        <div>{transaction.category}</div>
                        <div className={`text-right ${transaction.amount > 0 ? "text-green-500" : ""}`}>
                          {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="transfers" className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold">Transfer Money</h2>
              <Card>
                <CardContent className="pt-6">
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="from-account" className="text-sm font-medium">
                        From Account
                      </label>
                      <select id="from-account" className="rounded-md border p-2">
                        <option value="checking-1">Student Checking - $2,749.00</option>
                        <option value="savings-1">Student Savings - $8,234.50</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="to-account" className="text-sm font-medium">
                        To Account
                      </label>
                      <select id="to-account" className="rounded-md border p-2">
                        <option value="savings-1">Student Savings - $8,234.50</option>
                        <option value="checking-1">Student Checking - $2,749.00</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="amount" className="text-sm font-medium">
                        Amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                        <input
                          id="amount"
                          type="number"
                          placeholder="0.00"
                          className="w-full rounded-md border p-2 pl-7"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="memo" className="text-sm font-medium">
                        Memo (Optional)
                      </label>
                      <input id="memo" type="text" placeholder="Add a note" className="w-full rounded-md border p-2" />
                    </div>
                    <Button className="mt-2 bg-red-600 hover:bg-red-700">Transfer Funds</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <footer className="w-full border-t bg-white py-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
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

