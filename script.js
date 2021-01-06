// Javascript that tells if its a school day, a work day, or a weekend.

document.getElementById('submitbutton').addEventListener('click', textboxChecker) // Executes the function textboxChecker by clicking the "Submit" button.

function textboxChecker () {
  const preUserAge = document.getElementById('userage').value // Makes the value of the age textbox into a variable.
  const userAge = parseInt(preUserAge) // Converts preUserAge to an interger.
  const userDay = document.getElementById('userday').value // Makes the value of the day of the week textbox into a variable.
  if (userDay === 'Saturday' || userDay === 'Sunday') { // Checks to see if it a weekend.
    document.getElementById('result').innerHTML = 'It is a Weekend.' // If it is a weekend, this will display.
  } else if ((userDay !== 'Sunday') || (userDay !== 'Saturday') && (userAge >= 18)) { // Checks to see if the user's age is above or equal to 18.
    document.getElementById('result').innerHTML = 'It is a Work Day.' // If user age is 18 or above, this will display.
  } else if ((userDay !== 'Sunday') || (userDay !== 'Saturday') && (userAge <= 17)) { // Checks to see if the user's age is under or equal 17.
    document.getElementById('result').innerHTML = 'It is a School Day.' // If the user is under 18, this will display.
  } else {
    document.getElementById('result').innerHTML = 'Please enter valid information.' // This will display if invalid information is presented.
  }
}
