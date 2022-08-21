import React from "react";
import {
    Grid,
    GridItem,
    Box,
    Center,
    Flex,
    Spacer,
    Text,
    Image as ChakraImage,
} from "@chakra-ui/react";

const fakedata = [
    {
        name: "Users",
        value: "60",
    },
    {
        name: "Featured",
        value: "10",
    },
    {
        name: "Articles",
        value: "50",
    },
    {
        name: "Newsletter",
        value: "4",
    },
];

const Main = () => {
    return (
        <Box bg="#f5f5f5" p={6}>
            <Flex w="100%">
                <Box>Overview</Box>
                <Spacer />
                <Flex alignItems="center" gap={4}>
                    <Text>Jamiu Ibikunle</Text>
                    <ChakraImage src="/avatar.png" boxSize="25px" />
                </Flex>
            </Flex>
            <Grid templateColumns="repeat(4, 1fr)" gap={7} my={10}>
                {fakedata.map((data, index) => {
                    return (
                        <GridItem
                            key={index}
                            py={3}
                            colSpan={1}
                            bg="white"
                            border="1px"
                            borderColor="transparent"
                            borderRadius={5}
                            transition=".5s"
                            _hover={{
                                borderColor: "#a3a3a3",
                                transition: ".5s",
                            }}
                        >
                            <Center>
                                <Text color="#737373">{data.name}</Text>
                            </Center>
                            <Center>
                                <Text fontSize={40}>{data.value}</Text>
                            </Center>
                        </GridItem>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default Main;
