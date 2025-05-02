"use client"

import { Copy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function WalletDisplay() {
  // Static data only - no wallet connection attempts
  const walletAddress = "8xrt67Rhy3XAJnRY7JumVCTHUFu1qYz1wNXVTRmS2E3L"
  const balance = 12.45

  const shortenedAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
    // In a real implementation, you would show a toast notification
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Wallet</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy address</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy wallet address</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
        <CardDescription>Your Solana wallet details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">Address</div>
            <div className="flex items-center gap-2">
              <div className="font-mono text-sm">{shortenedAddress}</div>
              <a
                href={`https://explorer.solana.com/address/${walletAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span className="sr-only">View on Solana Explorer</span>
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">Balance</div>
            <div className="flex items-end gap-2">
              <div className="text-2xl font-bold">{balance}</div>
              <div className="text-sm font-medium text-muted-foreground">SOL</div>
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <Button className="w-full" size="sm">
              Deposit
            </Button>
            <Button variant="outline" className="w-full" size="sm">
              Withdraw
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
