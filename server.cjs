// Production server for hosting (e.g. GoDaddy Node.js Hosting).
// Serves the built site from dist/ and sends index.html for every other URL
// so React Router pages work when refreshed or opened directly.
// Run `npm run build` first, then `npm start`.
const path = require('path');
const express = require('express');

const app = express();
const DIST = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

app.use(express.static(DIST));

// Fallback for client-side routes (app.use instead of app.get('*') so it works on Express 5).
app.use((req, res) => {
  res.sendFile(path.join(DIST, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
