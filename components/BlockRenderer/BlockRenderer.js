export const BlockRenderer = ({ blocks  }) => {
    return blocks.map((block, index) => {
        switch(block.name) {
            case "core/cover": 
                return <p>Cover </p>;
            default:
                return null;
        }
    });
};
