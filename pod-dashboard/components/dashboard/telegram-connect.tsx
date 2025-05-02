import { BellIcon as BrandTelegram, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TelegramConnect() {
  // In a real implementation, this would come from your application state
  const isConnected = true
  const channelCount = 3

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Telegram</span>
          {isConnected && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Connected
            </Badge>
          )}
        </CardTitle>
        <CardDescription>Monitor Telegram channels for contract addresses</CardDescription>
      </CardHeader>
      <CardContent>
        {isConnected ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Channels Monitored</div>
              <div className="text-2xl font-bold">{channelCount}</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Last Detection</div>
              <div className="text-sm">2 minutes ago</div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button className="w-full" size="sm">
                <LinkIcon className="mr-2 h-4 w-4" />
                Manage Channels
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center py-4">
              <BrandTelegram className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">
                Connect your Telegram account to start monitoring channels for Solana contract addresses.
              </p>
            </div>
            <Button className="w-full">
              <BrandTelegram className="mr-2 h-4 w-4" />
              Connect Telegram
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
