import {
  Envelope,
  FilePdf,
  IdentificationBadge,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";
import { Image, Box } from "@chakra-ui/react";
import { useState } from "react";
import bettmarq from "./assets/BetterMarketing.png";
import Green from "./assets/Green.png";
import ProjectModal from "./components/ProjectModal";
import ProjectModalGreen from "./components/ProjectModalGreen";
import ProjectModalLotus from "./components/ProjectModalLotus";

import pdf1 from "./assets/pdf/Curriculo_PaulaSantos.pdf";

import paulinha from "./assets/paulinha.jpg";
import ProjectModalTurism from "./components/ProjectModalTurism";

function App() {
  return (
    <div>
      <div className="w-full p-4 md:px-8 flex items-center justify-between shadow-md mb-5">
        <h1>UI/UX Designer</h1>
        <h1>Paula Santos</h1>
      </div>

      <div className="p-4 md:px-8 flex items-center justify-start gap-2 sm:gap-6">
        <div className="w-24 h-24 bg-gray-400 rounded-lg">
          <Image
            boxSize={"96px"}
            objectFit="cover"
            rounded={"lg"}
            src={paulinha}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <a
            href="https://www.linkedin.com/in/eusoupare/"
            target={"_blank"}
            className="flex items-center justify-start p-2 rounded-md border border-[#0d1581] text-[#0d1581] text-xs hover:bg-[#eaecff] transition-colors"
          >
            <LinkedinLogo size={22} />
            Linkedin
          </a>
          <a
            href="https://wa.me/5518981240573?text=Ol%C3%A1%2C%20Paula.%20Tudo%20bem%3F%20%0A%0AVim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio.%20Vamos%20conversar%3F%20%F0%9F%98%80"
            target={"_blank"}
            className="flex items-center justify-center p-2 rounded-md border border-[#199115] text-[#199115] text-xs gap-1 hover:bg-[#e6ffe6] transition-colors"
          >
            <WhatsappLogo size={22} />
            Whatsapp
          </a>

          <a
            href={pdf1}
            target="_blank"
            className="flex items-center justify-start p-2 rounded-md border border-[#e0691a] text-[#e0691a] text-xs gap-1 hover:bg-[#fcf3ed] transition-colors"
          >
            <FilePdf size={22} />
            Currículo
          </a>

          <a
            href="mailto: pare.santos@icloud.com"
            target={"_blank"}
            className="flex items-center justify-start p-2 rounded-md border border-[#d21212] text-[#d21212] text-xs gap-1 hover:bg-[#ffeaea] transition-colors"
          >
            <Envelope size={22} />
            Email
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:px-8 gap-8">
        <div className="space-y-4">
          <h1 className="font-bold text-xl">Olá, eu sou a Paula!</h1>
          <p>
            Sou jornalista por formação e estou em transição de carreira para o
            Design de Interface (UI) com foco na Experiência do usuário (UX).
            <span>
              {" "}
              Aqui, a busca pelo aprendizado é constante. Vamos conversar?
            </span>
          </p>
          <br />
          <span>
            <strong>Portfólio em construção </strong>
            <br />
            Veja alguns projetos:
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="font-bold text-xl">Hi, I’m Paula!</h1>
          <p>
            I'm a journalist and I'm transitioning to Interface Design (UI) with
            a focus on User Experience (UX). Here, learning is always welcome.
            Let’s talk?{" "}
          </p>
        </div>
      </div>

      <Box
        className="grid grid-cols-1 lg:grid-cols-2 p-4 md:px-8 gap-8 items-center justify-center "
        maxHeight={["36rem", "47rem", "56rem"]}
      >
        <ProjectModalTurism />
        <ProjectModalLotus />
        {/*   <ProjectModal />
        <ProjectModalGreen /> */}
      </Box>
    </div>
  );
}

export default App;
