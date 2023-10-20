// For Input
const inputDay = document.querySelector(".day");
const inputMonth = document.querySelector(".month");
const inputYear = document.querySelector(".year");
let isValid = false






// For Output
const outputYear = document.querySelector('.output-year');
const outputMonth = document.querySelector('.output-month');
const outputDay = document.querySelector('.output-day');


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





function calculateDate () {
    if (isValid) {
      const birthDay = new Date(
        `${inputYear.value}-${inputMonth.value}-${inputDay.value}`
      );
      const today = new Date();
  
      // Calculate the difference in milliseconds
      const ageDiffMill = today - birthDay;
  
      // date object with the age difference
      const ageDate = new Date(ageDiffMill);
  
      const ageYears = ageDate.getUTCFullYear() - 1970;
      const ageMonths = ageDate.getUTCMonth();
      const ageDays = ageDate.getUTCDate() - 1; // Correcting for day calculation
  
      //  calculated age
      outputYear.textContent = ageYears;
      outputMonth.textContent = ageMonths;
      outputDay.textContent = ageDays;
    } else {
      alert('Please fill in the form');
    }
  }







  
