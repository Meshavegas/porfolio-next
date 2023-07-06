const Customer = {
  name: "customer",
  title: "Customer",
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
      name: "url",
      title: "URL",
      type: "url",
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
export default Customer;
