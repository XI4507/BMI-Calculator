import React, { useState } from "react";

const BmiCard = () => {
  const [weight,setWeight]=useState(null);
  const [height,setHeight]=useState(null);
  const [bmi,setBmi]=useState(0);
  const [message,setMessage]=useState('');
   let handleSubmit=(e)=>{
    console.log("handle submit");
    e.preventDefault();
    if(weight===0 || height===0){
        alert('Please enter valid detail');
    }
    let h=height/100;
    setBmi((weight/(h*h)).toFixed(2));
    setHeight('')
    setWeight('')
    if(bmi<18){
        setMessage('you are undeweight');
    }
    else if(bmi>18 && bmi<25){
        setMessage('you have normal weight');
    }
    else if(bmi>25 && bmi<30){
        setMessage('you are overweight');
    }
    else{
        setMessage('you have obesity');
    }
  }
  return (
    <div className="flex justify-center mt-20">
      <div className="border bg-orange-300 w-64 p-5 rounded-md shadow-xl">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight(in KG)</label>
          <input type="text" placeholder="Enter Your Weight....." className="rounded-lg w-52 p-1 " value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div>
        <div className="mt-5">
          <label>Height(in CM)</label>
          <input type="text" placeholder="Enter Your Height....." className="rounded-lg w-52 p-1" value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div>
        <div>
            <button className="bg-blue-600 rounded-lg p-2 mt-2" type="submit" >submit</button>
        </div>
      </form>
      <div>
         <h1>Your BMI is : {bmi}</h1>
         <p>{message}</p>
      </div>
      </div>
    </div>
  );
};

export default BmiCard;
