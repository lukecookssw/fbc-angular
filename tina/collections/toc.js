/* eslint-disable import/no-anonymous-default-export */
export default {
    label: "Table of Contents",
    name: "toc",
    path: "content/toc",
    format: "json",
    ui: {
        global: true,
        router: ({ document }) => `/toc/${document._sys.filename}`
    },
    fields: [
        {
            type: "object",
            label: "Items",
            name: "items",
            list: true,
            fields: [
                {
                    type: "string",
                    label: "Title",
                    name: "title"
                },
                {
                    type: "reference",
                    label: "Page",
                    name: "page",
                    collections: ['page']
                }
            ]
        }
    ]
};