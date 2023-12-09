import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      title: "Tableau Items",
      name: "tableauItems",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Nom du language",
              name: "itemTitle",
              type: "string",
            },
            //      {
            //        title: "Description de l'Item",
            //        name: "itemDescription",
            //        type: "text",
            //      },

            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
