import { ArrowDownLeft, ArrowUpRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Transaction {
  id: string
  type: "buy" | "sell"
  tokenSymbol: string
  tokenName: string
  amount: number
  value: number
  timestamp: string
  txHash: string
}

export function TransactionHistory() {
  // In a real implementation, this would come from your API
  const transactions: Transaction[] = [
    {
      id: "1",
      type: "buy",
      tokenSymbol: "MEME",
      tokenName: "Solana Meme",
      amount: 10000,
      value: 0.75,
      timestamp: "2023-05-01T12:00:00Z",
      txHash: "5UxV2MR2LsxCnX7GDT9iqXgujFqaWnWQYxjE3NNECRqV",
    },
    {
      id: "2",
      type: "buy",
      tokenSymbol: "BONK",
      tokenName: "Bonk",
      amount: 50000000,
      value: 1.25,
      timestamp: "2023-04-28T09:30:00Z",
      txHash: "3zQ7SJjYJPwgLK5o5KgwcpNVK9jCvKuZ5tQgbTZAHxcW",
    },
    {
      id: "3",
      type: "sell",
      tokenSymbol: "WIF",
      tokenName: "Dogwifhat",
      amount: 250,
      value: 0.8,
      timestamp: "2023-05-02T15:45:00Z",
      txHash: "4vJ5SrVB6JZoXWgV8Lq8H3KZf5Lv5qP7meSSJQMKW1Vm",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>Recent token purchases and sales</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium text-muted-foreground">
              <div>Transaction</div>
              <div>Token</div>
              <div className="text-right">Amount</div>
              <div className="text-right">Value (SOL)</div>
              <div className="text-right">Date</div>
            </div>
            <div className="divide-y">
              {transactions.map((tx) => (
                <div key={tx.id} className="grid grid-cols-5 gap-4 p-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className={`rounded-full p-1 ${
                        tx.type === "buy" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                      }`}
                    >
                      {tx.type === "buy" ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                    </div>
                    <div className="font-medium capitalize">{tx.type}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-medium">{tx.tokenSymbol}</div>
                    <div className="text-xs text-muted-foreground">{tx.tokenName}</div>
                  </div>
                  <div className="text-right font-mono">{tx.amount.toLocaleString()}</div>
                  <div className="text-right font-medium">{tx.value.toFixed(2)}</div>
                  <div className="flex items-center justify-end gap-2">
                    <div className="text-right text-xs text-muted-foreground">{formatDate(tx.timestamp)}</div>
                    <a
                      href={`https://explorer.solana.com/tx/${tx.txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span className="sr-only">View on Solana Explorer</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="sm">
              View All Transactions
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
