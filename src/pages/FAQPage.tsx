// import Stack from "@/components/Stack";
// import Question from "@/layouts/Question";

// const FAQPage = () => {
// 	const images = [
// 		{ id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
// 		{ id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
// 		{ id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
// 		{ id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
// 	];
// 	return (
// 	<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container justify-center items-center place-items-center ">
// 		<div className="order-2 md:order-1 lg:col-span-2">
// 			<Question></Question>
// 		</div>
// 		<div className="order-1 md:order-2">
// 			<Stack
// 			randomRotation={true}
// 			sensitivity={180}
// 			sendToBackOnClick={false}
// 			cardDimensions={{ width: 280, height: 380 }}
// 			cardsData={images}
// 		/>
// 		</div>
// 	</main>)

// }

// export default FAQPage;

import Stack from "@/components/Stack";
import { TypographyH2 } from "@/components/ui/typographyh2";
import Question from "@/layouts/Question";

const FAQPage = () => {
  const images = [
    { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
    { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
    { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
    { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-green-50 to-green-100 py-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 container mx-auto max-w-7xl place-items-center">
        {/* Kolom FAQ */}
        <div className="lg:col-span-2 w-full order-2 lg:order-1">
			<TypographyH2
			 className="text-center mb-8 text-3xl font-extrabold text-gray-900">
					Frequently Asked Questions
				</TypographyH2>
          <div className="  transition-shadow duration-300 p-1 md:p-4">
            <Question />
          </div>
        </div>

        {/* Kolom Stack */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative scale-95 hover:scale-100 transition-transform duration-500">
            <Stack
              randomRotation
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 260, height: 360 }}
              cardsData={images}
            />
            <div className="absolute -z-10 inset-0  blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
