console.log("BMI")

let btn=document.getElementById("cal");
// let height=document.querySelector("#height").value;
// let weight=document.querySelector("#weight").value;
// let output=document.querySelector("#results");

btn.addEventListener("click",function(){
    let height= parseInt(document.querySelector("#height").value);
    let weight= parseInt(document.querySelector("#weight").value);
    let output=document.querySelector("#results");

    if(height==="" || height<=0 || isNaN(height)){
        output.innerHTML="Please enter valid height!";
    }
    if(weight==="" || weight<=0 || isNaN(weight)){
        output.innerHTML="Please enter valid weight!";
    }
    if(weight==="" || weight<=0 || isNaN(weight) && height==="" || height<=0 || isNaN(height)){
        output.innerHTML="Please enter valid height and weight!";
    }
    else{
        let bmi = (weight / ((height * height)
        / 10000)).toFixed(2);

        if(bmi<18.6)
        output.innerHTML="You're BMI is: " + bmi +"<br>you are underweight</br>";

        if(bmi>=18.6 && bmi<=24.6)
        output.innerHTML="You're BMI is: " + bmi +"<br>you are normal</br>";

        if(bmi>24.6)
        output.innerHTML="You're BMI is: " + bmi +"<br>you are Overweight</br>";

    }


})