import { FaEnvelope,  FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import icon from "../assets/gdgoc.svg";
export default function Footer() {
	return (
		<footer className="w-full bg-gray-50 text-gray-800 py-12 px-6 md:px-16 border-t border-gray-200">
			<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
				{/* Logo + Deskripsi */}
				<div className="col-span-2 flex flex-col gap-3">
					<div className="flex items-center gap-2">
						<img
							src={icon}
							alt="GDGOC Logo"
							loading="lazy"
							className="w-8 h-8"
						/>
						<h2 className="text-lg font-semibold">
							Google Developer Groups <br /> On Campus UIN Alauddin Makassar
						</h2>
					</div>
					<p className="text-sm text-gray-600 leading-relaxed">
						Komunitas developer masa depan di UIN Alauddin Makassar.
						Tingkatkan skill, perluas jaringan, dan mulai berkontribusi bagi sekitarmu.
					</p>
				</div>

				{/* Navigation */}
				<div>
					<h3 className="font-semibold text-lg mb-3 text-blue-500">Explore</h3>
					<ul className="space-y-2 text-gray-700">
						<li><a href="#about" className="hover:text-blue-500">About</a></li>
						<li><a href="#projects" className="hover:text-green-500">Projects</a></li>
						<li><a href="#events" className="hover:text-yellow-500">Events</a></li>
						<li><a href="#team" className="hover:text-red-500">Team</a></li>
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h3 className="font-semibold text-lg mb-3 text-green-500">Contact</h3>
					<ul className="space-y-2 text-gray-700">
						<li className="flex items-center gap-2 hover:text-red-500">
							<FaEnvelope /> <a href="mailto:gdgoc.uinam@gmail.com">Email</a>
						</li>
						<li className="flex items-center gap-2 hover:text-yellow-500">
							<FaInstagram /> <a href="https://twitter.com/">Instagram</a>
						</li>
						<li className="flex items-center gap-2 hover:text-green-500">
							<FaWhatsapp /> <a href="https://twitter.com/">Whatsapp</a>
						</li>
						<li className="flex items-center gap-2 hover:text-blue-500">
							<FaLinkedin /> <a href="https://linkedin.com/">LinkedIn</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Garis + Hak Cipta */}
			<div className="border-t border-gray-300 mt-10 pt-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
				<p>
					© {new Date().getFullYear()} GDGOC UINAM. All rights reserved.
				</p>
				<p>
					Made with <span className="text-red-500">❤️</span> by{" "}
					<a
						href="https://github.com/mkeyzxi"
						className="text-blue-500 hover:underline font-medium"
					>
						Core Team Website 
					</a>
				</p>
			</div>
		</footer>
	);
}
