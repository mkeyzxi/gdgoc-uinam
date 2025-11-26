// src/lib/data/staticItems.ts
import type { CardNavItem } from "@/components/CardNav";

export const ABOUT_CARD: CardNavItem = {
  label: "Tentang",
  bgColor: "#EF4444",
  textColor: "#fff",
  links: [
    { label: "Kenali Kami", href: "#about", ariaLabel: "Tentang GDGOC UINAM" },
    { label: "Tim Kami", href: "#core-team", ariaLabel: "Tim GDGOC UINAM" },
    { label: "Pertanyaan Umum", href: "#faq", ariaLabel: "Pertanyaan Umum GDG ON UINAM" },
  ],
};

export const CONTACT_CARD: CardNavItem = {
  label: "Kontak",
  // bgColor: "#22C55E",
  bgColor: "#eab308",
  textColor: "#fff",
  links: [
    { label: "Email", href: "mailto:gdgocuinam@gmail.com", ariaLabel: "Email GDG ON UINAM" },
    { label: "Instagram", href: "https://www.instagram.com/gdgoc_uinam/", ariaLabel: "Instagram GDG ON UINAM" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/gdgocuinam", ariaLabel: "LinkedIn GDG ON UINAM" },
  ],
};
