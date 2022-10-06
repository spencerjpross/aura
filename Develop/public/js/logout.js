const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
<<<<<<< HEAD
      document.location.replace('/');
=======
      document.location.replace('/login');
>>>>>>> dev
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
<<<<<<< HEAD
=======
  
>>>>>>> dev
