export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block, index) => {
    switch (block.name) {
      case "core/cover":
        return <div key={block.id}>Cover </div>;
      default:
        return null;
    }
  });
};
