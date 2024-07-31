function loadFooter() {
    fetch('components/footer.html')
      .then(response => response.text())
      .then(data => {
        const footerElement = document.getElementById('footer-container');
        footerElement.innerHTML = data;
      });
  }
  window.onload = loadFooter;