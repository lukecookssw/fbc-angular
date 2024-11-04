/* eslint-disable import/no-anonymous-default-export */
/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Pages",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};
