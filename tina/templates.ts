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
                label: "Tag",
                description: "`html` tag that will be used to render the strings"
            },
            {
                name: "classList",
                type: "string",
                label: "CSS Classes",
                description: "List of `css` classes to apply to the `html` element"
            },
            {
                name: "initialString",
                type: "string",
                label: "Initial String",
                description: "Initial string that will appear written and will be replaced"
            },
            {
                name: "speed",
                type: "number",
                label: "Speed",
                description: "Typing speed, measured in milliseconds between each step"
            },
            {
                name: "startDelay",
                type: "number",
                label: "Start Delay",
                description: "The amount of time before the plugin begins typing after being initialized"
            },
            {
                name: "lifeLike",
                type: "boolean",
                label: "Life Like",
                description: "Makes the typing pace irregular, as if a real person is doing it"
            },
            {
                name: "breakLines",
                type: "boolean",
                label: "Break Lines",
                description: "Whether multiple strings are printed on top of each other (true), or if they're deleted and replaced by each other (false)"
            },
            {
                name: "waitUntilVisible",
                type: "boolean",
                label: "Wait Until Visible",
                description: "Determines if the instance will begin when loaded or only when the target element becomes visible in the viewport. The default is `true`"
            },
            {
                name: "loop",
                type: "boolean",
                label: "Loop",
                description: "Whether your strings will continuously loop after completing"
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