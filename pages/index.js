import { gql } from "@apollo/client";
import client from "../client";
import { BlockRenderer } from "components/BlockRenderer/BlockRenderer";

export default function Home({ blocks }) {
  console.log(blocks);
  return <BlockRenderer blocks={blocks} />;
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
      }
    `,
  });

  return {
    props: {
      blocks: data.nodeByUri.blocks,
    },
  };
};