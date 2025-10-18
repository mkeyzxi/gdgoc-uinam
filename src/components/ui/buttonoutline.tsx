import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function ButtonOutline() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Button onClick={scrollToAbout} variant="outline" className="flex items-center gap-2">
      Kenali Kami <ChevronDown className="w-4 h-4" />
    </Button>
  )
}
