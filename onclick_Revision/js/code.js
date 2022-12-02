// function addition(e){
//   e.preventDefault();
//   let numb1 = document.querySelector("#numb1").value;
//   let numb2 = document.querySelector("#numb2").value;
//   document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
//   document.querySelector('#output').innerText = 
//   parseInt(numb1) + parseInt(numb2);
// }

let btnAddition = document.querySelector('button');
btnAddition.addEventListener('click', ()=>{
    let numb1 = document.querySelector("#numb1").value;
      let numb2 = document.querySelector("#numb2").value;
      document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
      document.querySelector('#output').innerText = 
      parseInt(numb1) + parseInt(numb2);
})