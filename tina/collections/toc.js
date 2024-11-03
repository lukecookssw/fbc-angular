/* eslint-disable import/no-anonymous-default-export */
export default {
    label: "Table of Contents",
    name: "toc",
    path: "content/toc",
    format: "json",
    ui: {
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
                    type: "string",
                    label: "Route",
                    name: "route"
                },
                {
                    type: "number",
                    label: "Display Index",
                    name: "displayIndex"
                }
            ]
        }
    ]
};