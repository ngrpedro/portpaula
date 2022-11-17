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
import project1 from "../assets/bettermark/Page 1.png";
import project2 from "../assets/bettermark/Page 2.png";
import project3 from "../assets/bettermark/Page 3.png";
import project4 from "../assets/bettermark/Page 4.png";
import project5 from "../assets/bettermark/Page 5.png";
import project6 from "../assets/bettermark/Page 6.png";

import mob1 from "../assets/bettermark/Page 01.png";
import mob2 from "../assets/bettermark/Page 02.png";
import mob3 from "../assets/bettermark/Page 03.png";
import mob4 from "../assets/bettermark/Page 04.png";
import mob5 from "../assets/bettermark/Page 05.png";
import mob6 from "../assets/bettermark/Page 06.png";
import mob7 from "../assets/bettermark/Page 07.png";

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
    original: project5,
    thumbnail: project5,
  },
  {
    original: project6,
    thumbnail: project6,
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
  {
    original: mob6,
    thumbnail: mob6,
  },
  {
    original: mob7,
    thumbnail: mob7,
  },
];

const ProjectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        cursor={"pointer"}
        boxSize="xl"
        m="auto"
        onClick={onOpen}
        className="max-h-[380px] group"
        direction={"column"}
        gap="3"
      >
        <div>
          <Heading fontSize={"xl"} mt="2">
            Better Marketing
          </Heading>
        </div>
        <Image
          src={bettmarq}
          alt="Dan Abramov"
          className="group-hover:opacity-80"
        />
      </Flex>

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
                  as="a"
                  href="https://www.bettermarketing.com.au/"
                  target={"_blank"}
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
                  className="hover:scale-105"
                  _active={{
                    bg: "transparent",
                    borderColor: "#F56334",
                    color: "#F56334",
                  }}
                >
                  Acessar o site
                </Button>

                <Button
                  as="a"
                  href="https://www.figma.com/proto/LtnltfD7aYKWMBZzCMjUle/Better-marketing?node-id=23%3A58&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=167%3A215"
                  target={"_blank"}
                  m="auto"
                  leftIcon={<FigmaLogo size={28} />}
                  variant="outline"
                  rounded="full"
                  bg="transparent"
                  border="2px"
                  borderColor={"#098551"}
                  className="hover:scale-105"
                  color={"#098551"}
                  _hover={{
                    bg: "transparent",
                    borderColor: "#098551",
                    color: "#098551",
                  }}
                  _active={{
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
