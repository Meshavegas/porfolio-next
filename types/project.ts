import { PortableTextBlock } from "sanity";

type url = {
  url: string;
};
type image = {
  asset: url;
};

export type project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: image[];
  techno: string[];
  plateforme: string;
  url: string;
  content: PortableTextBlock[];
};
