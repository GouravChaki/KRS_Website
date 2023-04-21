import React from "react";
import Title from "../title/Title";
import course from "../../public/course.png";
import CourseCard from "./CourseCard";

const courseList = [
  {
    title: "Web Development",
    image: course,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis optio accusantium, iure distinctio eaque.",
  },
  {
    title: "Machine Learning",
    image: course,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis optio accusantium, iure distinctio eaque.",
  },
  {
    title: "Robotics",
    image: course,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis optio accusantium, iure distinctio eaque.",
  },
  {
    title: "IoT",
    image: course,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis optio accusantium, iure distinctio eaque.",
  },
  {
    title: "Graphic Design",
    image: course,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis optio accusantium, iure distinctio eaque.",
  },
];

function Courses() {
  return (
    <div className="pt-20 px-24">
      <div>
        <Title titlename="Courses" />
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-20">
        {courseList.map((courseList) => {
          const fun = () => {
            alert("you have joined " + courseList.title);
          };
          return (
            <CourseCard
              title={courseList.title}
              image={courseList.image}
              para={courseList.para}
              alert={fun}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
