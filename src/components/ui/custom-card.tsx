import type { ReactNode } from "react"
import { TypographyH3 } from "./typographyh3"
import { Github, Instagram, Linkedin } from "lucide-react"

export const CardInterest = ({ category, children, from, to }: { category: string, children: ReactNode, from: string, to: string }) => {
	return (
		// <section className="group bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center p-8 w-64 h-64">
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
		<section className={`w-full lg:w-54 bg-gradient-to-br hover:bg-gradient-to-tl transition-all ${from} ${to} shadow-md flex flex-col`}>

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

type CardProfileProps = {
	className?: string,
	children: string,
	img: string,
	role: string,
	sosialMedia: {
		instagram?: string,
		github?: string,
		linkedin?: string,
	}
}

// export const CardProfile = ({
// 	className,
// 	children,
// 	img,
// 	role,
// 	sosialMedia,
// }: CardProfileProps) => {
// 	return (
// 		<div
// 			className={`w-full max-w-[320px] bg-white shadow-md rounded-2xl p-6 
//       flex flex-col items-center gap-4 text-center 
//       transition-transform duration-200 hover:scale-[1.02] ${className}`}
// 		>
// 			{/* Foto Profil */}
// 			<div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">
// 				<img
// 					src={img}
// 					alt="Profile"
// 					className="w-full h-full object-cover"
// 				/>
// 			</div>

// 			{/* Detail Profil */}
// 			<div className="flex flex-col items-center w-full min-w-0">
// 				<h2 className="text-md font-semibold text-gray-900 leading-tight break-words">
// 					{children}
// 				</h2>
// 				<p className="text-gray-600 text-sm break-words">{role}</p>

// 				{/* Sosial Media */}
// 				<div className="flex gap-3 mt-3 flex-wrap justify-center">
// 					{sosialMedia.instagram && (
// 						<a
// 							href={sosialMedia.instagram}
// 							className="text-pink-500 hover:scale-110 transition p-1 bg-pink-100 rounded-sm"
// 							aria-label="Instagram"
// 							target="_blank"
// 						>
// 							<Instagram size={18} />
// 						</a>
// 					)}
// 					{sosialMedia.github && (
// 						<a
// 							href={sosialMedia.github}
// 							className="text-gray-800 hover:scale-110 transition p-1 bg-slate-100 rounded-sm"
// 							aria-label="Github"
// 							target="_blank"
// 						>
// 							<Github size={18} />
// 						</a>
// 					)}
// 					{sosialMedia.linkedin && (
// 						<a
// 							href={sosialMedia.linkedin}
// 							className="text-blue-600 hover:scale-110 transition p-1 bg-blue-100 rounded-sm"
// 							aria-label="LinkedIn"
// 							target="_blank"
// 						>
// 							<Linkedin size={18} />
// 						</a>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export const CardProfile = ({
	className,
	children,
	img,
	role,
	sosialMedia,
}: CardProfileProps) => {
	return (
		<div
			className={`
        w-full
        max-w-[210px] sm:max-w-[200px] md:max-w-[380px]
        bg-white shadow-md rounded-2xl p-2 sm:p-5 lg:p-2
        flex flex-col lg:flex-row items-center gap-3 lg:gap-4 text-center lg:text-left
        transition-transform duration-200 hover:scale-[1.02]
        ${className}
      `}
		>
			{/* Foto Profil */}
			<div className="w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
				<img
					src={img}
					alt="Profile"
					loading="lazy"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Detail Profil */}
			<div className="flex flex-col items-center lg:items-start w-full min-w-0">
				<h2 className="text-sm sm:text-base font-semibold text-gray-900 leading-tight break-words">
					{children}
				</h2>
				<p className="text-gray-600 text-xs sm:text-sm break-words">{role}</p>

				{/* Sosial Media */}
				<div className="flex gap-2 sm:gap-3 mt-3 flex-wrap justify-center lg:justify-start">
					{sosialMedia.instagram && (
						<a
							href={sosialMedia.instagram}
							className="text-pink-500 hover:scale-110 transition p-1 bg-pink-100 rounded-sm"
							aria-label="Instagram"
							target="_blank"
						>
							<Instagram size={16} />
						</a>
					)}
					{sosialMedia.github && (
						<a
							href={sosialMedia.github}
							className="text-gray-800 hover:scale-110 transition p-1 bg-slate-100 rounded-sm"
							aria-label="Github"
							target="_blank"
						>
							<Github size={16} />
						</a>
					)}
					{sosialMedia.linkedin && (
						<a
							href={sosialMedia.linkedin}
							className="text-blue-600 hover:scale-110 transition p-1 bg-blue-100 rounded-sm"
							aria-label="LinkedIn"
							target="_blank"
						>
							<Linkedin size={16} />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};
