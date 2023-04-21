import React from "react";
import { Link } from "react-router-dom";

function CourseCard(props) {
  return (
    <div>
      <div className="w-[300px] border-2 border-black p-4">
        <h1 className="text-xl font-semibold pb-2">{props.title}</h1>
        <img src={props.image} alt="" />
        <p className="text-justify py-2">{props.para}</p>
        <button
          onClick={props.alert}
          className="px-2 py-1 w-full bg-blue-500 text-lg rounded-md text-white"
        >
          <Link to="/">Join now</Link>
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
