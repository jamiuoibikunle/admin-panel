import Head from 'next/head'
import React from 'react'
import Main from '../../components/newsletter/Main'

const index = () => {
  return (
    <div>
        <Head>
            <title>
                Newsletter
            </title>
        </Head>
        <Main />
    </div>
  )
}

export default index