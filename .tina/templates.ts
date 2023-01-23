import { RichTextField } from "@tinacms/schema-tools/dist/types";

const richTextTemplates: RichTextField['templates'] = [
    // Mermaid.JS
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
                type: "rich-text",
                label: "Mermaid.js Code",
                // ui: {
                //   component: "textarea"
                // }
            }
        ]
    },
    // Alert Shortcode
    {
        name: "alert",
        label: "Alert",
        match: {
            start: "{{<",
            end: ">}}"
        },
        fields: [
            {
                name: "_value",
                type: "string",
                label: "Icon Type",
                description: "See: https://blowfish.page/samples/icons/"
            },
            {
                name: "children",
                type: "rich-text",
                label: "Alert Content",
                required: true
            }
        ]
    },
    // Embed Link
    {
        name: "link",
        label: "Embed Link",
        match: {
            start: "{{<",
            end: ">}}"
        },
        fields: [
            {
                name: "link",
                type: "string",
                label: "Link URI"
            }
        ]
    },
    // Badge
    {
        name: 'badge',
        label: 'Badge',
        match: {
            start: '{{<',
            end: '>}}',
        },
        fields: [
            {
                name: "children",
                type: "rich-text",
                label: "Badge Content",
                required: true
                // ui: {
                //   component: "textarea"
                // }
            }
        ]
    },
    // Button (Call To Action)
    {
        name: 'button',
        label: 'Button',
        match: {
            start: '{{<',
            end: '>}}',
        },
        fields: [
            {
                name: "href",
                type: "string",
                label: "HREF"
            },
            {
                name: "_target",
                type: "string",
                label: "Browser Context Target",
                description: "See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target"
            },
            {
                name: "children",
                type: "rich-text",
                label: "Button Content",
                required: true
                // ui: {
                //   component: "textarea"
                // }
            }
        ]
    },
    // Carousel
    {
        name: "carousel",
        label: "Image Carousel",
        match: {
            start: "{{<",
            end: ">}}"
        },
        fields: [
            {
                name: "images",
                type: "string",
                label: "Images Regex",
                description: "See https://blowfish.page/docs/shortcodes/#carousel"
            },
            {
                name: "aspectRatio",
                type: "string",
                label: "Aspect Ratio",
                description: "See https://blowfish.page/docs/shortcodes/#carousel",
                options: [
                    {
                        value: "16-9",
                        label: "16:9"
                    },
                    {
                        value: "21-9",
                        label: "21:9"
                    },
                    {
                        value: "32-9",
                        label: "32:9"
                    },
                ]
            }
        ]
    },
    // GitHub Card
    {
        name: "github",
        label: "GitHub Card",
        match: {
            start: "{{<",
            end: ">}}"
        },
        fields: [
            {
                name: "repo",
                type: "string",
                label: "Repository",
                description: "In `username/repo-name` format",
                required: true
            }
        ]
    },
    // Icon
    {
        name: "icon",
        label: "Icon",
        match: {
            start: "{{<",
            end: ">}}"
        },
        fields: [
            {
                name: "_value",
                type: "string",
                label: "Icon Type",
                required: true,
                description: "See: https://blowfish.page/samples/icons/"
            }
        ]
    },
    // Lead
    {
        name: "lead",
        label: "Lead",
        match: {
            start: "{{<",
            end: ">}}"
        },
        fields: [
            {
                name: "children",
                type: "rich-text",
                label: "Lead Content",
                required: true
                // ui: {
                //   component: "textarea"
                // }
            }
        ]
    },
    // TypeIt
    {
        name: "typeit",
        label: "Type It",
        match: {
            start: "{{<",
            end: ">}}"
        },
        fields: [
            {
                name: "tag",
                type: "string",
                label: "Tag"
            },
            {
                name: "children",
                type: "rich-text",
                label: "Lead Content",
                required: true
                // ui: {
                //   component: "textarea"
                // }
            }
        ]
    }
]

export default richTextTemplates;