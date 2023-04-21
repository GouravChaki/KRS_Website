import React from "react";

export default function (props) {
    const {handleGender, gender} = props;
  return (
    <>
      <input type="radio" name="Gender" id={gender} onClick={handleGender} />
      <span className="mx-3 mr-7 text-black">{gender}</span>
    </>
  );
}
