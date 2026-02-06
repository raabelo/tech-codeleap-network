export const getMentionQuery = (text: string, position: number) => {
    const textBeforeCursor = text.slice(0, position);
    const lastAt = textBeforeCursor.lastIndexOf("@");
    if (lastAt === -1) return undefined;

    const textAfterAt = textBeforeCursor.slice(lastAt + 1);
    if (/\s/.test(textAfterAt)) return undefined;

    return textAfterAt;
};
