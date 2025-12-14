import logo from '../assets/icon-GDG.svg';
import studyJam from '../assets/studyjam.avif';
import event from '../assets/event.avif';
import workshop from '../assets/workshop.avif';
import { useNavItems } from "@/lib/data/items";

import CardSwap, { Card } from "@/components/CardSwap";
import CardNav from "@/components/CardNav";
import { CodeXml, MessagesSquare, Calendar } from "lucide-react";
import { ButtonOutline } from '@/components/ui/buttonoutline';
import TextType from '@/components/TextType';

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
    <>
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
      <main className='w-full overflow-hidden bg-green-100 h-screen flex flex-col md:flex-row justify-evenly items-center px-5 lg:px-20'>
        <section className="md:flex-3 lg:flex-2   flex flex-col gap-1 md:gap-1 py-10 md:py-0 justify-between items-start">
          <TextType
            text={["Learn Together!", "Grow Together!", "Build Together!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <h1 className='scroll-m-20 text-2xl md:text-5xl font-bold tracking-tight first:mt-0'>Google Developer Group <span className=' text-green-500'> On UINAM</span></h1>
          <p className='md:text-xl leading-7 mt-2 md:mt-4 lg:mt-8'>Komunitas developer GDGOC UINAM di UIN Alauddin Makassar yang hadir untuk membantu mahasiswa meningkatkan skill, memperluas jaringan, dan berkonstribusi.</p>
          <ButtonOutline />
        </section>
        <section className="hidden md:flex flex-1 ">

          <div style={{ height: '600px', position: 'relative', right: '-240px', bottom: '-140px' }}>
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
        </section>

      </main>
    </>
  );
}

export default HeroPage;
