
import { SchemaField, defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

if (process.env.NODE_ENV === "production") {
  if (typeof process.env.TINA_CLIENT_ID !== "string") throw new Error("Missing env variable TINA_CLIENT_ID");
  if (typeof process.env.TINA_TOKEN !== "string") throw new Error("Missing env variable TINA_CTOKEN");
}

const baseArticleField: SchemaField[] = [
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
    type: "boolean",
    name: "groupByYear",
    label: "Group By Year",
    required: false,
    description: "	Whether or not articles are grouped by year on list pages."
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
    templates: [
      {
        name: 'mermaid',
        label: 'Mermaid.js',
        match: {
          start: '{{<',
          end: '>}}',
        },
        fields: [
          {
            name: "children",
            type: "string",
            label: "Mermaid.js Code",
            
          }
        ]
      },
    ],
  },
  {
    type: "boolean",
    name: "showAuthor",
    label: "Display Author",
    required: false,
    description: "Whether or not the author box for the deafult author is displayed in the article footer."
  },
  {
    type: "boolean",
    name: "showHero",
    label: "Display Thumbnail",
    required: false,
    description: "Whether the thumbnail image will be shown within the article page."
  },
  {
    type: "string",
    name: "heroStyle",
    label: "Thumbnail Style",
    options: [
      {
        label: "Basic",
        value: "basic"
      },
      {
        label: "Big",
        value: "big"
      },
      {
        label: "Background",
        value: "background"
      }
    ],
    required: false
  },
  // {
  //   type: "boolean",
  //   name: "showDate",
  //   label: "Display Date Published",
  //   required: false
  // },
  // {
  //   type: "boolean",
  //   name: "showDateUpdated",
  //   label: "Display Date Edited",
  //   required: false
  // },
  // {
  //   type: "boolean",
  //   name: "showPagination",
  //   label: "Display Pagination",
  //   required: false,
  //   description: "Whether or not the next/previous article links are displayed in the article footer."
  // },
  // {
  //   type: "boolean",
  //   name: "invertPagination",
  //   label: "Invert Pagination",
  //   required: false,
  //   description: "Whether or not to flip the direction of the next/previous article links."
  // },
  // {
  //   type: "boolean",
  //   name: "showReadingTime",
  //   label: "Display Reading Time",
  //   required: false,
  //   description: "Whether or not the article reading time is displayed."
  // },
  // {
  //   type: "boolean",
  //   name: "showTaxonomies",
  //   label: "Display Taxonomies",
  //   required: false,
  //   description: "Whether or not the taxonomies that relate to this article are displayed."
  // },
  // {
  //   type: "boolean",
  //   name: "showTableOfContents",
  //   label: "Display Taxonomies",
  //   required: false,
  //   description: "Whether or not the table of contents is displayed on this article."
  // },
  // {
  //   type: "boolean",
  //   name: "showWordCount",
  //   label: "Display Word Count",
  //   required: false,
  //   description: "Whether or not the article word count is displayed."
  // },
  // {
  //   type: "boolean",
  //   name: "showSummary",
  //   label: "Display Summary",
  //   required: false,
  //   description: "Whether or not the article summary should be displayed on list pages."
  // }
]

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
        fields: baseArticleField,
      },
      {
        name: "archive",
        label: "Archives",
        path: "content/archives",
        fields: baseArticleField
      }
    ],
  },
});
