const heros = {
  name: "heros",
  title: "Heros",
  type: "document",
  fields: [
    {
      name: "name",
      title: "name",
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
};
export default heros;
