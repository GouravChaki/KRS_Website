import React from "react";

function Title(props) {
  return (
    <div className="pb-16 w-[40%]">
      <h1 className="text-5xl font-semibold">{props.titlename}</h1>
    </div>
  );
}

export default Title;
