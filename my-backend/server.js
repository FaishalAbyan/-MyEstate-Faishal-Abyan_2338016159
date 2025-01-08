const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Path to the JSON file
const clientsFilePath = path.join(__dirname, 'clients.json');

// Endpoint to get clients data
app.get('/api/clients', (req, res) => {
  fs.readFile(clientsFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data' });
    }
    const clients = JSON.parse(data).clients;
    res.json(clients);
  });
});

// Endpoint to update clients data
app.post('/api/clients', (req, res) => {
  const newClient = req.body;
  fs.readFile(clientsFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data' });
    }
    const jsonData = JSON.parse(data);
    jsonData.clients.push(newClient);
    fs.writeFile(clientsFilePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save data' });
      }
      res.status(201).json(newClient);
    });
  });
});

// Simple route for the root URL
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
