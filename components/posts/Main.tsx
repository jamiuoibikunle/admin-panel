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
import { useRouter } from "next/router";

type Posts = {
    _id: string;
    title: string;
    author: { fullname: string };
    categories: string[];
    comments: {}[];
    createdAt: string;
    published: boolean;
};

interface Props {
    posts: Posts[];
}

const Main = ({ posts }: Props) => {
    const router = useRouter();
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
                    <Text fontSize="xl">All posts</Text>
                    <Spacer />
                </Flex>
                <Flex alignItems="center" bg="white" p={5}>
                    <Text flex={5}>Title</Text>
                    <Text flex={3}>Author</Text>
                    <Text flex={3}>Created At</Text>
                    <Text flex={2}>Published</Text>
                    <Spacer flex={0.6} />
                </Flex>
                {posts.map(({ title, author, createdAt, published, _id }) => {
                    return (
                        <Flex alignItems="center" bg="white" p={5} key={_id}>
                            <Text flex={5}>{title}</Text>
                            <Text flex={3}>{author.fullname}</Text>
                            <Text flex={3}>
                                {new Date(createdAt).toDateString()}
                            </Text>
                            <Text flex={2}>{published ? "True" : "False"}</Text>
                            <Menu>
                                <MenuButton
                                    flex={0.1}
                                    bg="transparent"
                                    as={MoreVertRounded}
                                />
                                <MenuList>
                                    {router.asPath === "/posts" && (
                                        <MenuItem color="#16a34a">
                                            Feature
                                        </MenuItem>
                                    )}
                                    {router.asPath === "/featured" && (
                                        <MenuItem color="#16a34a">
                                            Unfeature
                                        </MenuItem>
                                    )}
                                    <MenuItem>Unpublish</MenuItem>
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
