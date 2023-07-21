const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
    },
    {
      name: "plateforme",
      title: "Plateforme",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "images",
      title: "Image",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hostpot: true,
          },

          field: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "techno",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};

export default project;
