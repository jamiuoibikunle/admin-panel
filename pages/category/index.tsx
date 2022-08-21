import axios from "axios";
import Head from "next/head";
import React from "react";
import Main from "../../components/category/Main";

type Categories = {
    _id: string;
    name: string;
    createdAt: string;
};

interface Props {
    categories: Categories[];
}

const index = ({ categories }: Props) => {
    console.log(categories);
    return (
        <div>
            <Head>
                <title>Category</title>
            </Head>
            <Main categories={categories} />
        </div>
    );
};

export async function getServerSideProps() {
    let categories;
    const options = {
        method: "GET",
        url: "http://localhost:3000/api/controllers/category/get",
    };

    await axios
        .request(options)
        .then(({ data }) => {
            categories = data;
        })
        .catch((err) => {
            console.error(err);
        });

    return {
        props: {
            categories,
        },
    };
}

export default index;
