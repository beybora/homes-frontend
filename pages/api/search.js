import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);
    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
            properties(where: {offsetPagination: {size: 3, offset: ${
              ((filters.page || 1) - 1) * 2
            }}}){
            pageInfo {
              offsetPagination {
                total
              }
            }
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
      total: data.properties.pageInfo.offsetPagination.total,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
