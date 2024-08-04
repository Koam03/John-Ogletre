const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Function to read JSON files from the mobile directory
function readJsonFiles(dir) {
  const files = fs.readdirSync(dir);
  const data = [];
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (path.extname(filePath) === '.json') {
      const fileData = fs.readFileSync(filePath, 'utf8');
      data.push(JSON.parse(fileData));
    }
  });
  return data;
}

// Search function
function search(data, query) {
  const results = [];
  data.forEach(item => {
    const keys = ['text', 'content']; // Add other fields to search as needed
    for (const key of keys) {
      if (item[key].toLowerCase().includes(query.toLowerCase())) {
        results.push(item);
        break;
      }
    }
  });
  return results;
}

app.get('/search', (req, res) => {
  const query = req.query.q;
  const data = readJsonFiles('./mobile'); // Replace with your mobile directory path
  const results = search(data, query);
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});