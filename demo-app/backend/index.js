const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// allow NGINX (once deployed as separate nodes in k8s cluster) to proxy from front-end to back-end
app.use(cors({
  origin: '*',
  methods: ['GET'],
}));

app.get('/api/datetime', (req, res) => {
  res.json({ now: new Date().toLocaleString("it-IT",{timeZone:"Europe/Rome"})});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
