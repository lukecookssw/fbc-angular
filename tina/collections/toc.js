/* eslint-disable import/no-anonymous-default-export */
export default {
  label: "Table of Contents",
  name: "toc",
  path: "content/toc",
  format: "json",
  ui: {
    allowedActions: {
        create: false,
        delete: false,
        createNestedFolder: false,
      },
    global: true
  },
  fields: [
    {
      type: "object",
      label: "Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
            return { label: item?.title }
          },
      },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "reference",
          label: "Page",
          name: "page",
          collections: ["page"],
        },
      ],
    },
  ],
};
