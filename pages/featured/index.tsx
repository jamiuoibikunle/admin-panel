import axios from "axios";
import Head from "next/head";
import React from "react";
import Main from "../../components/posts/Main";

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

const index = ({ posts }: Props) => {
    console.log(posts);
    return (
        <div>
            <Head>
                <title>Posts</title>
            </Head>
            <Main posts={posts} />
        </div>
    );
};

export async function getServerSideProps() {
    let posts;
    const options = {
        method: "GET",
        url: "http://localhost:3000/api/controllers/post/get",
    };

    await axios
        .request(options)
        .then(({ data }) => {
            posts = data.filter(
                (each: { featured: boolean }) => each.featured === true
            );
        })
        .catch((err) => {
            console.error(err);
        });

    return {
        props: {
            posts,
        },
    };
}

export default index;
