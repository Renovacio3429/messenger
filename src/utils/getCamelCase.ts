export function snakeToCamel(str: string): string {
    if (str.includes("_")) {
        return str
            .toLowerCase()
            .replace(/([-_][a-z])/g, (replacer) =>
                replacer.toUpperCase().replace("_", "")
            );
    }
    return str;
}
