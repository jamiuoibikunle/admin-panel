import React from "react";
import {
    Box,
    Flex,
    Spacer,
    Text,
    Image as ChakraImage,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { MoreVertRounded } from "@material-ui/icons";

type Categories = {
    _id: string;
    name: string;
    createdAt: string;
};

interface Props {
    categories: Categories[];
}

const Main = ({ categories }: Props) => {
    return (
        <Box bg="#f5f5f5" p={6}>
            <Flex w="100%">
                <Spacer />
                <Flex alignItems="center" gap={4}>
                    <Text>Jamiu Ibikunle</Text>
                    <ChakraImage src="/avatar.png" boxSize="25px" />
                </Flex>
            </Flex>
            <Flex
                flexDirection="column"
                gap={0.5}
                my={7}
                bg="transparent"
                border="1px"
                borderColor="#e5e5e5"
                borderRadius={5}
                overflow="hidden"
            >
                <Flex p={5} bg="white">
                    <Text fontSize="xl">All categories</Text>
                    <Spacer />
                </Flex>
                <Flex alignItems="center" bg="white" p={5}>
                    <Text flex={1}>Category</Text>
                    <Text flex={1}>Created At</Text>
                    <Spacer flex={0.06} />
                </Flex>
                {categories.map(({ name, createdAt, _id }) => {
                    return (
                        <Flex alignItems="center" bg="white" p={5} key={_id}>
                            <Text flex={1}>{name}</Text>
                            <Text flex={1}>
                                {new Date(createdAt).toDateString()}
                            </Text>
                            <Menu>
                                <MenuButton
                                    flex={0.1}
                                    bg="transparent"
                                    as={MoreVertRounded}
                                />
                                <MenuList>
                                    <MenuItem color="#b91c1c">Delete</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    );
                })}
            </Flex>
        </Box>
    );
};

export default Main;