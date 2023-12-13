import { defineField, defineType } from "sanity";

export default defineType({
  name: "newsletter",
  title: "NewsLetter",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),
  ],
});
