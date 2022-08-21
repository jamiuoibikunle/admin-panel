import Head from "next/head";
import React from "react";
import Main from "../../components/dashboard/Main";

const index = () => {
    return (
        <div>
            <Head>
                <title>
                    Admin Dashboard
                </title>
            </Head>
            <Main />
        </div>
    );
};

export default index;
