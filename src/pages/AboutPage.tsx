import { TypographyH2 } from "@/components/ui/typographyh2";
import { TypographyAbout } from "@/components/ui/typography-about";
import CircularGallery from "@/components/CircularGallery";
// import CircularGallery from './CircularGallery'
const AboutPage = () => {
	return (
		<main className="container grid grid-cols-1 md:grid-cols-2 gap-5 ">
			{/* Section ini akan menjadi parent dan mengambil 1 kolom (penuh) atau 1/2 kolom (md) */}
			<section className="">
				{/* Tambahkan kelas 'w-full' pada img untuk memastikan lebar gambar 100% 
					dari parent-nya. Hapus atribut 'width="100%"' yang merupakan atribut HTML
					dan ganti dengan kelas Tailwind CSS 'w-full' untuk konsistensi.
				*/}
				{/* <img 
					src="https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560,y_0.0_mul_h_sub_0.0_mul_640/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/event_banners/GDG_Bevy_DefaultEventBanner_9M7vWqs.png" 
					alt="Sharing Session bersama cores team GDG-OC UINAM" 
					className="w-full h-auto object-cover rounded-lg shadow-lg" // Tambahkan 'w-full'
				/> */}


				<div style={{ height: '300px', position: 'relative' }}>
					<CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
				</div>
			</section>
			<section>
				<TypographyH2>GDGOC UINAM itu Apa sih?</TypographyH2>

				<TypographyAbout>
					Google Developer Groups On Campus UIN Alauddin Makassar adalah komunitas teknologi yang mewadahi mahasiswa untuk belajar, berkolaborasi, dan berinovasi di bidang pengembangan perangkat lunak, AI, dan inovasi digital.
				</TypographyAbout>

				<TypographyAbout>
					Kami berfokus menciptakan lingkungan belajar yang kolaboratif melalui berbagai kegiatan seperti workshop, seminar, dan hackathon, agar mahasiswa siap menghadapi tantangan dunia teknologi.
				</TypographyAbout>
			</section>
		</main>
	)
}

export default AboutPage;