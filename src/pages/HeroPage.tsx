import logo from '../assets/icon-GDG.svg';
import studyJam from '../assets/studyjam.avif';
import event from '../assets/event.avif';
import workshop from '../assets/workshop.avif';
import { useNavItems } from "@/lib/data/items";
import { TypographyH1 } from "@/components/ui/typographyh1";
import { TypographyHeading } from "@/components/ui/typography-heading";
import CardSwap, { Card } from "@/components/CardSwap";
import CardNav from "@/components/CardNav";
import { CodeXml, MessagesSquare, Calendar } from "lucide-react";
import { ButtonOutline } from '@/components/ui/buttonoutline';

function HeroPage() {
  const items = useNavItems();

  const bgStudyJam = {
    backgroundImage: `url(${studyJam})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const bgWorkshop = {
    backgroundImage: `url(${workshop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const bgEvent = {
    backgroundImage: `url(${event})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section
      className="
        relative
        w-full bg-green-100 overflow-hidden
        px-6 py-10
        md:px-12 md:py-18
        lg:p-22
        flex flex-col 
        lg:flex-row 
        justify-start 
        sm:justify-center
        items-center
        min-h-screen
      "
    >


      <div className="flex flex-col gap-6 w-full lg:w-1/1 mt-20 md:mt-24 lg:mt-0">
        <CardNav
          logo={logo}
          logoAlt="GDG ON UIN Alauddin Makassar"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
          className="fixed top-0 left-0"
        />

        <TypographyH1 />

        <div className="md:hidden">
          <TypographyHeading>
            Komunitas Developer Masa Depan di UIN Alauddin Makassar.
            Tingkatkan skill, perluas jaringan, dan mulai berkontribusi bagi sekitarmu.
          </TypographyHeading>
        </div>
        <div className="hidden md:block"><TypographyHeading>
          Komunitas developer GDGOC UINAM di UIN Alauddin Makassar yang hadir untuk membantu mahasiswa meningkatkan skill teknologi, memperluas jaringan, dan berkontribusi lewat berbagai program pembelajaran modern.
        </TypographyHeading></div>

        <ButtonOutline />
      </div>


      <div
        className="
          absolute 
          -bottom-50 -right-16
          sm:bottom-6 sm:right-6
          md:-bottom-18 md:right-22
          lg:bottom-26 lg:right-38
          xl:bottom-20 xl:right-38
        "
      >
        <div style={{ height: '360px', width: '280px' }} className="sm:w-[320px] md:w-[360px] lg:w-[420px]">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <h3 className="flex gap-1 p-2">
                <CodeXml className="bg-red-400 rounded-full p-1" />
                Study Jam
              </h3>
              <div
                className="w-full h-full overflow-hidden rounded-md"
                style={bgStudyJam}
              ></div>
            </Card>

            <Card>
              <h3 className="flex gap-1 p-2">
                <MessagesSquare className="bg-yellow-400 rounded-full p-1" />
                Workshop
              </h3>
              <div
                className="w-full h-full overflow-hidden rounded-md"
                style={bgWorkshop}
              ></div>
            </Card>

            <Card>
              <h3 className="flex gap-1 p-2">
                <Calendar className="bg-blue-400 rounded-full p-1" />
                Event
              </h3>
              <div
                className="w-full h-full overflow-hidden rounded-md"
                style={bgEvent}
              ></div>
            </Card>
          </CardSwap>
        </div>
      </div>

    </section>
  );
}

export default HeroPage;
