

// import { Button } from "@/components/ui/button"
// import { ChevronDown } from "lucide-react"


// export function ButtonOutline() {
//   const scrollToAbout = () => {
//     document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <Button
//       onClick={scrollToAbout}
//       variant="outline"
//       className="flex items-center font-semibold w-full justify-between  sm:w-xs lg:w-[140px] gap-2 border-2 mt-5 md:mt-3 border-green-400 text-slate-600 hover:text-green-400 border-x-0 border-t-0 hover:border-slate-700 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300"
//     >
      
//       Kenali Kami
//       <ChevronDown className="w-4 h-4 animate-bounce-slow" />
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
      className={`group
        relative
        flex items-center gap-2 justify-center
        w-full sm:w-[160px] lg:w-[150px]
        font-semibold tracking-wide

        /* base */
        border border-green-400/40
        text-slate-700
        rounded-sm px-5 py-3
        bg-white/60 backdrop-blur-sm

        /* transitions */
        transition-all duration-300

        /* hover */
        hover:bg-green-400 hover:text-white
        hover:border-green-400
        hover:shadow-[0_0_20px_rgba(34,197,94,0.45)]

        /* subtle press effect */
        active:scale-95 mt-4`}
    >
      Kenali Kami

      <ChevronDown
        className="
          w-4 h-4
          animate-bounce-slow
          group-hover:translate-y-0.5
          transition-transform duration-300
        "
      />
    </Button>
  )
}
