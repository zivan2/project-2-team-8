// Dependencies
const express = require('express');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost: ${PORT}`);
});
