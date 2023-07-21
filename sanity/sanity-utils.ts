import { project } from "@/types/project";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { Hero } from "@/types/hero";
import { Service } from "@/types/service";
import { Testimony } from "@/types/testimony";

export async function getProjects(): Promise<project[]> {
  return createClient(config).fetch(
    groq`*[_type == "project"]{
                     _id,
                     _createdAt,
                     name,
                     "slug":slug.current,
                     "image":images[]{
                     asset->{url,}, alt
                     },
                     url,
                     content, 
                     techno
              }`
  );
}

export async function getIllustration(slug: string): Promise<Hero> {
  return createClient(config).fetch(
    groq`*[_type == "heros" && slug.current ==$slug ][0]{
      _id,
      _createAt,
      name,
      "slug":slug.current,
      "image":images.asset->url,
    }`,
    { slug: slug }
  );
}
export async function getProject(slug: string): Promise<project> {
  return createClient(config).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
                     _id,
                     _createdAt,
                     name,
                     "slug":slug.current,
                     "image":image.asset->url,
                     url,
                     content
              }`,
    { slug: slug }
  );
}

export async function getServices(): Promise<Service[]> {
  return createClient(config).fetch(
    groq`*[_type == "service"]{
                     _id,
                     _createdAt,
                     name,
                     "slug":slug.current,
                     "image":image.asset->url,
                     content
              }`
  );
}
export async function getTestimony(): Promise<Testimony[]> {
  return createClient(config).fetch(
    groq`*[_type == "temoignange"]{
                     _id,
                     _createdAt,
                     autheur,
                     poste,
                     url,
                     rate,
                     "slug":slug.current,
                     "image":images.asset->url,
                     content
              }`
  );
}
