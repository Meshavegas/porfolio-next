import { PortableTextBlock } from "sanity";

export type Testimony = {
  _id: string;
  _createdAt: Date;
  autheur: string;
  poste: string;
  slug: string;
  image: string;
  rate: number;
  url: string;
  content: PortableTextBlock[];
};
