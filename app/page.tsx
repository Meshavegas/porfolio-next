import { getProjects } from "@/sanity/sanity-utils";
import { project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div className="text-7xl font-extrabold">
        hello I&apos;am{" "}
        <span className=" bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {" "}
          Vegas
        </span>{" "}
        !
      </div>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {projects.map((project) => (
          <Link
            className="border border-gray-500 rounded-lg p-5 lg:mx-1 md:mx-2 mx-2 hover:scale-105 hover:border-blue-500 transition"
            key={project._id}
            href={`projects/${project.slug}`}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={100}
                className="object-cover rounder-lg border border-gray-500"
              />
            )}
            <div className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-3xl">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
