// import { TypographyH2 } from "@/components/ui/typographyh2";
// import { TypographyAbout } from "@/components/ui/typography-about";
// // import CircularGallery from "@/components/CircularGallery";
// import ScrollVelocity from "@/components/ScrollVelocity";
// import React, { Suspense } from "react";
// import GaleryIndicatorLoading from "@/layouts/GaleryIndiactorLoading";
// const CircularGallery = React.lazy(() => import('@/components/CircularGallery'));
// // import CircularGallery from './CircularGallery'
// const AboutPage = () => {
// 	return (
// 		<main className=" flex flex-col gap-10 md:gap-16 ">

// 			{/* Section ini akan menjadi parent dan mengambil 1 kolom (penuh) atau 1/2 kolom (md) */}
// 			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-12 lg:px-20 ">
// 				<section className="">
// 					{/* Tambahkan kelas 'w-full' pada img untuk memastikan lebar gambar 100% 
// 					dari parent-nya. Hapus atribut 'width="100%"' yang merupakan atribut HTML
// 					dan ganti dengan kelas Tailwind CSS 'w-full' untuk konsistensi.
// 				*/}
// 					{/* <img 
// 					src="https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560,y_0.0_mul_h_sub_0.0_mul_640/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/event_banners/GDG_Bevy_DefaultEventBanner_9M7vWqs.png" 
// 					alt="Sharing Session bersama cores team GDG-OC UINAM" 
// 					className="w-full h-auto object-cover rounded-lg shadow-lg" // Tambahkan 'w-full'
// 				/> */}


// 					<div style={{ height: '300px', position: 'relative' }}>
// 						<Suspense fallback={<GaleryIndicatorLoading />}>
// 							<CircularGallery bend={3} textColor="#000" borderRadius={0.05} scrollEase={0.02} />
// 						</Suspense>
// 					</div>
// 				</section>
// 				<section className="text-justify">
// 					<TypographyH2>GDGOC UINAM itu Apa sih?</TypographyH2>

// 					<TypographyAbout>
// 						Google Developer Groups On Campus UIN Alauddin Makassar adalah komunitas teknologi yang mewadahi mahasiswa untuk belajar, berkolaborasi, dan berinovasi di bidang pengembangan perangkat lunak, AI, dan inovasi digital.
// 					</TypographyAbout>

// 					<TypographyAbout>
// 						Kami berfokus menciptakan lingkungan belajar yang kolaboratif melalui berbagai kegiatan seperti workshop, seminar, dan hackathon, agar mahasiswa siap menghadapi tantangan dunia teknologi.
// 					</TypographyAbout>
// 				</section>
// 			</div>
// 			<ScrollVelocity
// 				texts={['Empowering Tech', 'Shaping the Future']}
// 				velocity={120}
// 				className="custom-scroll-text"
// 			/>

// 		</main>
// 	)
// }

// export default AboutPage;


import { TypographyH2 } from "@/components/ui/typographyh2";
import { TypographyAbout } from "@/components/ui/typography-about";
import ScrollVelocity from "@/components/ScrollVelocity";
import React, { Suspense } from "react";
import GaleryIndicatorLoading from "@/layouts/GaleryIndiactorLoading";
import { motion } from "framer-motion";

const CircularGallery = React.lazy(() => import('@/components/CircularGallery'));

const AboutPage = () => {
	return (
		<main id="about" className="flex flex-col gap-10 md:gap-16">
			{/* Grid utama */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-12 lg:px-20">
				{/* Kiri - Gallery */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className=""
				>
					<div style={{ height: "300px", position: "relative" }}>
						<Suspense fallback={<GaleryIndicatorLoading />}>
							<CircularGallery
								bend={3}
								textColor="#000"
								borderRadius={0.05}
								scrollEase={0.02}
							/>
						</Suspense>
					</div>
				</motion.section>

				{/* Kanan - Teks */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
					className="text-justify"
				>
					<TypographyH2>GDGOC UINAM itu Apa sih?</TypographyH2>

					<TypographyAbout>
						Google Developer Groups On Campus UIN Alauddin Makassar adalah komunitas teknologi
						yang mewadahi mahasiswa untuk belajar, berkolaborasi, dan berinovasi di bidang
						pengembangan perangkat lunak, AI, dan inovasi digital.
					</TypographyAbout>

					<TypographyAbout>
						Kami berfokus menciptakan lingkungan belajar yang kolaboratif melalui berbagai
						kegiatan seperti workshop, seminar, dan hackathon, agar mahasiswa siap menghadapi
						tantangan dunia teknologi.
					</TypographyAbout>
				</motion.section>
			</div>

			{/* ScrollVelocity - Animasi tambahan */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
			>
				<ScrollVelocity
					texts={["Empowering Tech", "Shaping the Future"]}
					velocity={120}
					className="custom-scroll-text"
				/>
			</motion.div>
		</main>
	);
};

export default AboutPage;
