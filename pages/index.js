import { gql } from "@apollo/client";
import client from "../client";
import { BlockRenderer } from "components/BlockRenderer/BlockRenderer";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { MainMenu } from "components/MainMenu";

export default function Home({ blocks, mainMenuItems }) {
  console.log(blocks);
  console.log(mainMenuItems);
  return (
    <div>
      <MainMenu items={mainMenuItems} />
      <BlockRenderer blocks={blocks} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query PageQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
        menuItems {
          nodes {
            id
            label
            url
            parentId
          }
        }
      }
    `,
  });

  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
      mainMenuItems: data.menuItems.nodes,
    },
  };
};
