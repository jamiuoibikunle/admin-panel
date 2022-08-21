import React from "react";
import {
    Box,
    Center,
    Flex,
    Spacer,
    Text,
    Image as ChakraImage,
} from "@chakra-ui/react";

const Main = () => {
    return (
        <Box bg="#f5f5f5" p={6}>
            <Flex w="100%">
                <Spacer />
                <Flex alignItems="center" gap={4}>
                    <Text>Jamiu Ibikunle</Text>
                    <ChakraImage src="/avatar.png" boxSize="25px" />
                </Flex>
            </Flex>
            <Center h='30vh' fontSize="xl">
                Coming shortly
            </Center>
        </Box>
    );
};

export default Main;
