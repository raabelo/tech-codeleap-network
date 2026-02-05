// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flattenTranslations(obj: Record<string, any>, prefix = ""): Record<string, string> {
    return Object.keys(obj).reduce(
        (acc, key) => {
            const newKey = prefix ? `${prefix}.${key}` : key;

            if (typeof obj[key] === "object" && obj[key] !== null) {
                Object.assign(acc, flattenTranslations(obj[key], newKey));
            } else {
                acc[newKey] = obj[key];
            }

            return acc;
        },
        {} as Record<string, string>,
    );
}
