import { useState } from "react";
import { CardProfile } from "@/components/ui/custom-card";
import TeamNav from "@/layouts/TeamNav";
import teamMembers from "@/lib/data/team-members";
const TeamPages = () => {
	const [activeTab, setActiveTab] = useState<"semua" | "creative" | "technical">("semua");

	// Data contoh anggota
	

	// Filter sesuai tab aktif
	const filteredMembers =
		activeTab === "semua"
			? teamMembers
			: teamMembers.filter((member) => member.category === activeTab);

	return (
		// <main className="container flex flex-col justify-center items-center ">
		// 	<TeamNav activeTab={activeTab} setActiveTab={setActiveTab} />

		// 	<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-2">
		// 		{filteredMembers.map((member, i) => (
		// 			<CardProfile
		// 				key={i}
		// 				img={member.img}
		// 				role={member.role}
		// 				sosialMedia={member.sosialMedia}
		// 			>
		// 				{member.name}
		// 			</CardProfile>
		// 		))}
		// 	</div>
		// </main>

		<main className=" mx-auto flex flex-col justify-center items-center px-4 md:px-8">
  <TeamNav activeTab={activeTab} setActiveTab={setActiveTab} />

  <div
    className="
      grid
      grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4
      gap-6
      w-full
      justify-items-center
      mt-6
    "
  >
    {filteredMembers.map((member, i) => (
      <CardProfile
        key={i}
        img={member.img}
        role={member.role}
        sosialMedia={member.sosialMedia}
      >
        {member.name}
      </CardProfile>
    ))}
  </div>
</main>


	);
};

export default TeamPages;
