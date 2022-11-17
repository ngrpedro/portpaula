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
  Flex,
  Heading,
} from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";

import bettmarq from "../assets/BetterMarketing.png";

import logo from "../assets/green/green_logo.png";
import project1 from "../assets/green/page1.png";
import project2 from "../assets/green/page2.png";
import project3 from "../assets/green/page3.png";

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
];

const ProjectModalGreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        cursor={"pointer"}
        boxSize="xl"
        m="auto"
        onClick={onOpen}
        className="max-h-[380px] object-cover overflow-hidden group"
        direction={"column"}
        gap="3"
      >
        <div>
          <Heading fontSize={"xl"} mt="2">
            Green
          </Heading>
        </div>
        <Image
          src={project1}
          alt="Dan Abramov"
          className="group-hover:opacity-80"
        />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="#2B2B2B" color="white">
          <ModalHeader>
            <Image src={logo} w="100px" />
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

export default ProjectModalGreen;
