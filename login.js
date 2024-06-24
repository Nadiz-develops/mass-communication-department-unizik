const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');
    const loginForm = document.getElementById('Login');

    const isRequired = value => value === '' ? false : true;
    const isPasswordSecure = (password) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
    };
    // validate the password field
  const password = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    if (!isRequired(password));
  }
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();
    if(email || password){
        //login user
        alert('Login Successfully')
        window.location.href = 'Home.html';
    }
  });