import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
          properties {
            nodes {
              id
              title
              uri
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              propertyFeatures {
                bathrooms
                bedrooms
                hasParking
                petFriendly
                price
              }
            }
          }
        }
      `,
    });
    res.status(200).json({
      properties: data.properties.nodes,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
