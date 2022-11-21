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

import capa from "../assets/appturismo/Capa.png";
import LogoBM from "../assets/LogoBM.png";
import project1 from "../assets/appturismo/01.png";
import project2 from "../assets/appturismo/02.png";
import project3 from "../assets/appturismo/03.png";
import project4 from "../assets/appturismo/04.png";
import project5 from "../assets/appturismo/05.png";
import project6 from "../assets/appturismo/06.png";
import project7 from "../assets/appturismo/07.png";
import project8 from "../assets/appturismo/08.png";
import project9 from "../assets/appturismo/09.png";
import project10 from "../assets/appturismo/10.png";
import project11 from "../assets/appturismo/11.png";

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
    original: project7,
    thumbnail: project7,
  },
  {
    original: project8,
    thumbnail: project8,
  },
  {
    original: project9,
    thumbnail: project9,
  },
  {
    original: project10,
    thumbnail: project10,
  },
  {
    original: project11,
    thumbnail: project11,
  },
];

const ProjectModalTurism = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        cursor={"pointer"}
        boxSize="xl"
        m="auto"
        onClick={onOpen}
        className="object-cover overflow-hidden group"
        direction={"column"}
        gap="3"
        maxWidth={["20rem", "30rem", "40rem"]}
        maxHeight={["20rem", "30rem", "28rem"]}
      >
        <div>
          <Heading fontSize={"xl"} mt="2">
            App de turismo
          </Heading>
        </div>
        <Image
          src={capa}
          alt="App de turismo"
          className="group-hover:opacity-80"
          maxWidth={["20rem", "30rem", "40rem"]}
          maxHeight={["20rem", "30rem", "40rem"]}
          objectFit="cover"
        />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size={["xs", "md", "xl"]}>
        <ModalOverlay />
        <ModalContent bg="#2B2B2B" color="white">
          <ModalHeader>
            {/* <Image src={LogoBM} w="100px" /> */}
            App de turismo
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="mb-8 space-y-5">
              <p className="text-justify">
                Que tal um aplicativo de turismo? A ideia foi criar uma
                interface leve e objetiva, que permita visualizar pontos
                turísticos de cidades do mundo todo.
              </p>
              <Flex gap="5" flexWrap={"wrap"}>
                {/* <Button
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
                </Button> */}

                <Button
                  as="a"
                  href="https://www.figma.com/proto/AsxHSa9MXFRthKZdi9jkUw/Explore?node-id=150%3A438&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2"
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

export default ProjectModalTurism;
