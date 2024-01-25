const userNameEl=document.querySelector('#username');
const heightEl = document.querySelector('#height');
const weightEl = document.querySelector('#weight');
const bmiEl = document.querySelector('.bmi');
const commentEl = document.querySelector('.comment');


function calcuBmi(){
    let height = heightEl.value;
    let weight = weightEl.value;
    bmi = getBmi(height,weight);
    bmiEl.innerText = 'BMI: '+bmi;
    if(bmi<17.5){
        commentEl.innerText = '體重過輕';
    }else if(bmi>=35){
        commentEl.innerText='重度肥胖';
    }else{
        commentEl.innerText='非常正常';
    }
};

function getBmi(height,weight){
    let bmi = weight/(height/100)**2;
    if(isNaN(bmi)){
        return '數值錯誤';
    }
    return bmi.toFixed(1);
};