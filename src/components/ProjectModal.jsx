import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";

import bettmarq from "../assets/BetterMarketing.png";
import LogoBM from "../assets/LogoBM.png";
import project1 from "../assets/project1-1.png";
import project2 from "../assets/project1-2.png";
import project3 from "../assets/project1-3.png";
import project4 from "../assets/project1-4.png";

import mob1 from "../assets/mob1.png";
import mob2 from "../assets/mob2.png";
import mob3 from "../assets/mob3.png";
import mob4 from "../assets/mob4.png";
import mob5 from "../assets/mob5.png";

import { FigmaLogo, GoogleChromeLogo } from "phosphor-react";

const images = [
  {
    original: project1,
    thumbnail: project1,
  },
  {
    original: project2,
    thumbnail: project2,
  },
  {
    original: project3,
    thumbnail: project3,
  },
  {
    original: project4,
    thumbnail: project4,
  },
  {
    original: mob1,
    thumbnail: mob1,
  },
  {
    original: mob2,
    thumbnail: mob2,
  },
  {
    original: mob3,
    thumbnail: mob3,
  },
  {
    original: mob4,
    thumbnail: mob4,
  },
  {
    original: mob5,
    thumbnail: mob5,
  },
];

const ProjectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        cursor={"pointer"}
        boxSize="xl"
        m="auto"
        onClick={onOpen}
        className="group relative max-h-[380px]"
      >
        <div
          className="p-4"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backdropFilter: "blur( 48px )",
            backgroundColor: "transparent",
          }}
        >
          <Heading>Better Marketing</Heading>
        </div>
        <Image src={bettmarq} alt="Dan Abramov" />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="#2B2B2B" color="white">
          <ModalHeader>
            <Image src={LogoBM} w="100px" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="mb-8 space-y-5">
              <p className="text-justify">
                A interface do website institucional Better Marketing foi
                desenvolvida para transmitir credibilidade, profissionalismo e
                solidez - características presentes em todas as estratégias da
                empresa australiana. A cliente dispensou o uso de fotos, então
                utilizamos figuras e ícones para contrastar com a grande
                quantidade de textos.
              </p>
              <Flex gap="5">
                <Button
                  m="auto"
                  leftIcon={<GoogleChromeLogo size={28} />}
                  variant="outline"
                  rounded="full"
                  bg="transparent"
                  border="2px"
                  borderColor={"#F56334"}
                  color={"#F56334"}
                  _hover={{
                    bg: "transparent",
                    borderColor: "#F56334",
                    color: "#F56334",
                  }}
                >
                  Acessar o site
                </Button>

                <Button
                  m="auto"
                  leftIcon={<FigmaLogo size={28} />}
                  variant="outline"
                  rounded="full"
                  bg="transparent"
                  border="2px"
                  borderColor={"#098551"}
                  color={"#098551"}
                  _hover={{
                    bg: "transparent",
                    borderColor: "#098551",
                    color: "#098551",
                  }}
                >
                  Acessar o protótipo
                </Button>
              </Flex>
            </div>

            <ImageGallery items={images} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectModal;
