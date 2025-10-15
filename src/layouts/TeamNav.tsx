interface TeamNavProps {
	activeTab: "semua" | "creative" | "technical";
	setActiveTab: React.Dispatch<React.SetStateAction<"semua" | "creative" | "technical">>;
}

const TeamNav = ({ activeTab, setActiveTab }: TeamNavProps) => {
	return (
		<header className="w-full flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-200 pb-3">
			{/* Judul */}
			<h2 className="text-2xl font-bold">Cores Team</h2>

			{/* Navigasi */}
			<nav className="mt-3 md:mt-0">
				<ul className="flex gap-6 text-gray-700 text-sm font-medium">
					{["semua", "creative", "technical"].map((tab) => (
						<li key={tab}>
							<button
								onClick={() => setActiveTab(tab as typeof activeTab)}
								className={`transition-colors duration-200 capitalize ${
									activeTab === tab
										? "text-blue-600 border-b-2 border-blue-600"
										: "hover:text-blue-600"
								}`}
							>
								{tab}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default TeamNav;
