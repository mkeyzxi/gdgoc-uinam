
import CardNav from '@/components/CardNav';
// import './HeroPage.css'
// import { Button } from './components/ui/button'
// import CardNav from './CardNav'
// import CardNav from './components/CardNav';


import logo from '../assets/icon-GDG.svg'
import { TypographyH1 } from '@/components/ui/typographyh1';
import { TypographyHeading } from '@/components/ui/typography-heading';
import { ButtonOutline } from '@/components/ui/buttonoutline';

import items from '@/lib/data/items';

function HeroPage() {
	

	return (

		<main className=" px-5 flex mt-52 flex-col items-center justify-center *:gap-1 w-full z-10 md:h-screen md:mt-0">
			<CardNav
				logo={logo}
				logoAlt="GDGOC UIN Alauddin Makassar"
				items={items}
				baseColor="#fff"
				menuColor="#000"
				buttonBgColor="#111"
				buttonTextColor="#fff"
				ease="power3.out"
				className='fixed top-0 '
			/>
			<TypographyH1 />
			<TypographyHeading >  Komunitas Developer Masa Depan di UIN Alauddin Makassar. Tingkatkan skill, perluas jaringan, dan mulai berkontribusi bagi sekitarmu.</TypographyHeading>
			<ButtonOutline />
			
		</main>

	)
}

export default HeroPage;
