/* eslint-disable import/no-anonymous-default-export */
/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      name: "menuLabel",
      label: "Menu Label",
      type: "string",
    },
    {
      name: "menuIndex",
      label: "Menu Index",
      type: "number",
    },
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
