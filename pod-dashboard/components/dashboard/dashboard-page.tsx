import { WalletDisplay } from "@/components/dashboard/wallet-display"
import { TokenList } from "@/components/dashboard/token-list"
import { TelegramConnect } from "@/components/dashboard/telegram-connect"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { TransactionHistory } from "@/components/dashboard/transaction-history"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"

export function DashboardPage() {
  // Static sidebar state - no useState
  const sidebarOpen = true

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar open={sidebarOpen} onOpenChange={() => {}} />
      <div className="flex-1 flex flex-col">
        <DashboardHeader onMenuClick={() => {}} />
        <main className="flex-1 p-6 md:p-8 pt-6">
          <div className="flex flex-col space-y-6 max-w-7xl mx-auto">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Monitor your wallet, tokens, and Telegram channels.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <WalletDisplay />
              <TelegramConnect />
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Purchase Settings</CardTitle>
                  <CardDescription>Configure your token purchase parameters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span>Purchase Amount:</span>
                      <span className="font-medium">0.5 SOL</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Auto-buy:</span>
                      <span className="font-medium text-green-500">Enabled</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Slippage Tolerance:</span>
                      <span className="font-medium">2.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tokens">Tokens</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <Overview />
              </TabsContent>
              <TabsContent value="tokens" className="space-y-4">
                <TokenList />
              </TabsContent>
              <TabsContent value="transactions" className="space-y-4">
                <TransactionHistory />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
