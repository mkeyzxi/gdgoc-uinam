import { CardInterest } from "@/components/ui/custom-card";
import { BrainCircuit, Cloud, Earth, PanelsRightBottom, Smartphone } from "lucide-react";

const LearningPage = () => {
	return (
		<main className="container  ">
			<div className="flex flex-wrap justify-center items-center gap-7">
				<CardInterest category="Website" from="from-green-400" to="to-green-600"><Earth size={120} strokeWidth={1.3} /></CardInterest>
				<CardInterest category="Mobile" from="from-blue-400" to="to-blue-600"><Smartphone size={120} strokeWidth={1.3}/></CardInterest>
				<CardInterest category="UI/UX" from="from-gray-100" to="to-gray-200"><PanelsRightBottom size={120} strokeWidth={1.3} /></CardInterest>
				<CardInterest category="AI" from="from-yellow-400" to="to-yellow-600"><BrainCircuit size={120} strokeWidth={1.3}/></CardInterest>
				<CardInterest category="Cloud Computing" from="from-red-400" to="to-red-600"><Cloud size={120} strokeWidth={1.3}/></CardInterest>
			</div>
		</main>
	)
}

export default LearningPage;