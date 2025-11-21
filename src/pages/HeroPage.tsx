import CardNav from '@/components/CardNav';
import logo from '../assets/icon-GDG.svg'
import { TypographyH1 } from '@/components/ui/typographyh1';
import { TypographyHeading } from '@/components/ui/typography-heading';
import { ButtonOutline } from '@/components/ui/buttonoutline';

import { useNavItems } from "@/lib/data/items";

function HeroPage() {
  const items = useNavItems(); // 🔥 realtime Firestore + statis

  return (
    <main className="relative px-5 flex pt-52 pb-8 flex-col items-center justify-center w-full z-10 md:h-screen bg-gradient-to-br from-white via-green-400 to-blue-400 overflow-hidden">
      
      <CardNav
        logo={logo}
        logoAlt="GDG ON UIN Alauddin Makassar"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        className="fixed top-0"
      />

      <TypographyH1 />
      <TypographyHeading>
        Komunitas Developer Masa Depan di UIN Alauddin Makassar. Tingkatkan skill, perluas jaringan, dan mulai berkontribusi bagi sekitarmu.
      </TypographyHeading>
      <ButtonOutline />
      
    </main>
  );
}

export default HeroPage;
