// import { Button } from "@/components/ui/button"
// import { ChevronDown } from "lucide-react"

// export function ButtonOutline() {
//   const scrollToAbout = () => {
//     document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <Button onClick={scrollToAbout} variant="outline" className="flex items-center gap-2">
//       Kenali Kami <ChevronDown className="w-4 h-4" />
//     </Button>
//   )
// }


import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"


export function ButtonOutline() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Button
      onClick={scrollToAbout}
      variant="outline"
      className="flex items-center w-full justify-between  sm:w-xs lg:w-[140px] gap-2 border-2 mt-5 md:mt-3 border-green-400 text-green-600 hover:text-green-700 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300"
    >
      Kenali Kami
      <ChevronDown className="w-4 h-4 animate-bounce-slow" />
    </Button>
  )
}
