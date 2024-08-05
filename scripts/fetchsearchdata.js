// Load the JSON data (replace 'data.json' with your file path)
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', () => {
      const searchQuery = searchInput.value.toLowerCase();
      const results = [];

      // Simple search example: search in titles and content of pages and sections
      for (const page of data.pages) {
        if (page.title.toLowerCase().includes(searchQuery) || page.content.toLowerCase().includes(searchQuery)) {
          results.push(page);
        }
      }
      for (const section of data.sections) {
        if (section.title.toLowerCase().includes(searchQuery) || section.content.toLowerCase().includes(searchQuery)) {
          results.push(section);
        }
      }

      // Display search results
      searchResults.innerHTML = '';
      if (results.length > 0) {
        results.forEach(result => {
          const resultDiv = document.createElement('section');
          resultDiv.textContent = result.title;
          searchResults.appendChild(resultDiv);
        });
      } else {
        searchResults.textContent = 'No results found.';
      }
    });
  });