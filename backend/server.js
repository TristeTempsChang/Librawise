const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware pour parser le JSON (si vous en avez besoin)
app.use(express.json());

// Exemple de route test
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello depuis l’API Express!' });
});

app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur le port ${PORT}`);
});
