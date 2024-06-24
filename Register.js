document.addEventListener('DOMContentLoaded', function(){
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');
    const confirmPasswordEl = document.getElementById('confirm-password');
    const form = document.getElementById('signup');
               //develop utility function,check if password, email other fields are strog,valid and required
       const isRequired = value => value === '' ? false : true;
       const isBetween = (length, min, max) => length < min || length > max ? false : true;

               //check if email is valid
  const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
      };
              //check if password is valid
    const isPasswordSecure = (password) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
    };
                  //develop a functions that shows errors & success 
                 const showError = (input, message) => {
                   // get the form-field element
                  const formField = input.parentElement;

                   // add the error class
                 formField.classList.remove('success');
                   formField.classList.add('error');
    
                      // sh 0o/w the error message
                     const error = formField.querySelector('small');
                  error.textContent = message;
                  };

                  const showSuccess = (input) => {
                    // get the form-field element
                     const formField = input.parentElement;
    
                   // remove the error class
              formField.classList.remove('error');
                 formField.classList.add('success');
    
              // hide the error message
        const error = formField.querySelector('small');
        error.textContent = '';
    };
          // validate the name field
  const checkname = () => {
    let valid = false;
    const min = 6, max = 25;
    const name = nameEl.value.trim();
    if (!isRequired(name)) {
      showError(nameEl, 'name cannot be blank.');
    } else if (!isBetween(name.length, min, max)) {
      showError(nameEl, `name must be between ${min} and ${max} characters.`);
    } else {
      showSuccess(nameEl);
      valid = true;
    }
    return valid;
  };
      //validate the email field
    const checkEmail = () => {
        let valid = false;
        const email = emailEl.value.trim();
        if (!isRequired(email)) {
            showError(emailEl, 'Email cannot be blank.');
        } else if (!isEmailValid(email)) {
            showError(emailEl, 'Email is not valid.')
        } else {
            showSuccess(emailEl);
            valid = true;
        }
        return valid;
    };
         // validate the password field
  const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
      showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
      showError(passwordEl, 'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*).');
    } else {
      showSuccess(passwordEl);
      valid = true;
    }
    return valid;
  };
   // validate the confirm password field
   const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();
    if (!isRequired(confirmPassword)) {
      showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
      showError(confirmPasswordEl, 'password does not match, check well');
    } else {
      showSuccess(confirmPasswordEl);
      valid = true;
    }
    return valid;
  };
      //add event listener
      document.getElementById('signup').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameEl.value.trim();
        const email = emailEl.value.trim();
        const password = passwordEl.value.trim();
        const confirmPassword = confirmPasswordEl.value.trim();
        const formData = new FormData(form);
      
        if (checkname() && checkEmail() && checkPassword() && checkConfirmPassword()) {
          // Register user logic here
          
          alert('User registered successfully! click OK to be redirected');
          window.location.href = 'Home.html';
        } else {
          alert('Please fill in all fields and ensure passwords match!');
          //login user
        }
      });      
    });     