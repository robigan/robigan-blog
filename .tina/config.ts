
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

if (process.env.NODE_ENV === "production") {
  if (typeof process.env.TINA_CLIENT_ID !== "string") throw new Error("Missing env variable TINA_CLIENT_ID");
  if (typeof process.env.TINA_TOKEN !== "string") throw new Error("Missing env variable TINA_CTOKEN");
}

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID ?? null,   // Get this from tina.io
  token: process.env.TINA_TOKEN ?? null,      // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            required: false
          },
          {
            type: "string",
            name: "robots",
            label: "Robots Configuration",
            description: "Google Search Engine Robots Meta Tag value. See https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#directives"
          },
          {
            type: "string",
            name: "menu",
            label: "Menu",
            options: [
              {
                label: "Main",
                value: "main"
              },
              {
                label: "Footer",
                value: "footer"
              }
            ],
            required: false,
            description: "When a value is provided, a link to this article will appear in the named menus."
          },
          {
            type: "string",
            name: "series",
            label: "Series",
            list: true,
            required: false,
            description: "Array of series the article belongs to, we recommend using only one series per article."
          },
          {
            type: "number",
            name: "series_order",
            label: "Series Order",
            required: false,
            description: "Position of the article within the series."
          },
          {
            type: "datetime",
            name: "date",
            label: "Date Published",
          },
          {
            type: "datetime",
            name: "lastmod",
            label: "Last Modified Date"
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: false
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            description: "Whether or not this article is considered a rough draft by Hugo."
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
