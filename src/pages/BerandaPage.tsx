import CallToAction from "@/layouts/CallToAction"
import AboutPage from "./AboutPage"
import HeroPage from "./HeroPage"
import LearningPage from "./LearningPage"
import FAQPage from "./FAQPage"
import TeamPages from "./TeamPages"
import Footer from "@/layouts/Footer"

const BerandaPage = () => {
	return (
		<>
			<HeroPage />
			<AboutPage />
			<CallToAction
				judul="Bergabung Bersama GDG On UINAM!"
				subJudul="Jadilah bagian dari komunitas developer masa depan. Temukan inspirasi, pelajari teknologi terbaru, dan bangun proyek nyata bersama sesama mahasiswa UIN Alauddin Makassar."
				link="https://docs.google.com/forms/d/e/1FAIpQLSdux5PgYo46NhLVhtt-y5zPGtz5RxELtDKShAL8YTg4wg9mKA/viewform"
			>Gabung Sekarang</CallToAction>
			<LearningPage />
			<CallToAction
				judul="Lihat Kegiatan & Sesi GDG On UINAM"
				subJudul="Ikuti berbagai sesi pembelajaran, workshop, dan event seru yang diadakan oleh GDG On UINAM. Saatnya kembangkan kemampuanmu dan terhubung dengan komunitas developer lainnya!"
				link="https://gdg.community.dev/gdg-on-campus-uin-alauddin-makassar-makassar-indonesia/?fbclid=PAZXh0bgNhZW0CMTEAAafg8z2j23RgG_GUxCooyzpcE2gF27H6ll7DUhTYaJC1WCsdZjh7Ua3PImI50w_aem_s_8-pI0O2EF_e3_FhAN60A"
			>Lihat Kegiatan</CallToAction>
			<FAQPage />
			<TeamPages />
			{/* <ActivitiesPage /> */}

			<Footer /></>
	)
}

export default BerandaPage;