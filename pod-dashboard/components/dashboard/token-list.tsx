import { ArrowDown, ArrowUp, ExternalLink, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface Token {
  id: string
  name: string
  symbol: string
  contractAddress: string
  amount: number
  value: number
  priceChange: number
  purchaseDate: string
}

export function TokenList() {
  // In a real implementation, this would come from your API
  const tokens: Token[] = [
    {
      id: "1",
      name: "Solana Meme",
      symbol: "MEME",
      contractAddress: "MeMeKKzN9eFgHXLJuqw73YK5rvjHkX5bxnCBdEb2vNy",
      amount: 10000,
      value: 0.75,
      priceChange: 12.5,
      purchaseDate: "2023-05-01T12:00:00Z",
    },
    {
      id: "2",
      name: "Bonk",
      symbol: "BONK",
      contractAddress: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
      amount: 50000000,
      value: 1.25,
      priceChange: -3.2,
      purchaseDate: "2023-04-28T09:30:00Z",
    },
    {
      id: "3",
      name: "Dogwifhat",
      symbol: "WIF",
      contractAddress: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLZYi7pBZ9nnq",
      amount: 500,
      value: 2.1,
      priceChange: 25.8,
      purchaseDate: "2023-05-02T15:45:00Z",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tokens</CardTitle>
        <CardDescription>Your purchased tokens from detected contracts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium text-muted-foreground">
              <div>Token</div>
              <div className="text-right">Amount</div>
              <div className="text-right">Value (SOL)</div>
              <div className="text-right">Change</div>
              <div className="text-right">Actions</div>
            </div>
            <div className="divide-y">
              {tokens.map((token) => (
                <div key={token.id} className="grid grid-cols-5 gap-4 p-4 text-sm">
                  <div className="flex flex-col">
                    <div className="font-medium">{token.symbol}</div>
                    <div className="text-xs text-muted-foreground">{token.name}</div>
                  </div>
                  <div className="text-right font-mono">{token.amount.toLocaleString()}</div>
                  <div className="text-right font-medium">{token.value.toFixed(2)}</div>
                  <div className="text-right">
                    <Badge
                      variant="outline"
                      className={
                        token.priceChange >= 0
                          ? "bg-green-50 text-green-700 border-green-200"
                          : "bg-red-50 text-red-700 border-red-200"
                      }
                    >
                      {token.priceChange >= 0 ? (
                        <ArrowUp className="mr-1 h-3 w-3" />
                      ) : (
                        <ArrowDown className="mr-1 h-3 w-3" />
                      )}
                      {Math.abs(token.priceChange).toFixed(1)}%
                    </Badge>
                  </div>
                  <div className="flex justify-end gap-2">
                    <a
                      href={`https://explorer.solana.com/address/${token.contractAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">View on Solana Explorer</span>
                    </a>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Sell Token</DropdownMenuItem>
                        <DropdownMenuItem>Set Price Alert</DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="sm">
              View All Tokens
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
