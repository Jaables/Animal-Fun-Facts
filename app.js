import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const images = [];

for (const animal in animals){
  images.push(
    <img
    key= {animal}
    className= 'animal'
    alt= {animal}
    src= {animals[animal].image}
    aria-label= {animal}
    role= 'button'
    onClick= {displayFact}
    />
  )
}


//displays a random fact an animal image is clicked
function displayFact(e){
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const option = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[option];   
  document.getElementById('fact').innerHTML = funFact;
}

const background = 
(<img 
  className='background' 
  alt='ocean' 
  src='images/ocean.jpg'
/>)

const title = "";



const animalFacts = 
(<div>
  <h1>{title === '' ? 'Click an animal  for a fun fact' : title}</h1>
  {background}
  <p id='fact'></p>
  <div className='animals'>
    {images}
  </div>
</div>)



ReactDOM.render(animalFacts, document.getElementById('root'))
