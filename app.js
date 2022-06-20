const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const val = document.querySelector("#value");

btn1.addEventListener('click',()=>{
  let value = Number(val.textContent.trim()) - 1;
  val.textContent = value;
  checker(value);
});

btn2.addEventListener('click',()=>{
  val.textContent = 0;
  checker(0);
})
btn3.addEventListener('click',()=>{
  let value = Number(val.textContent.trim()) +1;
  val.textContent = value;
  checker(value);
});


function checker(value) {
  if(value > 0) val.classList="pos";
  else if (value == 0) val.classList=" ";
  else if ( value < 0) val.classList="neg";
}