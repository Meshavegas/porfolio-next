import { defineField, defineType } from "sanity";

export default defineType({
  name: "projet",
  title: "Projet",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre du Projet",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "titre",
        maxLength: 96,
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),

    defineField({
      name: "technologies",
      title: "Technologies Utilisées",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "fonctionnalites",
      title: "Fonctionnalités Principales",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "capturesEcran",
      title: "Captures d'écran",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "resultats",
      title: "Why this",
      type: "blockContent",
    }),

    defineField({
      name: "lienEnLigne",
      title: "Lien vers la Version en Ligne",
      type: "url",
    }),

    defineField({
      name: "lienGitHub",
      title: "Lien vers le Code Source sur GitHub",
      type: "url",
    }),
  ],

  preview: {
    select: {
      title: "titre",
      media: "capturesEcran.0", // Utilisez la première capture d'écran comme image de prévisualisation
    },
  },
});
