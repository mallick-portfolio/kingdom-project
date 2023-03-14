import React, { useState } from "react";
import bg from "../../img/Oji-String-Beans-Farm.jpg";
import Card from "./Card";

const card = [
  {
    id: 1,
    category: "angola",
  },
  {
    id: 2,
    category: "benin",
  },
  {
    id: 3,
    category: "burkina",
  },
  {
    id: 4,
    category: "drc",
  },
  {
    id: 5,
    category: "guinea",
  },
  {
    id: 6,
    category: "indonesia",
  },
  {
    id: 7,
    category: "ivory",
  },
  {
    id: 8,
    category: "mali",
  },
  {
    id: 9,
    category: "nigeria",
  },
  {
    id: 10,
    category: "sudan",
  },
  {
    id: 11,
    category: "togo",
  },
  {
    id: 12,
    category: "zimbawe",
  },
  {
    id: 13,
    category: "sudan",
  },
  {
    id: 14,
    category: "togo",
  },
  {
    id: 15,
    category: "zimbawe",
  },
  {
    id: 16,
    category: "angola",
  },
  {
    id: 17,
    category: "benin",
  },
  {
    id: 18,
    category: "burkina",
  },
  {
    id: 19,
    category: "drc",
  },
];
const categories = [
  {
    id: 1,
    category: "Angola",
    title: "angola",
  },
  {
    id: 2,
    category: "Benin",
    title: "benin",
  },
  {
    id: 3,
    category: "Burkina Faso",
    title: "burkina",
  },
  {
    id: 4,
    category: "DRC",
    title: "drc",
  },
  {
    id: 5,
    category: "Guinea",
    title: "guinea",
  },
  {
    id: 6,
    category: "Indonesia",
    title: "indonesia",
  },
  {
    id: 7,
    category: "Ivory Coast",
    title: "ivory",
  },
  {
    id: 8,
    category: "Mali",
    title: "mali",
  },
  {
    id: 9,
    category: "Nigeria",
    title: "nigeria",
  },
  {
    id: 10,
    category: "Sudan",
    title: "sudan",
  },
  {
    id: 11,
    category: "Togo",
    title: "togo",
  },
  {
    id: 12,
    category: "Zimbawe",
    title: "zimbawe",
  },
];

const Project = () => {
  const [projects, setProjects] = useState(card);
  const handleFilter = (category) => {
    if (category === "all") {
      setProjects(card);
    } else {
      const filterProject = card.filter(
        (project) => project.category === category
      );
      setProjects(filterProject);
    }
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <ul className="flex flex-wrap justify-center gap-3">
              <li>Filter by</li>
              <li onClick={() => handleFilter("all")}>
                <a>
                  <span className="text-[#cb9833] font-semibold">All</span>
                </a>
              </li>
              {categories?.map((category) => (
                <li
                  onClick={() => handleFilter(category.title)}
                  className="flex gap-2"
                  key={category.id}
                >
                  /
                  <a>
                    <span className="text-[#cb9833] font-semibold">
                      {category.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-3">
              {projects.map((id, index) => (
                <Card key={index} id={id.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
