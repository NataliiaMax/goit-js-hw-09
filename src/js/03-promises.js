import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
console.log(formRef);
const btnRef = document.querySelector('button');
const inputDelay = document.querySelector('[name=delay]');
console.log(inputDelay);
const inputStep = document.querySelector('[name=step]');
const inputAmount = document.querySelector('[name=amount]');

formRef.addEventListener('submit', createPromise);
// // let position =
let delay = inputDelay.value;
let AMOUNT = inputAmount.value;
console.log(AMOUNT);
console.log(delay);

// let timerId = null;
function createPromise(position, delay) {
        // event.preventDefault();
    console.log({ position: inputAmount.value, delay: inputDelay.value });
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      timerId = setInterval(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }}, AMOUNT)
    })
}



// const promise = new Promise((resolve, reject) => { };
//     let random = Math.random() > .5
// setTimeout(()=>{
//     if(random) {
//         cake = 'Тортик спекли :3'
//         resolve(cake)
//     }else{
//         cake = 'Тортик провтикали :с'
//         reject(cake)
//     }
// }, 2000)
// })
//
createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
