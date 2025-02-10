import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage";

export default async function Home() {
  
  const data = await getPage("/");
  return <BlockRenderer blocks={data} />;
}

export async function generateMetadata() {
    const seo = await getSeo("/");
    return {
        title: seo?.title || "",
        description: seo?.metaDesc || "",
    };
}
