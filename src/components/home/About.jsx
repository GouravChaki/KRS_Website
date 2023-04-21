import React from "react";
import { Link } from "react-router-dom";
import aboutimg from "../../public/aboutimg.png";
import discord from "../../public/discord.png";
import Title from "../title/Title";

function About() {
  return (
    <div className="px-24">
      <Title titlename="About Us" />
      <div className="flex space-x-16">
        <div className="w-[50%]">
          <img src={aboutimg} alt="" />
        </div>
        <div className="w-[50%] flex flex-col justify-center">
          <ul className="list-disc">
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              error animi consequuntur esse quaerat veniam, illo aut tempore
              eum, molestias debitis! Repellendus nisi quas enim.
            </li>
            <br />
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              error animi consequuntur esse quaerat veniam, illo aut tempore
              eum, molestias debitis! Repellendus nisi quas enim.
            </li>
            <br />
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              error animi consequuntur esse quaerat veniam, illo aut tempore
              eum, molestias debitis! Repellendus nisi quas enim.
            </li>
            <br />
            <br />
          </ul>
          <button className="px-4 py-2 mx-2 w-fit bg-blue-500 text-lg rounded-md text-white">
            <Link to="/" className="flex items-center">
              <img src={discord} alt="" className="mr-2 h-4" /> Join our Discord
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
