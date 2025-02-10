
export const getMenu = async () => {
  const params = {
    query: `
    query MenuQuery {
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
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  const { data } = await response.json();
  if (!data.menuItems) {
    return null;
  }
  console.log(data.menuItems.nodes);
  return data.menuItems.nodes;

};