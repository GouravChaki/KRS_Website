import React, { useState } from 'react';

export default function State() {
  const [set,setState]=useState(0);
  const inc=()=>{
    setState(set+1)
  }
  return (
    <>
    <div className="pt-24 px-24">
        <button onClick={inc}>+</button>
        <p>{set}</p>
        <button>-</button>
    </div>
    </>
  )
}
