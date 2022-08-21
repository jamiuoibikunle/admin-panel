import axios from "axios";
import Head from "next/head";
import React from "react";
import Main from "../../components/users/Main";

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

const index = ({ users }: Users) => {
    return (
        <div>
            <Head>
                <title>Users</title>
            </Head>
            <Main users={users} />
        </div>
    );
};

export async function getServerSideProps() {
    let users;
    const options = {
        method: "GET",
        url: "http://localhost:3000/api/controllers/user/get",
    };

    await axios
        .request(options)
        .then(({ data }) => {
            users = data;
        })
        .catch((err) => {
            console.error(err);
        });

    return {
        props: {
            users,
        },
    };
}

export default index;
