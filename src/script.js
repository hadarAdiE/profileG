import "./style.css";
import userArr from "./getUsers.js";
import { run } from "./getUsers.js";

const container = document.querySelector(".container");
const profileInfo = document.querySelector('.profile-info');
const img = document.querySelector('img'); 
const name = document.querySelector('h3'); 
const from = document.querySelector('.profile-info p:nth-child(3)');
const age = document.querySelector('.profile-info p:nth-child(2)');
const gender = document.querySelector('.profile-info p:nth-child(4)');
// const lookingFor = lookingFor(); 
const btnNext = document.querySelector("button");

function* generateIterator() {
  let index = 0;
  while (true) {
    yield userArr[index++ % userArr.length];
  }
}

function lookingFor() {
  const rand = Math.floor(Math.random() * 2);
  let gender;
  rand === 1 ? (gender = "male") : (gender = "female");
  return gender;
}



async function start(){
  await run(); 
  return userArr;
}


start().then(() => {
  container.innerHTML = `<img src="${userArr[0][0].picture.large}" alt="pic">
  <div class="profile-info">
  <h3>${userArr[0][0].name.first} ${userArr[0][0].name.last}</h3>
  <p>${userArr[0][0].dob.age}</p>
  <p>${userArr[0][0].location.state}</p>
  <p>${userArr[0][0].gender} looking for ${lookingFor()}</p>
  <button id="next">show next</button>
  </div>`;
  console.log('elemet being modified'); 
  return Promise.resolve();
}).then(() => {
  btnNext.addEventListener('click', () => {
    console.log("click");
  })
  console.log('event being added')
  
})




const iterator = generateIterator();

      
      
      // btnNext.addEventListener('click', () => {
        //    const person = iterator.next().value;
        //    console.log('click');
        //    container.innerHTML = `<img src="${person.picture.large}" alt="pic">
        //    <div class="profile-info">
        //        <h3>${person.name.first} ${person.name.last}</h3>
//        <p>${person.dob.age}</p>
//        <p>${person.location.state}</p>
//        <p>${person.gender} looking for ${lookingFor()}</p>
//        <button id="next">show next</button>
//    </div>`
//     //continue
//     //why are the images pixled

// });

        // name.innerText = userArr[0][0].name.first + " " + userArr[0][0].name.last; 
        // img.src = userArr[0][0].picture.large; 
        // age.innerText = userArr[0][0].dob.age; 
        // // from.innerText = userArr[0][0].location.state; 
        // gender.innerHTML = `<p>${userArr[0][0].gender} looking for ${lookingFor()}</p>`; 