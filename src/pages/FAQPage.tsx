// import Stack from "@/components/Stack";
import { TypographyH2 } from "@/components/ui/typographyh2";
import IndicatorLoadingStack from "@/layouts/StackIndiactorLoading";
import Question from "@/layouts/Question";
import images from "@/lib/data/faq-images";
import React, { Suspense } from "react";

const Stack = React.lazy(() => import('@/components/Stack'));
// import { useEffect, useState } from "react";
const FAQPage = () => {
  // const [screenSize, setScreenSize] = useState({width:0, height:0});
  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenSize({ width: window.innerWidth, height: window.innerHeight });

  //   }
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-green-50 to-green-100 pl-6 md:px-6 overflow-hidden">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10 container mx-auto max-w-7xl place-items-center">
        {/* Kolom FAQ */}
        <div className="lg:col-span-2 w-full order-2 lg:order-1">
          <TypographyH2
            className="text-center text-3xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </TypographyH2>
          <div className="  transition-shadow duration-300 p-1 md:p-4">
            <Question />
          </div>
        </div>

        {/* Kolom Stack */}
        <div className="order-1 lg:order-2 flex justify-center ">
          <div className="relative scale-95 hover:scale-100 transition-transform duration-500  ">
            <Suspense fallback={<IndicatorLoadingStack />}>
              <Stack
                randomRotation
                sensitivity={180}
                sendToBackOnClick={false}
                // cardDimensions={{ width: screenSize.width * 0.23, height: screenSize.width * 0.36 }}
                cardDimensions={{ width: 250, height: 360 }}
                cardsData={images}
              />
            </Suspense>
            <div className="absolute -z-10 inset-0  blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
