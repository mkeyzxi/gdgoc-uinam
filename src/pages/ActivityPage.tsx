import React from "react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion"
import { Calendar, Users, Laptop, Lightbulb } from "lucide-react";

const ActivitiesPage: React.FC = () => {
	const activities = [
		{
			title: "Workshop Teknologi",
			icon: <Laptop className="w-8 h-8 text-blue-500" />,
			desc: "Pelatihan langsung bagi mahasiswa untuk belajar teknologi terkini seperti web, mobile, dan cloud menggunakan ekosistem Google Developer.",
			color: "from-blue-100 to-blue-50",
		},
		{
			title: "Seminar & Tech Talk",
			icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
			desc: "Sesi berbagi bersama para ahli industri dan developer berpengalaman membahas tren AI, startup, dan inovasi digital.",
			color: "from-yellow-100 to-yellow-50",
		},
		{
			title: "Hackathon & Challenge",
			icon: <Users className="w-8 h-8 text-green-500" />,
			desc: "Kompetisi pengembangan proyek inovatif untuk melatih kolaborasi, pemecahan masalah, dan kreativitas mahasiswa.",
			color: "from-green-100 to-green-50",
		},
	];

	return (
		<div className="min-h-screen bg-white text-gray-800 pt-28 pb-20">
			{/* Header Section */}
			<section className="text-center mb-14">
				<motion.h1
					className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
					{...({
						initial: { opacity: 0, y: -20 },
						animate: { opacity: 1, y: 0 },
						transition: { duration: 0.6 },
					} as MotionProps)}
				>
					Kegiatan GDGOC UINAM
				</motion.h1>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					Ikuti berbagai sesi pembelajaran, workshop, seminar, dan hackathon yang diadakan oleh
					<span className="text-blue-500 font-medium"> GDG On Campus UIN Alauddin Makassar</span>.
					Tingkatkan kemampuanmu dan berjejaring dengan komunitas developer lainnya!
				</p>
			</section>

			{/* Activities Cards */}
			<section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
				{activities.map((act, i) => (
					<motion.div
						key={i}
						{...({
							initial: { opacity: 0, y: 40 },
							whileInView: { opacity: 1, y: 0 },
							transition: { delay: i * 0.2, duration: 0.6 },
							viewport: { once: true },
						} as MotionProps)}
						className={`rounded-2xl shadow-md bg-gradient-to-br ${act.color} p-8 flex flex-col items-start justify-start hover:shadow-lg transition-all`}
					>
						<div className="mb-4">{act.icon}</div>
						<h2 className="text-xl font-semibold mb-2">{act.title}</h2>
						<p className="text-gray-700 leading-relaxed">{act.desc}</p>
					</motion.div>
				))}
			</section>

			{/* Join CTA */}
			<section className="text-center mt-20">
				<motion.div
					{...({
						initial: { opacity: 0 },
						whileInView: { opacity: 1 },
						transition: { duration: 0.8 },
						viewport: { once: true },
					} as MotionProps)}
				>
					<h2 className="text-2xl font-semibold text-gray-900 mb-4">
						Siap Bergabung dalam Kegiatan Selanjutnya?
					</h2>
					<p className="text-gray-600 mb-6">
						Temukan jadwal acara terbaru GDGOC UINAM dan jadilah bagian dari komunitas developer masa depan!
					</p>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
					>
						<Calendar className="w-5 h-5" /> Lihat Jadwal Kegiatan
					</a>
				</motion.div>
			</section>
		</div>
	);
};

export default ActivitiesPage;
