import Column from "components/Column/Column";
import Columns from "components/Columns/Columns";
import Cover from "components/Cover/Cover";
import Heading from "components/Heading/Heading";
import Paragraph from "components/Paragraph/Paragraph";
import PropertySearch from "components/PropertySearch/PropertySearch";
import Image from "next/image";

export const BlockRenderer = ({ blocks }) => {
  console.log(blocks.map((block) => block.name));
  return blocks.map((block) => {
    switch (block.name) {
      case "core/heading":
      case "core/post-title":
        return (
          <Heading
            key={block.id}
            content={block.attributes.content}
            level={block.attributes.level}
            textAlign={block.attributes.textAlign}
          />
        );
      case "core/cover":
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      case "core/paragraph":
        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          />
        );
      case "core/columns":
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      case "core/column":
        return (
          <Column key={block.id}>
            {" "}
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      case "core/block":
        return (
          <div>
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );
      case "core/group":
        return (
          <div>
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );
      case "core/image":
        return (
          <Image
            key={block.id}
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
            alt={block.attributes.alt || ""}
          />
        );
      case "core/search":
        return (
          <PropertySearch key={block.id} />
        );
      default:
        return null
    }
  });
};
