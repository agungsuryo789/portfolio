import { Card, CardTitle } from "../../../Components/UI/Card";
import { useState } from "react";

const CardProject = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    { id: "isma-psikolog", name: "Isma Psikologi", path: "/portfolio/projects#isma-psikolog" },
    { id: "simba-refinery", name: "Simba Refinery", path: "/portfolio/projects#simba-refinery" },
    { id: "tribun-community", name: "Tribun Community", path: "/portfolio/projects#tribun-community" },
    { id: "tribun-academy", name: "Tribun Academy", path: "/portfolio/projects#tribun-academmy" },
  ];

  return (
    <>
      <Card className="relative flex flex-col border-[1px] border-black dark:border-white col-span-10 xl:col-span-5 min-h-80 overflow-hidden group dark:text-black">
        <CardTitle className="bg-gradient-to-t from-yellow-200 via-yellow-300 to-yellow-50">
          <i className="my-auto mr-2  fa fa-code-fork" aria-hidden="true"></i>
          Projects
        </CardTitle>
        <div className="flex flex-wrap gap-4 p-4 max-h-80 overflow-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded hover:scale-105 transition-transform duration-150 ease-in-out"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a href={project.path} className="flex flex-col justify-center">
                <i
                  className={`fa mx-auto my-2 text-5xl ${
                    hoveredProject === project.id ? "fa-folder-open-o" : "fa-folder-o"
                  }`}
                  aria-hidden="true"
                ></i>
                <span>{project.name}</span>
              </a>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default CardProject;
