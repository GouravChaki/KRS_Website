import React from "react";
import { Link } from "react-router-dom";
import Title from "../footer/Title";

function HomeMain() {
  return (
    <div className="w-[900px] flex flex-col items-center justify-center pt-16">
      <button className="bg-gray-200 rounded-full px-2 py-1">
        Check out our most recent podcast &#62;
      </button>
      <br />
      <h1 className="text-4xl font-bold text-center">
        The Free Comminity for <br /> Modern Learning.
      </h1>
      <br />
      <p className="text-center text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam quo
        laboriosam. Id, ut. Animi rem distinctio impedit, cumque ab ullam alias
        earum ipsum quo?
      </p>
      <br />
      <div className="text-lg">
        <button className="bg-blue-500 px-6 py-2 mx-2 rounded-md text-white">
          <Link to="/courses">See Courses</Link>
        </button>
        <button className=" px-6 py-2 mx-2 rounded-md border-[1px] border-black">
          <Link to="/">Visit Youtube</Link>
        </button>
      </div>
    </div>
  );
}

export default HomeMain;
