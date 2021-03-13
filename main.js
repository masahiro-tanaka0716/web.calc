const buttonAdd = document.getElementById('button-add');
const buttonMin = document.getElementById('button-min');
const buttonMul = document.getElementById('button-mul');
const buttonDiv = document.getElementById('button-div');

const box = document.getElementById('box');

const getNum1 = () => {
  let num1 = document.getElementById('num1');
  return +num1.value;
};

const getNum2 = () => {
  let num2 = document.getElementById('num2');
  return +num2.value;
};

const showResult = (num) => {
  document.getElementById('box').innerHTML = num;
};

buttonAdd.addEventListener('click', () => {
  
  const resultAdd = getNum1() + getNum2();
  
  console.log(resultAdd);

  box.textContent = resultAdd;
});

buttonMin.addEventListener('click', () => {
  const resultMin = getNum1() - getNum2();
  
  box.textContent = resultMin;
});

buttonMul.addEventListener('click', () => {
  const resultMul = getNum1() * getNum2();
  
  box.textContent = resultMul;
});

buttonDiv.addEventListener('click', () => {
  const resultDiv = getNum1() * getNum2();
  
  box.textContent = resultDiv;
});

