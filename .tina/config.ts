
import { defineConfig } from "tinacms";
import baseArticleField from "./articles";

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
        fields: baseArticleField,
        format: "md"
      },
      {
        name: "archive",
        label: "Archives",
        path: "content/archives",
        fields: baseArticleField,
        format: "md",
        ui: {
          defaultItem: () => {
            return {
              title: `New Post ${(new Date()).toLocaleDateString()}`,
              description: "Lorem Ipsum Dolor",
              date: new Date().toISOString(),
            }
          }
        }
      }
    ],
  },
});
