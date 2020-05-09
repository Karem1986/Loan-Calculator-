//Listen for submit with querySelector//
// const form = document.querySelector('loan-form')
//;

//Load all event listeners

// loadEventListeners();

//Execute event listeners//

// function loadEventListeners() {

//DOM Load Event 
// document.addEventListener('DOMContentLoaded', getResults);
// //Add task event

// form.addEventListener('submit', calculateResults);

// }


//LISTEN FOR SUBMIT AS BRAD DOES WITH document.getELEMENTById
document.getElementById('loan-form').addEventListener('submit', function(e) {
  
    //hide results 
    document.getElementById('results').style.display = 'none';
  
    //Show loader first
    document.getElementById('loading').style.display = 'block';
  
    //Set the loader to show for 2 seconds
    setTimeout(calculateResults, 2000);

    e.preventDefault();
});


// //Calculate Results
function calculateResults() {
 console.log('Calculating...')
//UI Vars that we need 
const amount = document.getElementById('amount'); //amount is the ID we created in the html for loan amount first div group
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');


const principal = parseFloat(amount.value);
//Calculations formules
const calculatedInterest = parseFloat(interest.value) / 100 / 12; 
const calculatedPayments = parseFloat(years.value) * 12;

//Compute monthly payment
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal*x*calculatedInterest)/(x-1); //What is principal? 

//Check if this monthly payment is a finite number

if(isFinite(monthly)) {

    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal);

    //Show results 
    document.getElementById('results').style.display = 'block';
    //Hide spinner / loader
    document.getElementById('loading').style.display = 'none';

} else {
   errorUser ('Please check your numbers');

}

}

//Show error 

function errorUser(error) {

      //hide results 
      document.getElementById('results').style.display = 'none';
  
      //hide loader
      document.getElementById('loading').style.display = 'none';

    // create a div 
    const errorDiv = document.createElement('div');

    //Get elements 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add class
    errorDiv.className = 'alert alert-danger'; //DOES NOT LOOK THE SAME AS IN VIDEO

    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
    

    //Insert error above heading 

    card.insertBefore(errorDiv, heading);

    //Set time out to make this alert notification after 3 seconds
    // setTimeout(() => {
    //     clearError(); //Another way of using setTimeout
    // }, 3000);

   setTimeout(clearError, 3000); 
}

//Clear error 
function clearError(){
document.querySelector('.alert').remove(); //Gives an ERROR 
}


