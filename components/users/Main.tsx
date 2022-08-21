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
import axios from "axios";

type User = {
    _id: string;
    fullname: string;
    email: string;
    verified: boolean;
    disabled: boolean;
    posts: string[];
};

interface Users {
    users: User[];
}

const Main = ({ users }: Users) => {
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
                    <Text fontSize="xl">All users</Text>
                    <Spacer />
                </Flex>
                <Flex alignItems="center" bg="white" p={5}>
                    <Text flex={4}>Full Name</Text>
                    <Text flex={3}>Email</Text>
                    <Text flex={2}>Verified</Text>
                    <Text flex={2}>Disabled</Text>
                    <Text flex={1}>Posts</Text>
                    <Spacer flex={0.6} />
                </Flex>
                {users.map(
                    ({ fullname, email, verified, disabled, posts, _id }) => {
                        const handleDisable = (e: {
                            preventDefault: () => void;
                        }) => {
                            e.preventDefault();
                            console.log(_id);

                            const options = {
                                method: "PUT",
                                url: "http://localhost:3000/api/controllers/user/update",
                                params: { id: _id },
                                data: { disabled: true, myid: _id },
                            };

                            axios
                                .request(options)
                                .then(function (response) {
                                    console.log(response.data);
                                })
                                .catch(function (error) {
                                    console.error(error);
                                });
                        };

                        return (
                            <Flex
                                key={_id}
                                alignItems="center"
                                bg="white"
                                p={5}
                            >
                                <Text flex={4}>{fullname}</Text>
                                <Text flex={3}>{email}</Text>
                                <Text flex={2}>
                                    {verified ? "True" : "False"}
                                </Text>
                                <Text flex={2}>
                                    {disabled ? "True" : "False"}
                                </Text>
                                <Text flex={1}>{posts.length}</Text>
                                <Menu>
                                    <MenuButton
                                        flex={0.1}
                                        bg="transparent"
                                        as={MoreVertRounded}
                                    />
                                    <MenuList>
                                        <MenuItem color="#16a34a">
                                            Reactivate
                                        </MenuItem>
                                        <MenuItem onClick={handleDisable}>
                                            Disable
                                        </MenuItem>
                                        <MenuItem color="#b91c1c">
                                            Delete
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        );
                    }
                )}
            </Flex>
        </Box>
    );
};

export default Main;
