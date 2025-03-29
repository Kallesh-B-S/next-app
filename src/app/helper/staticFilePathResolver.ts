
export const staticFilePathResolver = (domain: string) => {
    if (domain === "localhost") {
        // return "http://localhost:3000";
        return ""
    } else {
        return `/next-app`;
    }
}