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

import capa from "../assets/lotus/capalotus.png";

import project1 from "../assets/lotus/1.png";
import project2 from "../assets/lotus/2.png";
import project3 from "../assets/lotus/3.png";
import project4 from "../assets/lotus/4.png";
import project5 from "../assets/lotus/5.png";
import project6 from "../assets/lotus/6.png";
import project7 from "../assets/lotus/7.png";

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
];

const ProjectModalLotus = () => {
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
            Lotus E-commerce
          </Heading>
        </div>
        <Image
          src={capa}
          alt="Lotus"
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
            {/*  <Image src={Lotus} w="100px" /> */}
            Lotus
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="mb-8 space-y-5">
              <p className="text-justify">
                Lotus é um e-commerce de calçados com interface minimalista e
                marcante. Por enquanto, desenvolvi apenas a home para testar
                algumas funções no Figma, como é o caso do Smart animate nos
                cards de produtos.
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
                  href="https://www.figma.com/proto/EU6JAGJnAS8MQUOgRct1LR/Untitled?node-id=1%3A45&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A45"
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

export default ProjectModalLotus;
