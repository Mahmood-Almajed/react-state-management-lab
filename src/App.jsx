// src/App.jsx
import "./App.css"
import { useState } from "react";
const App = () => {


  const [team,setTeam]=useState([]);
  const [money,setMoney]=useState(100);
  const [zombieFighters, setZombieFighters]=useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://loremflickr.com/320/240/dog',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://loremflickr.com/320/240?random=1',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://loremflickr.com/320/240?random=2',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://loremflickr.com/320/240?random=1',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://loremflickr.com/320/240?random=3',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://loremflickr.com/320/240?random=1',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://loremflickr.com/320/240?random=3',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://loremflickr.com/320/240?random=1',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://loremflickr.com/320/240?random=2',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://loremflickr.com/320/240?random=3',
      },
    ]
  

  );
  const [totalStrength,setTotalStrength]=useState(0);

  const [totalAgility,setTotalAgility]=useState(0);


  const handleAddFighter=(newFighter)=>{
    setTeam([...team,newFighter])
    if(money>=newFighter.price){
    setMoney((money-newFighter.price))
    setTotalStrength((totalStrength+newFighter.strength))
    setTotalAgility((totalAgility+newFighter.agility))
    }
    else{
      console.log("Not enough money")
    }
   
  }
  

  const handleRemoveFighter =(removedFighter)=>{
    const filteredFightersArr =team.filter((fighter)=>{
      return fighter !== removedFighter

    })
    setTeam(filteredFightersArr);
    if(removedFighter.price<=money){
      setMoney((money+removedFighter.price))
    }
    setTotalStrength((totalStrength-removedFighter.strength))
    setTotalAgility((totalAgility-removedFighter.agility))


    
  }

  return (
   
    <>
    <h1>Zombie Fighters</h1>
    <h2>money: ${money}</h2>
    <h3>Team Strength: {totalStrength} </h3>
    <h3>Team Agility: {totalAgility} </h3>
    <h3>Team</h3>
    
    {team.length===0 ?'Pick some team members!':
      team.map((fighter)=>(
        <>
        <ul>
        <li>
          <img src={fighter.img} alt="fighter" />
          <h3>{fighter.name}</h3>
          <p>price:${fighter.price}</p>
          <p>Strength:{fighter.strength}</p>
          <p>Agility:{fighter.agility}</p>
          <button onClick={()=>handleRemoveFighter(fighter)}>Remove</button>
          </li>
       

      </ul>

        </>
      ))
    
    
    }



    <hr />

    {zombieFighters.map((zombieFighter)=>(
      
      <ul>
        <li>
          <img src={zombieFighter.img} alt="fighter" />
          <h3>{zombieFighter.name}</h3>
          <p>price:${zombieFighter.price}</p>
          <p>Strength:{zombieFighter.strength}</p>
          <p>Agility:{zombieFighter.agility}</p>
          <button onClick={()=>handleAddFighter(zombieFighter)}>Add</button>
          </li>
       

      </ul>

    

    ))}
 </>
  )
}

export default App