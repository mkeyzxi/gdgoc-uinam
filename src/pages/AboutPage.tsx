// import { TypographyH2 } from "@/components/ui/typographyh2";
// import { TypographyAbout } from "@/components/ui/typography-about";
// import ScrollVelocity from "@/components/ScrollVelocity";
// import React, { Suspense } from "react";
// import GaleryIndicatorLoading from "@/layouts/GaleryIndiactorLoading";
// import { motion } from "framer-motion";

// const CircularGallery = React.lazy(() => import('@/components/CircularGallery'));

// const AboutPage = () => {
// 	return (
// 		<main id="about" className="flex flex-col gap-10 md:gap-16 lg:pt-14 ">
// 			{/* Grid utama */}
// 			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-12 lg:px-20">
// 				{/* Kiri - Gallery */}
// 				<motion.section
// 					initial={{ opacity: 0, y: 30 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: true }}
// 					transition={{ duration: 0.8, ease: "easeOut" }}
// 					className=""
// 				>
// 					<div style={{ height: "300px", position: "relative" }}>
// 						<Suspense fallback={<GaleryIndicatorLoading />}>
// 							<CircularGallery
// 								bend={3}
// 								textColor="#000"
// 								borderRadius={0.05}
// 								scrollEase={0.02}
// 							/>
// 						</Suspense>
// 					</div>
// 				</motion.section>

// 				{/* Kanan - Teks */}
// 				<motion.section
// 					initial={{ opacity: 0, y: 30 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: true }}
// 					transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
// 					className="text-justify"
// 				>
// 					<TypographyH2>GDG On UINAM itu Apa sih?</TypographyH2>

// 					<TypographyAbout>
// 						Google Developer Groups On UIN Alauddin Makassar adalah komunitas teknologi
// 						yang mewadahi mahasiswa untuk belajar, berkolaborasi, dan berinovasi di bidang
// 						pengembangan perangkat lunak, AI, dan inovasi digital.
// 					</TypographyAbout>

// 					<TypographyAbout>
// 						Kami berfokus menciptakan lingkungan belajar yang kolaboratif melalui berbagai
// 						kegiatan seperti workshop, seminar, dan hackathon, agar mahasiswa siap menghadapi
// 						tantangan dunia teknologi.
// 					</TypographyAbout>
// 				</motion.section>
// 			</div>

// 			{/* ScrollVelocity - Animasi tambahan */}
// 			<motion.div
// 				initial={{ opacity: 0 }}
// 				whileInView={{ opacity: 1 }}
// 				viewport={{ once: true }}
// 				transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
// 			>
// 				<ScrollVelocity
// 					texts={["Empowering Tech", "Shaping the Future"]}
// 					velocity={30}
// 					className="custom-scroll-text"
// 				/>
// 			</motion.div>
// 		</main>
// 	);
// };

// export default AboutPage;

import { TypographyH2 } from "@/components/ui/typographyh2";
import { TypographyAbout } from "@/components/ui/typography-about";
import ScrollVelocity from "@/components/ScrollVelocity";
import React, { Suspense } from "react";
import GaleryIndicatorLoading from "@/layouts/GaleryIndiactorLoading";
import { motion } from "framer-motion";

const CircularGallery = React.lazy(() => import("@/components/CircularGallery"));

const AboutPage = () => {
  return (
    <main
      id="about"
      className="min-h-screen flex flex-col justify-between pt-20 "
    >
      {/* SECTION UTAMA */}
      <section className="flex-1 flex items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-12 lg:px-20 w-full ">
          
          {/* KIRI - GALLERY */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative h-[320px] md:h-[70vh] "
          >
            <Suspense fallback={<GaleryIndicatorLoading />}>
              <CircularGallery
                bend={0.2}
                textColor="#000"
                borderRadius={0.02}
                scrollEase={0.01}
              />
            </Suspense>
          </motion.section>

          {/* KANAN - TEKS */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center text-justify"
          >
            <TypographyH2>
              GDG On UINAM itu Apa sih?
            </TypographyH2>

            <TypographyAbout>
              Google Developer Groups On UIN Alauddin Makassar adalah komunitas teknologi
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
      </section>

      {/* SCROLL VELOCITY */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="pb-6 mt-10 md:mt-0"
      >
        <ScrollVelocity
          texts={["Empowering Tech", "Shaping the Future"]}
          velocity={30}
          className="custom-scroll-text"
        />
      </motion.div>
    </main>
  );
};

export default AboutPage;
