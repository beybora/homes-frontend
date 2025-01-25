export const getTextAlign = (textAlign = "left") => {
    const textAlignMap = {
        "left": "text-left",
        "center": "text-center",
        "right": "text-right",
    }

    return `${textAlignMap[textAlign] || "text-left"}`;
};
     