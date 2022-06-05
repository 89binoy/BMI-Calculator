let form= document.querySelector('form');
// let weight= document.querySelector('#weight').value;
// let height= document.querySelector('#hight').value;
let button= document.querySelector('#btn');

button.addEventListener('click',()=>{
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#output');
    let height_status=false, weight_status=false;

    if(weight=== ''|| isNaN(weight) || (weight<=0)){
        document.querySelector('#weight_error').innerHTML="plarase provide valid weight.";
    }
    else{
        document.querySelector('#weight_error').innerHTML="";
        weight_status=true;
    }

    if(weight=== ''|| isNaN(height) || (height<=0)){
        document.querySelector('#height_error').innerHTML="plarase provide valid height.";
    }
    else{
        document.querySelector('#height_error').innerHTML="";
        height_status=true;
    }

    if (height_status && weight_status) {
        const bmi=( weight/ ((height*height)/1000)).toFixed(2);
        
    

    if(bmi<18.6){
        result.innerHTML='Unde weight : '+bmi;
    }
    else if(bmi>=18.6&& bmi<24.9){
        result.innerHTML='Normal : '+bmi;
    }
    else{
        result.innerHTML='Over weight : '+bmi;
    }
}
else{
    alert('The form has error');
    result.innerHTML='';
}

});

// let calculate=function(w,h){
//     let bmi= w/((h*h)/1000);
//     return bmi;
// }

// function print() {
//     event.preventDefault();
//     document.querySelector('p').textContent="BMI is: "+calculate(weight,height);
// }