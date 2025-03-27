// create empty array
const emailArray = [];

// select the needed elements
let email = document.getElementById('email');
let submitBtn = document.getElementById('btn');
let errorIcon = document.getElementById('error-icon');
let errorText = document.getElementById('error-text');

//   create a function called validateEmail
function validEmail(email) {
  return (
    email.includes('@') &&
    email.includes('.') &&
    email.indexOf('.') > 0 &&
    email.indexOf('@') + 1 < email.lastIndexOf('.') &&
    !email.endsWith('.')
  );
}

//  create a function that gets user input
function getUserInput(e) {
  e.preventDefault();

  // get the value and saves it in a variable
  let userInput = email.value;

  //   email validation
  if (userInput == '') {
    errorText.style.display = 'block';
    errorIcon.style.display = 'block';
  } else if (!validEmail(userInput)) {
    errorText.style.display = 'block';
    errorIcon.style.display = 'block';
    // resets focus to the input field
    email.focus();
  } else {
    errorText.style.display = 'none';
    errorIcon.style.display = 'none';

    // clears the input field
    email.value = '';
    // push the user input to the empty array
    emailArray.push(userInput);

    alert("Thank you! We will contact you shortly.")

    // Prints result to the terminal
    console.log(`Emails: ${emailArray}`);
  }

  // **  removes the errortext and errorIcon after 2secs
  setTimeout(() => {
    errorText.style.display = 'none';
    errorIcon.style.display = 'none';
    // clears the input field
    email.value = '';
    
  }, 2000);
}

submitBtn.addEventListener('click', getUserInput);
