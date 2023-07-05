import { project } from "@/types/project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<project[]> {
  const client = createClient({
    projectId: "hkdbzr0t",
    dataset: "production",
    apiVersion: "2023-03-04",
  });

  return client.fetch(
    groq`*[_type == "project"]{
                     _id,
                     _createdAt,
                     name,
                     "slug":slug.current,
                     "image":image.asset->url,
                     url,
                     content
              }`
  );
}
