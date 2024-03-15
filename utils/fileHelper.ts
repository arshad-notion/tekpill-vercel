export const getURLFriendlyName = (title: string) =>
  title?.toLowerCase().replace(new RegExp(" ", "g"), "-") || "";
