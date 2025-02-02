import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getPageStaticProps = async (context) => {
  const uri = context.params?.slug ? `/${context.params?.slug.join("/")}` : "/";

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
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
    variables: {
      uri,
    },
  });

  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
      mainMenuItems: data.menuItems.nodes,
    },
  };
};
