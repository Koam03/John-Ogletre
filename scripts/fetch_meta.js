function loadMeta() {
    fetch('components/meta.html')
      .then(response => response.text())
      .then(data => {
        const MetaElement = document.getElementById('meta-container');
        MetaElement.innerHTML = data;
      });
  }
  window.onload = loadMeta;