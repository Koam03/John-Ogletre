function loadNav() {
    fetch('components/nav.html')
      .then(response => response.text())
      .then(data => {
        const navElement = document.getElementById('nav-container');
        navElement.innerHTML = data;
      });
  }
  window.onload = loadNav;