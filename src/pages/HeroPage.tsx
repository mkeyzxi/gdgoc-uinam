
import CardNav from '@/components/CardNav';
// import './HeroPage.css'
// import { Button } from './components/ui/button'
// import CardNav from './CardNav'
// import CardNav from './components/CardNav';

import logo from '../assets/icon-GDG.svg'
import { TypographyH1 } from '@/components/ui/typographyh1';
import { TypographyHeading } from '@/components/ui/typography-heading';
import { ButtonOutline } from '@/components/ui/buttonoutline';
function HeroPage() {
	const items = [
		{
			label: "About",
			bgColor: "#0D0716",
			textColor: "#fff",
			links: [
				{ label: "Company", href: "/about/company", ariaLabel: "About Company" },
				{ label: "Careers", href: "/about/careers", ariaLabel: "About Careers" }
			]
		},
		{
			label: "Projects",
			bgColor: "#170D27",
			textColor: "#fff",
			links: [
				{ label: "Featured", href: "/projects/featured", ariaLabel: "Featured Projects" },
				{ label: "Case Studies", href: "/projects/case-studies", ariaLabel: "Project Case Studies" }
			]
		},
		{
			label: "Contact",
			bgColor: "#271E37",
			textColor: "#fff",
			links: [
				{ label: "Email", href: "mailto:hello@example.com", ariaLabel: "Email us" },
				{ label: "Twitter", href: "https://twitter.com/yourhandle", ariaLabel: "Twitter" },
				{ label: "LinkedIn", href: "https://www.linkedin.com/in/yourprofile", ariaLabel: "LinkedIn" }
			]
		}
	];

	return (

		<main className=" mx-auto flex min-h-screen flex-col items-center justify-center p-4 gap-1 w-full">
			<CardNav
				logo={logo}
				logoAlt="Company Logo"
				items={items}
				baseColor="#fff"
				menuColor="#000"
				buttonBgColor="#111"
				buttonTextColor="#fff"
				ease="power3.out"
				className='fixed top-0'
			/>
			<TypographyH1 />
			<TypographyHeading >  Komunitas Developer Masa Depan di UIN Alauddin Makassar. Tingkatkan skill, perluas jaringan, dan mulai berkontribusi bagi sekitarmu.</TypographyHeading>
			<ButtonOutline />
		</main>

	)
}

export default HeroPage;
