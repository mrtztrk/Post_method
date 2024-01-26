const PORT = 8000
const express = require('express')
const app = express()
const path = require('path');

// Set the 'public' folder as the static directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html', 'index.js'));
  // tüm dosyaları sendFile icindeki path.join icine string olarak ekledim ve calıstı.
});

app.listen(PORT, () => console.log('Your server is running on PORT: ' + PORT))

