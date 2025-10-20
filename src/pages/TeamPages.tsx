// import React, { Suspense, useState } from "react";
// // import { CardProfile } from "@/components/ui/custom-card";
// import TeamNav from "@/layouts/TeamNav";
// import teamMembers from "@/lib/data/team-members";
// import ProfileIndiactorLoading from "@/layouts/ProfileIndiactorLoading";

// // const CardProfile = React.lazy(() => import('@/components/ui/custom-card').then(module => ({ default: module.CardProfile })));
// const CardProfile = React.lazy(() =>
//   import('@/components/ui/custom-card').then(module => ({ default: module.CardProfile }))
// );

// const TeamPages = () => {
// 	const [activeTab, setActiveTab] = useState<"semua" | "creative" | "technical">("semua");

// 	// Data contoh anggota


// 	// Filter sesuai tab aktif
// 	const filteredMembers =
// 		activeTab === "semua"
// 			? teamMembers
// 			: teamMembers.filter((member) => member.category === activeTab);

// 	return (
// 		// <main className="container flex flex-col justify-center items-center ">
// 		// 	<TeamNav activeTab={activeTab} setActiveTab={setActiveTab} />

// 		// 	<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-2">
// 		// 		{filteredMembers.map((member, i) => (
// 		// 			<CardProfile
// 		// 				key={i}
// 		// 				img={member.img}
// 		// 				role={member.role}
// 		// 				sosialMedia={member.sosialMedia}
// 		// 			>
// 		// 				{member.name}
// 		// 			</CardProfile>
// 		// 		))}
// 		// 	</div>
// 		// </main>

// 		<main className=" mx-auto flex flex-col justify-center items-center px-4 md:px-8 lg:px-38 py-8">
// 			<TeamNav activeTab={activeTab} setActiveTab={setActiveTab} />

// 			<div
// 				className="
//       grid
//       grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4
//       gap-2
//       w-full
//       justify-items-center
//       mt-6

//     "
// 			>
// 				{filteredMembers.map((member, i) => (
// 					<Suspense fallback={<ProfileIndiactorLoading />} key={i}>
// 						<CardProfile
// 						key={i}
// 						img={member.img}
// 						role={member.role}
// 						sosialMedia={member.sosialMedia}
// 					>
// 						{member.name}
// 					</CardProfile>
// 					</Suspense>
// 				))}
// 			</div>
// 		</main>


// 	);
// };

// export default TeamPages;

import React, { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamNav from "@/layouts/TeamNav";
import teamMembers from "@/lib/data/team-members";
import ProfileIndiactorLoading from "@/layouts/ProfileIndiactorLoading";

const CardProfile = React.lazy(() =>
	import("@/components/ui/custom-card").then((module) => ({
		default: module.CardProfile,
	}))
);

const TeamPages = () => {
	const [activeTab, setActiveTab] = useState<"semua" | "creative" | "event" | "technical">("semua");

	// filter sesuai tab aktif
	const filteredMembers =
		activeTab === "semua"
			? teamMembers
			: teamMembers.filter((member) => member.category === activeTab);

	return (
		<main id="core-team" className=" mx-auto flex flex-col justify-center items-center px-4 md:px-8 lg:px-38 py-8">
			<TeamNav activeTab={activeTab} setActiveTab={setActiveTab} />

			<div
				className="
      grid
      grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4
      gap-2
      w-full
      justify-items-center
      mt-6
    "
			>
				<AnimatePresence mode="popLayout">
					{filteredMembers.map((member, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{
								duration: 0.35,
								ease: "easeOut",
								delay: i * 0.05,
							}}
							className="w-full flex justify-center"
						>
							<Suspense fallback={<ProfileIndiactorLoading />}>
								<CardProfile
									key={i}
									img={member.img}
									role={member.role}
									sosialMedia={member.sosialMedia}
								>
									{member.name}
								</CardProfile>
							</Suspense>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</main>
	);
};

export default TeamPages;
