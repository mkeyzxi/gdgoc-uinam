import { Button } from "@/components/ui/button";
import { TypographyAbout } from "@/components/ui/typography-about";
import { TypographyH4 } from "@/components/ui/typographyh4";
import type { ReactNode } from "react";

interface CallToActionProps {
  judul: string;
  subJudul?: string;
  link: string;
  children: ReactNode;
}

const CallToAction = ({ judul, subJudul, link, children }: CallToActionProps) => {
  return (
    <section className="w-full bg-blue-400 text-white flex flex-col justify-center items-center text-center gap-1 py-12 px-6 md:px-10 lg:px-28  mt-5 shadow-lg">
      <TypographyH4 className="text-white ">{judul}</TypographyH4>
      {subJudul && (
        <TypographyAbout>{subJudul}</TypographyAbout>
      )}
      <Button
        variant="secondary"
        className="mt-4 text-base font-semibold px-6 py-2 rounded-full"
        onClick={() => window.open(link, "_blank")}
      >
        {children}
      </Button>
    </section>
  );
};

export default CallToAction;
