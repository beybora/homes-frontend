import Column from "components/Column/Column";
import Columns from "components/Columns/Columns";
import ContactForm from "components/ContactForm/ContactForm";
import Cover from "components/Cover/Cover";
import Gallery from "components/Gallery/Gallery";
import Heading from "components/Heading/Heading";
import Paragraph from "components/Paragraph/Paragraph";
import PropertyFeatures from "components/PropertyFeatures/PropertyFeatures";
import PropertySearch from "components/PropertySearch/PropertySearch";
import TickList from "components/TickList/TickList";
import Image from "next/image";

export const BlockRenderer = ({ blocks }) => {
  console.log(blocks.map((block) => block));
  return blocks.map((block) => {
    switch (block.name) {
      case "lazyblock/tick-item":
        console.log(block.attributes, "block attributes");
        return <TickList key={block.id} attributes={block.attributes} />;
      case "core/gallery":
        return (
          <Gallery
            key={block.id}
            columns={block.attributes.columns || 3}
            imageCrop={block.attributes.imageCrop || false}
            items={block.innerBlocks}
            attributes={block.attributes}
          />
        );
      case "lazyblock/contact-form":
        return <ContactForm key={block.id} />;
      case "lazyblock/property-features":
        return (
          <PropertyFeatures key={block.id} attributes={block.attributes} />
        );
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
            textColor={block.attributes.textColor}
            backgroundColor={block.attributes.backgroundColor}
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
        return <PropertySearch key={block.id} />;
      default:
        return null;
    }
  });
};
