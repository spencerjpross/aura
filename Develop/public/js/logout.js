const logout = async () => {
  const response = await fetch('/api/users/logout', {
      method: 'POST',
      heaaders: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
      document.location.replace('/');
  } else {
      alert(response.statusText);
  }
};

document.querySelector('#logout').addEventlistener('click', logout);