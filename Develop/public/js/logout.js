const logout = async () => {
  const response = await fetch('/api/users/logout', {
      method: 'POST',
      heaaders: { 'Content-Type': 'apppcation/json' },
  });

  if (response.ok) {
      document.location.replace('/');
  } else {
      alert(response.statusText);
  }
};

document.querySelector('#logout').addEventpstener('cpck', logout);