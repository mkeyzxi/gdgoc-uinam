import type { ReactNode } from "react"
import { TypographyH3 } from "./typographyh3"

export const CardInterest = ({category, children, from, to}: {category: string, children: ReactNode, from:string, to:string}) => {
	return (
		// <section className="group bg-gradient-to-br from-blue-600 to-blue-400 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center p-8 w-64 h-64">
		// 	<div className="flex items-center justify-center  w-24 h-24 mb-6">
		// 		<svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 24 24" fill="none" stroke="black"
		// 			stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		// 			<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
		// 			<path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
		// 			<path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
		// 			<circle cx="12" cy="12" r="10" />
		// 		</svg>
		// 	</div>
		// 	<div className="">
		// 		<TypographyH3>Web Development</TypographyH3>
		// 	</div>
		// </section>
		<section className={`w-64 bg-gradient-to-br hover:bg-gradient-to-tl transition-all ${from} ${to} shadow-md flex flex-col`}>

			<div className="flex-1 flex items-center justify-center p-2 ">
				{/* <svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 24 24" fill="none" stroke="black"
					stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10" />
					<text x="6" y="15" font-size="6" fill="black" font-family="Arial, sans-serif">www</text>
				</svg> */}
				{children}
			</div>


			<div className="bg-white text-gray-800 text-center py-4">
				<TypographyH3>{category}</TypographyH3>
			</div>
		</section>
	)
}