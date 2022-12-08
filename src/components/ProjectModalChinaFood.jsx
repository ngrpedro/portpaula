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

import capa from "../assets/chinaFood/chinafood.png";
import project1 from "../assets/chinaFood/1.png";
import project2 from "../assets/chinaFood/2.png";
import project3 from "../assets/chinaFood/3.png";
import project4 from "../assets/chinaFood/4.png";
import project5 from "../assets/chinaFood/5.png";
import project6 from "../assets/chinaFood/6.png";
import project7 from "../assets/chinaFood/7.png";
import project8 from "../assets/chinaFood/8.png";
import project9 from "../assets/chinaFood/9.png";
import project10 from "../assets/chinaFood/10.png";
import project11 from "../assets/chinaFood/11.png";
import project12 from "../assets/chinaFood/12.png";
import project13 from "../assets/chinaFood/13.png";
import project14 from "../assets/chinaFood/14.png";
import project15 from "../assets/chinaFood/15.png";
import project16 from "../assets/chinaFood/16.png";
import project17 from "../assets/chinaFood/17.png";
import project18 from "../assets/chinaFood/18.png";
import project19 from "../assets/chinaFood/19.png";
import project20 from "../assets/chinaFood/20.png";
import project21 from "../assets/chinaFood/21.png";
import project22 from "../assets/chinaFood/22.png";
import project23 from "../assets/chinaFood/23.png";

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
  {
    original: project12,
    thumbnail: project12,
  },
  {
    original: project13,
    thumbnail: project13,
  },
  {
    original: project14,
    thumbnail: project14,
  },
  {
    original: project15,
    thumbnail: project15,
  },
  {
    original: project16,
    thumbnail: project16,
  },
  {
    original: project17,
    thumbnail: project17,
  },
  {
    original: project18,
    thumbnail: project18,
  },
  {
    original: project19,
    thumbnail: project19,
  },
  {
    original: project20,
    thumbnail: project20,
  },
  {
    original: project21,
    thumbnail: project21,
  },
  {
    original: project22,
    thumbnail: project22,
  },
  {
    original: project23,
    thumbnail: project23,
  },
];

const ProjectModalChinaFood = () => {
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
            China Food
          </Heading>
        </div>
        <Image
          src={capa}
          alt="ChinaFood"
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
            China Food
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="mb-8 space-y-5">
              <p className="text-justify">
                Chinafood é um app de comida chinesa delivery pensado para
                oferecer uma boa experiência para o usuário, simplificando sua
                tomada de decisões. Interface desenvolvida em Adobe XD.
              </p>
              <Flex gap="5" flexWrap={"wrap"}>
                <Button
                  as="a"
                  href="https://xd.adobe.com/view/467e8714-5ae6-47ee-875c-454435977fad-132d/ "
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

export default ProjectModalChinaFood;
