import { motion, AnimatePresence } from "framer-motion";

interface TeamNavProps {
	activeTab: "semua" | "creative" | "event" | "technical";
	setActiveTab: React.Dispatch<React.SetStateAction<"semua" | "creative" | "event" | "technical">>;
}

const TeamNav = ({ activeTab, setActiveTab }: TeamNavProps) => {
	return (
		<header className="w-full flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-200 pb-3">
			{/* Judul */}
			<h2 className="text-2xl font-bold">Cores Team</h2>

			{/* Navigasi */}
			<nav className="mt-3 md:mt-0 ">
				<ul className="flex gap-6 text-gray-700 text-sm font-medium">
					{["semua", "creative", "event", "technical"].map((tab) => (
						<li key={tab} className="relative">
							<button
								onClick={() => setActiveTab(tab as typeof activeTab)}
								className={`capitalize px-1 pb-1 transition-colors duration-200 md:text-lg ${
									activeTab === tab
										? "text-green-500"
										: "hover:text-green-500 text-gray-700"
								}`}
							>
								{tab}
							</button>

							{/* animasi underline hijau */}
							<AnimatePresence>
								{activeTab === tab && (
									<motion.div
										layoutId="activeTabUnderline"
										className="absolute left-0 right-0 h-[2px] bg-green-500 rounded-full"
										style={{ bottom: 0 }}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 30,
										}}
									/>
								)}
							</AnimatePresence>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default TeamNav;
