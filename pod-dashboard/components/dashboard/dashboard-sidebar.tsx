"use client"

import type React from "react"

import Link from "next/link"
import { BarChart3, Wallet, MessageSquare, History, Settings, HelpCircle, LogOut, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface DashboardSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DashboardSidebar({ open, onOpenChange }: DashboardSidebarProps) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r bg-background transition-transform duration-300 md:static ${
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-16"
      }`}
    >
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          {open ? (
            <div className="flex items-center gap-2">
              <Wallet className="h-6 w-6" />
              <span>POD</span>
            </div>
          ) : (
            <Wallet className="h-6 w-6 mx-auto" />
          )}
        </Link>
        <Button variant="ghost" size="icon" className="ml-auto hidden md:flex" onClick={() => onOpenChange(!open)}>
          {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <ScrollArea className="flex-1 py-2">
        <nav className="grid gap-1 px-2">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
          >
            <Home className="h-4 w-4" />
            {open && <span>Dashboard</span>}
          </Link>
          <Link
            href="/wallet"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
          >
            <Wallet className="h-4 w-4" />
            {open && <span>Wallet</span>}
          </Link>
          <Link
            href="/telegram"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
          >
            <MessageSquare className="h-4 w-4" />
            {open && <span>Telegram</span>}
          </Link>
          <Link
            href="/analytics"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
          >
            <BarChart3 className="h-4 w-4" />
            {open && <span>Analytics</span>}
          </Link>
          <Link
            href="/history"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
          >
            <History className="h-4 w-4" />
            {open && <span>History</span>}
          </Link>
        </nav>
        <nav className="mt-4 grid gap-1 px-2">
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
          >
            <Settings className="h-4 w-4" />
            {open && <span>Settings</span>}
          </Link>
          <Link
            href="/help"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
          >
            <HelpCircle className="h-4 w-4" />
            {open && <span>Help</span>}
          </Link>
          <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent">
            <LogOut className="h-4 w-4" />
            {open && <span>Logout</span>}
          </button>
        </nav>
      </ScrollArea>
    </div>
  )
}

function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
