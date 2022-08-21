import {
    Box,
    Center,
    Flex,
    Grid,
    GridItem,
    Link as ChakraLink,
} from "@chakra-ui/react";
import {
    BookmarksRounded,
    CategoryRounded,
    DashboardRounded,
    MailRounded,
    PersonRounded,
    StarRounded,
} from "@material-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
    {
        name: "Dashboard",
        link: "/dashboard",
        icon: <DashboardRounded fontSize="small" />,
    },
    {
        name: "Users",
        link: "/users",
        icon: <PersonRounded fontSize="small" />,
    },
    {
        name: "Posts",
        link: "/posts",
        icon: <BookmarksRounded fontSize="small" />,
    },
    {
        name: "Featured",
        link: "/featured",
        icon: <StarRounded fontSize="small" />,
    },
    {
        name: "Category",
        link: "/category",
        icon: <CategoryRounded fontSize="small" />,
    },
    {
        name: "Newsletter",
        link: "/newsletter",
        icon: <MailRounded fontSize="small" />,
    },
];

export const Layout = ({ children }: any) => {
    const router = useRouter();
    return (
        <Grid
            h="100vh"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(6, 1fr)"
        >
            <GridItem rowSpan={1} colSpan={1} bg="#44403c">
                <Box color="#d4d4d4" my={6}>
                    <Center>Admin Dashboard</Center>
                </Box>
                <Box my={10}>
                    {links.map(({ name, link, icon }, index) => {
                        return (
                            <Flex
                                color="#a3a3a3"
                                alignItems="center"
                                mx={2}
                                key={index}
                            >
                                <ChakraLink as={Link} href={link}>
                                    <Flex
                                        bg={
                                            router.asPath === link
                                                ? "#57534e"
                                                : "transparent"
                                        }
                                        color={
                                            router.asPath === link
                                                ? "#f5f5f5"
                                                : ""
                                        }
                                        alignItems="center"
                                        gap={3}
                                        py="3"
                                        w="100%"
                                        pl="15%"
                                    >
                                        {icon} {name}
                                    </Flex>
                                </ChakraLink>
                            </Flex>
                        );
                    })}
                </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={5} bg="#f5f5f5" p={6}>
                {children}
            </GridItem>
        </Grid>
    );
};
