import { BlockRenderer } from 'components/BlockRenderer'
import { MainMenu } from 'components/MainMenu'
import Head from 'next/head';
import React from 'react'

const Page = ({ blocks, mainMenuItems, seo }) => {
  return (
    <div>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDesc} />
      </Head>
      <MainMenu items={mainMenuItems} />
      <BlockRenderer blocks={blocks} />
    </div>
  );
}

export default Page
