import Title from "../title/Title";
import { Link } from "react-router-dom";
import vector from "../../public/Vector.png";
import loginimg from "../../public/Rectangle 21.png";
import React, { useState } from 'react';
import GenderRadio from "./GenderRadio";

function Register() {

  const radioButtons = ['Male','Female']
  const [reg,setReg]=useState('');
  const [pho,setPho]=useState('');
  const [email,setEmail]=useState('');
  const [gen,setGen]=useState('');
  const [qual,setQual]=useState('');
  const [course,setCourse]=useState('');
  const [con,setCon]=useState('');
  const [pass,setPass]=useState('');
  const register=(event)=>{
    let a=event.target.value
    setReg(a);
  }
  const phone=(event)=>{
    let a=event.target.value
    setPho(a);
  }
  const mail=(event)=>{
    let a=event.target.value
    setEmail(a);
  }
  const handleGender=(event)=>{
    console.log('Evenet',event.target.id)
    setGen(event.target.getAttribute('id'));
  }
  const qualification=(event)=>{
    setQual(event.target.getAttribute('id'));
  }
  const givecourse=(event)=>{
    setCourse(event.target.getAttribute('id'));
  }
  const country=(a)=>{
    if(a==='i') setCon('India')
    if(a==='a') setCon('Austrlia')
    if(a==='e') setCon('England')
    if(a==='b') setCon('Bangladesh')
    if(a==='r') setCon('Russia')
  }
  const password=(event)=>{
    let a=event.target.value
    setPass(a)
  }
  const check=(event)=>{
    let a=event.target.value;
    if(a!==pass){ alert('Wrong Password Entered')}
  }
  const sign=()=>{
    alert('Sign Up Success!')
    alert(`Name: ${reg}
    Phone no.: ${pho}
    Email Id: ${email}
    Gender: ${gen}
    Qualification: ${qual}
    Course:${course}
    Country:${con}
    Password:${pass}`)
  }
  const renderGenderButtons = (item,index) => {
    return <GenderRadio key={index+1} handleGender={handleGender} gender={item} />
  }

  return (
    <div className="pt-24 px-24">
      <div>
        <Title titlename="Register" />
      </div>
      <div className="flex flex-row justify-center px-8">
        <div className="bg-gray-100 w-[45%] h-[750px] rounded-l-md">
          <div className="flex m-10 items-center">
            <img src={vector} alt="" />
            <p className="ml-5 font-semibold text-2xl">
              Let's Join!
            </p>
          </div>
          <div className="ml-10 text-xs">
            <form action="">
              <div className="mb-4">
                <label className="text-gray-500" htmlFor="name">
                  Name
                </label>
                <input className="w-[95%] rounded-md p-3" id="name" type="text" placeholder={reg} onChange={register}/>
              </div>
              <div className="mb-4">
                <label className="text-gray-500"htmlFor="phone">
                  Phone Number
                </label>
                <input className="w-[95%] rounded-md p-3 semibold" id="name" type="tel" placeholder={pho} onChange={phone} />
              </div>
              <div className="mb-4">
                <label className="text-gray-500" htmlFor="email">Email</label>
                <input type="email" name="Email" id="email" className="w-[95%] rounded-md p-3" placeholder={email} onChange={mail}/>
              </div>
              <div>
                <label className="text-gray-500">Gender</label>
                <div className="my-2">
                  {radioButtons.map(renderGenderButtons)}
                </div>
              </div>
              <div>
                <label className="text-gray-500">Qualification</label>
                <div className="my-2">
                  <input type="radio" name="qual" id="Student" onClick={qualification}/><span className="mx-3 mr-7 text-black">Student</span>
                  <input type="radio" name="qual" id="Teacher" onClick={qualification} /><span className="mx-3 text-black">Teacher</span>
                </div>
              </div>
              <div>
                <label className="text-gray-500">Course</label>
                <div className="my-2">
                  <input type="radio" name="dev" id='Web Development' onClick={givecourse}/><span className="mx-3 mr-7 text-black">Web Development</span>
                  <input type="radio" name="dev" id="App Development" className="" onClick={givecourse} /><span className="mx-3 text-black" >App Development</span>
                </div>
              </div>
              <div className="inline-block relative w-64">
                <label className="text-gray-500" name="Country">Country</label>
                <select name="Country" className="text-black w-[90%] my-3 block bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-10">
                  <option value="selected">Select</option>
                  <option onClick={()=>country('i')}>India</option>
                  <option onClick={()=>country('a')}>Australia</option>
                  <option onClick={()=>country('e')}>England</option>
                  <option onClick={()=>country('b')}>Bangladesh</option>
                  <option onClick={()=>country('r')}>Russia</option>
                </select>
              </div>
              <div className="flex my-2 text-center mb-5">
                <div>
                  <div className="text-gray-500">Password</div>
                  <input type="password" name="Password" id="password" className="ml-6 my-1 w-[60%] h-[45%] rounded-md p-3" placeholder={pass} onChange={password} />
                </div>
                <div>
                  <div className="text-gray-500" placeholder={pass} onChange={password}>Confirm Password</div>
                  <input type="password" name="Password" id="password" className=" ml-4 my-1 w-[60%] h-[45%] rounded-md p-3" onClick={check} />
                </div>
              </div>
              <button className="w-[80%] py-2 bg-blue-500 text-white font-bold text-sm" onClick={sign}>Sign Up</button>
            </form>

            <p className="text-center mr-8 mt-5">
              Already have an account?
              <Link to="/register">
                <span className="text-blue-500">Log in</span>
              </Link>
            </p>
          </div>
        </div>
        <div className=" w-[55%] h-[750px] rounded-r-md relative">
          <img
            src={loginimg}
            alt=""
            className="h-[750px] w-full rounded-r-md absolute -z-10"
          />
          <p className="text-5xl font-bold text-white absolute bottom-7 left-10">
            Login to the <span className="text-cyan-200"> Universe</span>
            <br /> of the
            <span className="text-yellow-300"> Aspiring </span>
            <br /> Developers!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
