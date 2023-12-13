type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updateAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  category: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  comments: Comment[];
}

interface Comment {
  commenterName: string;
  message: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Product extends Base {
  title: string;
  slug: Slug;
  mainImage: Image;
  publishedAt: string;
  items: Array<ItemField2>;
  conclusion: string;
}

interface Skill extends Base {
  name: string;
  slug: Slug;
  tableauItems: ItemSkill[];
}

interface NewsLetter extends Base {
  name: string;
  email?: string;
  message: string;
}

interface ItemSkill {
  itemTitle: string;
  image?: Image;
}

interface ItemField {
  itemName: string;
  itemValue: string;
}

interface Service extends Base {
  title: string;
  image?: Image;
  description: Block[]; // Assurez-vous d'avoir déjà défini le type BlockContent
  blogLink?: string;
  items?: ItemField[];
}

interface ItemField2 {
  itemTitle: string;
  itemDescription: string;
  itemImages: Image[];
}
interface Image {
  _type: "image";
  asset: Reference;
}
interface Reference {
  _ref: string;
  _type: "reference";
}
interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDerfs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}
interface Title {
  _type: "string";
  current: string;
}
