import { IdentificationBadge, LinkedinLogo } from "phosphor-react";
import { Image, Box } from "@chakra-ui/react";
import { useState } from "react";
import bettmarq from "./assets/BetterMarketing.png";
import Green from "./assets/Green.png";
import ProjectModal from "./components/ProjectModal";
import ProjectModalGreen from "./components/ProjectModalGreen";

function App() {
  return (
    <div>
      <div className="w-full p-4 md:px-8 flex items-center justify-between">
        <h1>UI/UX Designer</h1>
        <h1>Paula Santos</h1>
      </div>

      <div className="p-4 md:px-8 flex items-center justify-start gap-6">
        <div className="w-24 h-24 bg-gray-400 rounded-lg"></div>
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="flex items-center justify-start p-2 rounded-md border border-[#e0691a] text-[#e0691a] text-xs"
          >
            <LinkedinLogo size={22} />
            Linkedin
          </a>

          <a
            href="#"
            className="flex items-center justify-start p-2 rounded-md border border-[#e0691a] text-[#e0691a] text-xs"
          >
            <IdentificationBadge size={22} />
            Currículo
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

      <div className="flex flex-col md:flex-row p-4 md:px-8 gap-8 items-center justify-center mb-20">
        <ProjectModal />

        <ProjectModalGreen />
      </div>
    </div>
  );
}

export default App;
