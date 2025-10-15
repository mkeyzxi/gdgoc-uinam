
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import faqs from "@/lib/data/faqs";


const Question = () => {

	return (
		<main className="w-full flex flex-col items-start  ">
			<div className="w-full  ">
				

				{/* Accordion Container */}
				<Accordion.Root
					type="single"
					collapsible
					className="w-full divide-y "
				>
					{faqs.map(({ id, question, answer }) => (
						<Accordion.Item
							key={id}
							value={id}

							className="group overflow-hidden relative"
						>
							<Accordion.Header className="flex">
								{/* Garis vertikal di samping (seperti gambar) */}
								<div
									className="absolute left-0 top-0 h-full w-1 transition-colors duration-300"
									data-state={id}
								>
									{/* Mengganti warna border/strip: blue-400 untuk aktif, transparan untuk non-aktif */}
									<div className={`h-full w-full transition-colors duration-300 group-data-[state=open]:bg-blue-400`} />
								</div>

								<Accordion.Trigger

									className={`flex flex-1 justify-between items-center text-left w-full pl-5 pr-6 py-4 font-semibold transition-all duration-300 text-base md:text-lg group-data-[state=open]:text-blue-400 text-gray-800 hover:text-blue-400`}
								>
									{question}
									<ChevronDown
										className={`h-5 w-5 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180 !data-[state=open]:text-blue-400`}
									/>
								</Accordion.Trigger>
							</Accordion.Header>

							<Accordion.Content

								className="overflow-hidden  transition-all duration-300 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
							>
								<div

									className="pl-5 pr-6 pb-6 pt-2 text-sm md:text-base leading-relaxed text-gray-800"
								>
									{answer}
								</div>
							</Accordion.Content>
						</Accordion.Item>
					))}
				</Accordion.Root>
			</div>
		</main>
	);
};

export default Question;