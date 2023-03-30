
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [gender,setGender] = useState(' ');
  const male  = {
     a: 'Shirts', b: 'Facial grooming kits', c: "Hair styling",d:"Jeans", e: "Shoes"}
 
  const female = 
    {  a:'Tops', b: 'Skirts' , c: 'Makeup items', d: 'Jewellery', e:'Sandals'}
   const handleClick = (e)=>{
            setGender(e.target.value) 
   }

  
  return (
    <div>
    <select value={gender} onChange={handleClick} >
      <option value='male'>Male</option>
      <option value='female'>Female</option>
    </select>
    <div>
    <ul>
     {gender==="male" && Object.keys(male).map((key)=>(
     
                   <li key={key}>{male[key]}</li>
                   
     ))}
     {gender==="female" && Object.keys(female).map((key)=>(
              <li key={key}>{female[key]}</li>
     ))}

    </ul>
    </div>
    <hr/>      
    </div>
    
  );
};

export default App
