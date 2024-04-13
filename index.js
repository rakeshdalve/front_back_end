const express = require('express');
const app = express();
const port = 3000;

// Define a simple GET endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
