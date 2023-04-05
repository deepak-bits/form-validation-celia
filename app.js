// fetch elements
const form = document.querySelector('form');
const nameEl = document.getElementById('name');
const specialDiet = document.getElementById('special-diet');
const describeDiet = document.getElementById('describe-diet');
const describeContainer = document.getElementById('describe-container');
const territorialRadioBtn = document.getElementById('territorial');
const territorialContainer = document.getElementById('territorial-container');
const temperamentField = document.getElementById('temperament-field');
const ownerEl = document.getElementById('owner');
const daytimePhoneEl = document.getElementById('daytime-phone');
const cellPhoneEl = document.getElementById('cell-phone');
const emailEl = document.getElementById('email');
const emergencyNameEl = document.getElementById('emergency-name');
const emergencyPhoneEl = document.getElementById('emergency-phone');

const p = document.querySelector('p');
// const 

let isError = undefined;
let isDaytimePhone = false;

form.addEventListener('submit', function(e){
    if(isError == undefined || isError) e.preventDefault();

    validateText(nameEl, 'Please enter the name of cat');
    if(specialDiet.checked) validateText(describeDiet, 'Please describe diet');
    validateText(ownerEl, 'Please enter the name of owner');

    if(cellPhoneEl.value == '' && daytimePhoneEl.value == ''){
        p.textContent = "Atleast one phone number is required";
    } else if(daytimePhoneEl.value != '') {
        isDaytimePhone = true;
        validatePhone(daytimePhoneEl, 'Please enter valid daytime phone number');
    } else{
        if(cellPhoneEl.value == '') {
            if(!isDayTimePhone) {
                p.textContent = "Atleast one phone number is required";
            } 
        } else {
            validatePhone(cellPhoneEl, 'Please enter valid cell phone number');
        }  
    }

    validateEmail(emailEl, "Please enter valid email id");
    validateText(emergencyNameEl, "Please enter emergency name");

    if(emergencyPhoneEl.value == ''){
        p.textContent = "Please enter emergency contact number";
    } else {
        validatePhone(emergencyPhoneEl, "Invalid emergency phone number");
    }
});

function validateAge() {
    const p = document.querySelector('p');

    if(age.value == ''){ 
      p.textContent = 'Please enter the name of cat';
      age.classList.add('focus-out');
      isError = true;
    } else {
      p.style.display = 'none';
      age.classList.remove('focus-out');
      isError = false;
    }
}

function validateCheckBoxes() {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const p = document.querySelector();
    if(checkBoxes.length == 0) {
        p.textContent = 'At least one box is required';
    } else {
        p.style.display = 'none';
    }
}


specialDiet.addEventListener('change', (e) => showDescribe(e, describeContainer));
temperamentField.addEventListener('change', checkTerritorial);



function showDescribe(e, el) {
    if(e.target.checked) {
        // console.log(specialDiet);
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}

function validateText(el, msg) {
    const inputText = el.value;
    const p = document.querySelector('p');
    
    if(inputText == '') {
        p.textContent = `${msg}`;
        el.classList.add('focus-out');
        el.focus();
        isError = true;
    } else {
        p.style.display = 'none';
        el.classList.remove('focus-out');
        isError = false;
    }
}

function checkTerritorial() {
    const radioBtns = document.querySelectorAll('input[type="radio"]');
    for(radio of radioBtns) {
        // console.log(radio);
        if(radio.checked && radio.id == 'territorial') {
            territorialContainer.style.display = 'block';
        } else {
            territorialContainer.style.display = 'none';
        }
    }
}

function validatePhone(el, msg) {
    const p = document.querySelector('p');
    const inputPhoneNumber = el.value;
    const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(!inputPhoneNumber.match(regex)) {
        p.textContent = `${msg}`;
        el.classList.add('focus-out');
        el.focus();
        isError = true;
    }
}

function validateEmail(el, msg) {
    const p = document.querySelector('p');
    const inputEmail = el.value;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!inputEmail.match(regex)) {
        p.textContent = `${msg}`;
        el.classList.add('focus-out');
        el.focus();
        isError = true;
    }
}

// 
//  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


// function phonenumber(inputtxt)
// {
//   var phoneno = /^\d{10}$/;
//   if((inputtxt.value.match(phoneno))
//         {
//       return true;
//         }
//       else
//         {
//         alert("message");
//         return false;
//         }
// }



{/* <select id="hours"></select>
<select id="minutes"></select>

<script>

       function createOption(value, text) {
              var option = document.createElement('option');
              option.text = text;
              option.value = value;
              return option;
       }

       var hourSelect = document.getElementById('hours');
       for(var i = 8; i <= 18; i++){
              hourSelect.add(createOption(i, i));
       }

       var minutesSelect = document.getElementById('minutes');
       for(var i = 0; i < 60; i += 15) {
              minutesSelect.add(createOption(i, i));
       }
</script> */}




// 

// (123) 456-7890

// (123)456-7890

// 123-456-7890

// 1234567890