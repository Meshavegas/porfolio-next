const Testimony = {
  name: "temoignange",
  title: "Temoignage",
  type: "document",
  fields: [
    {
      name: "autheur",
      title: "Autheur",
      type: "string",
    },
    {
      name: "poste",
      title: "Poste",
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
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "rate",
      title: "Rate",
      type: "number",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
export default Testimony;
