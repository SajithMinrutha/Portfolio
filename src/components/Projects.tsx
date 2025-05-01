import { link } from "fs";
import Image from "next/image";
function Projects() {
  type Project = {
    name: string;
    description: string;
    image: string;
    link: string;
  };
  const projects: Project[] = [
    {
      name: "Project 1",
      description: "Description of project 1",
      image: "/image",
      link: "https://github.com",
    },
    ,
    {
      name: "Project 2",
      description: "Description of project 2",
      image: "/image",
      link: "https://github.com",
    },
    ,
  ];
  return (
    <>
      <div>
        <h1 className="text-center text-3xl my-15">
          Projects I've been working so far
        </h1>
        <div className="default-flex ">
          {projects.map((items) => {
            return (
              <div className="default-flex flex-col justify-center items-center gap-5 w-50 mt-10">
                {items.name}
                {items.description}
                {items.link}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Projects;
