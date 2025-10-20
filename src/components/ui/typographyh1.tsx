// export function TypographyH1() {
//   return (
//     <h1 className="scroll-m-20   sm:text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance lg:max-w-4xl">
//       GOOGLE DEVELOPER GROUP ON CAMPUS UINAM
//     </h1>
//   )
// }

import { motion } from "framer-motion";

export function TypographyH1() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}     // posisi awal (belum tampil)
      animate={{ opacity: 1, y: 0 }}      // posisi saat tampil
      transition={{ duration: 0.8, ease: "easeOut" }} // animasi halus
      className="scroll-m-20 sm:text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance lg:max-w-4xl"
    >
      GOOGLE DEVELOPER GROUP ON UINAM
    </motion.h1>
  );
}
