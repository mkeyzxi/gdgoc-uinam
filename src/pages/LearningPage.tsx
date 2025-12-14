import SpotlightCard from "@/components/SpotlightCard";
import { TypographyH2 } from "@/components/ui/typographyh2";

const LearningPage = () => {
	return (
		<main
			id="workshop"
			className="flex flex-col justify-center items-center py-10 gap-10"
		>
			<TypographyH2 className="px-5">
				Belajar dan Dalami 5 Bidang Ini di GDG On UINAM
			</TypographyH2>

			{/* GRID WRAPPER */}
			<div
				className="
          w-full lg:w-auto
          grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
          items-stretch
          gap-y-4 gap-3
          px-6 sm:px-10 lg:px-24
        "
			>
				{/* WEBSITE DEVELOPMENT */}
				<SpotlightCard
					className="custom-spotlight-card h-full flex flex-row sm:flex-col items-start sm:items-center shadow-sm rounded-xl hover:scale-[1.02] transition-all"
					spotlightColor="rgba(5, 223, 114, 0.47)"
				>
					<div className="w-28 h-28 rounded-lg overflow-hidden">
						<img
							src="/img/bidang/website.avif"
							alt="website"
							className="w-full h-full object-cover"
							loading="lazy"
						/>
					</div>

					<div className="flex flex-col gap-2 flex-1">
						<h3 className="text-xl font-semibold tracking-wide">Website Development</h3>
						<p className="text-sm leading-relaxed">
							Membangun website modern yang cepat dan responsif.
						</p>
					</div>
				</SpotlightCard>

				{/* MOBILE DEVELOPMENT */}
				<SpotlightCard
					className="custom-spotlight-card h-full flex flex-row sm:flex-col items-start sm:items-center shadow-sm rounded-xl hover:scale-[1.02] transition-all"
					spotlightColor="rgba(5, 223, 114, 0.47)"
				>
					<div className="w-28 h-28 rounded-lg overflow-hidden">
						<img
							src="/img/bidang/mobile.avif"
							alt="mobile"
							className="w-full h-full object-cover"
							loading="lazy"
						/>
					</div>

					<div className="flex flex-col gap-2 flex-1">
						<h3 className="text-xl font-semibold tracking-wide">Mobile Development</h3>
						<p className="text-sm leading-relaxed">
							Membangun aplikasi mobile modern yang cepat dan intuitif.
						</p>
					</div>
				</SpotlightCard>

				{/* ARTIFICIAL INTELLIGENCE */}
				<SpotlightCard
					className="custom-spotlight-card h-full flex flex-row sm:flex-col items-start sm:items-center shadow-sm rounded-xl hover:scale-[1.02] transition-all"
					spotlightColor="rgba(5, 223, 114, 0.47)"
				>
					<div className="w-28 h-28 rounded-lg overflow-hidden">
						<img
							src="/img/bidang/ai.avif"
							alt="Artificial Intelligence"
							className="w-full h-full object-cover"
							loading="lazy"
						/>
					</div>

					<div className="flex flex-col gap-2 flex-1">
						<h3 className="text-xl font-semibold tracking-wide">
							Artificial Intelligence
						</h3>
						<p className="text-sm leading-relaxed">
							Mengembangkan solusi cerdas berbasis data dan model AI.
						</p>
					</div>
				</SpotlightCard>

				{/* UI/UX DESIGN */}
				<SpotlightCard
					className="custom-spotlight-card h-full flex flex-row sm:flex-col items-start sm:items-center shadow-sm rounded-xl hover:scale-[1.02] transition-all"
					spotlightColor="rgba(5, 223, 114, 0.47)"
				>
					<div className="w-28 h-28 rounded-lg overflow-hidden">
						<img
							src="/img/bidang/uiux.avif"
							alt="ui/ux"
							className="w-full h-full object-cover"
							loading="lazy"
						/>
					</div>

					<div className="flex flex-col gap-2 flex-1">
						<h3 className="text-xl font-semibold tracking-wide">
							UI/UX Design
						</h3>
						<p className="text-sm leading-relaxed">
							Merancang pengalaman digital yang jelas, nyaman, dan efektif.
						</p>
					</div>
				</SpotlightCard>

				{/* CLOUD COMPUTING */}
				<SpotlightCard
					className="custom-spotlight-card h-full flex flex-row sm:flex-col items-start sm:items-center shadow-sm rounded-xl hover:scale-[1.02] transition-all"
					spotlightColor="rgba(5, 223, 114, 0.47)"
				>
					<div className="w-28 h-28 rounded-lg overflow-hidden">
						<img
							src="/img/bidang/cloud-computing.avif"
							alt="cloud-computing"
							className="w-full h-full object-cover"
							loading="lazy"
						/>
					</div>

					<div className="flex flex-col gap-2 flex-1">
						<h3 className="text-xl font-semibold tracking-wide">
							Cloud Computing
						</h3>
						<p className="text-sm leading-relaxed">
							Mengelola layanan cloud yang scalable, aman, dan efisien.
						</p>
					</div>
				</SpotlightCard>
			</div>
		</main>
	);
};

export default LearningPage;
