const result = document.querySelector('#result');
const birthYear = document.querySelector('#resultInp');
const form = document.querySelector('form');
const age = function(birthYear){
  return new Date().getFullYear() - birthYear;
}

const pensionYear = function(birthYear){
  const val = age(birthYear);
        x = 65-val;
        if(x<0){
          result.textContent = `You are pensioner now :) Don't Worry`;
        }else
        result.innerHTML =`After ` + x + `-years you will be pensioner :)`;
}

form.addEventListener('submit',function(e){
  e.preventDefault();
  pensionYear(e.target.resultInp.value);
});




