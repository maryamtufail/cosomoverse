import { footer_content } from "@/utils/contentUtils";
import { slideIn } from "@/utils/motionUtils";
import { FooterComponent } from "@/utils/typesUtils";
import { motion } from "framer-motion"
import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-screen-xl mx-auto shadow-md bg-bgBlack relative z-10 select-none pb-36 font-dm">
      <nav className="grid grid-cols-2 justify:center gap-10 m-auto sm:grid-cols-3 lg:w-full w-fit lg:flex lg:gap-5 lg:justify-between py-6 sm:py-8 md:py:16 lg:py-16 px-8 md:px-16 lg:px-14 xl:px-10 2xl:px-0 tracking-[0.01em]">
        {
          footer_content &&
          footer_content.map(({ subject }) => (
            <FooterComponents link={"#"} key={subject.title} title={subject.title} subtitles={subject.subtitles} />
          ))
        }
      </nav>
    </footer>
  );
}

function FooterComponents({ title, subtitles, link }: FooterComponent) {
  return (
    <div className="justify-center" key={title}>
      <div className="items-center text-xl md:text-2xl pb-10 font-medium" key={title}>{title}</div>
      {subtitles.map((subtitle) => (
        <motion.a
          whileHover={{ translateX: 10 }}
          transition={{ type: "spring", stiffness: 200 }}
          href={link}
          className="flex text-base md:text-lg opacity-50 font-normal pb-4 hover:underline cursor-pointer tracking-[0.01em]"
          key={subtitle}
        >
          {subtitle}
        </motion.a>
      ))}
    </div>
  );
}