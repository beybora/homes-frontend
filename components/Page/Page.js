import { BlockRenderer } from 'components/BlockRenderer'
import { MainMenu } from 'components/MainMenu'
import React from 'react'

const Page = ({ blocks, mainMenuItems }) => {
  return (
    <div>
      <MainMenu items={mainMenuItems} />
      <BlockRenderer blocks={blocks} />
    </div>
  )
}

export default Page
