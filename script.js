// For Output
const outputYear = document.querySelector('.output-year');
const outputMonth = document.querySelector('.output-month');
const outputDay = document.querySelector('.output-day');
// for button
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', calculateDate);

// For Input
const inputYear = document.querySelector('.year');
const inputMonth = document.querySelector('.month');
const inputDay = document.querySelector(".day");
let isValid = false

// For the error
const errorYear= document.querySelector('.error-year');
const errorMonth= document.querySelector('.error-month');
const errorDay= document.querySelector(".error-day");

// adding event listener for day input
inputDay.addEventListener('input', function (){
    if (inputDay.value >31) {
        errorDay.textContent = 'must be a valid date'
        isValid=false
        return;
    } else {
        isValid=true
        errorDay.textContent=''
 };
 if (inputDay.value <1) {
    errorDay.textContent= 'This field is required'
    isValid=false
    return
 } else {isValid=true
    errorDay.textContent=''
    
 }
});

// adding event listener for month input
inputMonth.addEventListener('input', function (){
    if (inputMonth.value >12) {
        errorMonth.textContent = 'must be a valid month'
        isValid=false
        return;
    } else {
        isValid=true
        errorMonth.textContent=''
 }
 if (inputMonth.value <1) {
    errorMonth.textContent= 'This field is required'
    isValid=false
    return
 } else {isValid=true
    errorMonth.textContent=''
    
 }
});

// adding event listener for year input
inputYear.addEventListener('input', function (){
    if (inputYear.value >2023) {
        errorYear.textContent = 'must be a valid year'
        isValid=false
        return;
    } else {
        isValid=true
        errorYear.textContent=''
 }
 if (inputYear.value <1) {
    errorYear.textContent= 'This field is required'
    isValid=false
    return
 } else {isValid=true
    errorYear.textContent=''
    
 }
});

// adding event listener on button
// function calculateDate(){
//    if (isValid) {
//     let birthDay = '${inputMonth.value}/${inputDay.value}/${inputYear.value}';
//     console.log(birthDay);
//     let birthdayObj = new Date(birthDay);
//     let ageDiffMill = Date.now() - birthdayObj;
// let ageDate= new Date(ageDiffMill);
// let ageYear=ageDate.getUTCFullYear()-1970;
// let ageMonth = ageDate.getUTCMonth();
// let ageDay = ageDate.getUTCDay();

// outputDay.textContent = ageDay;
// outputMonth.textContent= ageMonth;
// outputYear.textContent= ageDay;
// }
//  else {
//     alert('please fill form')
//    } 
// }


// function calculateAge() {
//    // Get input values
//    let inputDay = document.querySelector('.day').value;
//    let inputMonth = document.querySelector('.month').value;
//    let inputYear = document.querySelector('.year').value;

//    // Convert to Date object
//    let birthDate = new Date(`${inputYear}-${inputMonth}-${inputDay}`);

//    // Calculate age
//    let today = new Date();
//    let ageDate = new Date(today - birthDate);
//    let ageYears = ageDate.getUTCFullYear() - 1970;
//    let ageMonths = ageDate.getUTCMonth();
//    let ageDays = ageDate.getUTCDate() - 1; // Correcting for day calculation

//    // Display the calculated age
//    document.querySelector('.output-year').textContent = ageYears;
//    document.querySelector('.output-month').textContent = ageMonths;
//    document.querySelector('.output-day').textContent = ageDays;
// }