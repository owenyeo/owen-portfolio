import React from "react";

import { projects } from "@/data";
import { CardButton } from "./ui/CardButton";

const Projects = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-blue-300">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {projects.map((card) => (
          <CardButton
            key={card.id}
            borderRadius="1.75rem"
            style={{
              background: "rgba(4,7,29,0.6)",
            }}
            className="border-slate-800"
          >
            <div className="p-4 md:p-6 lg:p-8">
              {/* Bigger image */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Title + desc below */}
              <div className="mt-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white/70 mt-3 font-semibold leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </CardButton>
        ))}
      </div>
    </div>
  );
};

export default Projects;