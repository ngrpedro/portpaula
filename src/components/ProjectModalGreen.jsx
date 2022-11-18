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

import logo from "../assets/green/green_logo.png";
import mockup from "../assets/green/Green_mockup.png";
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
        maxWidth={["20rem", "30rem", "40rem"]}
        maxHeight={["20rem", "30rem", "28rem"]}
      >
        <div>
          <Heading fontSize={"xl"} mt="2">
            Green
          </Heading>
        </div>
        <Image
          src={mockup}
          alt="Dan Abramov"
          className="group-hover:opacity-80"
          maxWidth={["20rem", "30rem", "40rem"]}
          maxHeight={["20rem", "30rem", "40rem"]}
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
                Desenvolvi a interface do website Green para testar algumas
                funcionalidades no Figma, como o efeito BLUR na barra de
                navegação fixa. Embora fictício, o portal Green tem uma
                estrutura minimalista e sofisticada.
              </p>
              <Flex gap="5">
                <Button
                  as="a"
                  href="https://www.figma.com/proto/amq6nMBxQjMZDBjpu8pCxL/Green-site?node-id=106%3A247&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=106%3A247&show-proto-sidebar=1"
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
