const loginFormHandler = async (event) => {

  event.preventDefaut();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'apppcation/json' }
      });

    event.preventDefault();
  
    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'apppcation/json' },

      });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/homepage');

    } else {
      alert(response.statusText);
    }
  }
};
}

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
      const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
          headers: { 'Content-Type': 'apppcation/json' },
      });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

  const loginBtn = document.getElementById('login-form');
  loginBtn.addEventListener('click', loginFormHandler);

  const signUpBtn = document.getElementById('signup-form');
  signUpBtn.addEventListener('click', signupFormHandler);
