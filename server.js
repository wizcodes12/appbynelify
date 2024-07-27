const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Configure CORS to allow requests from your Netlify frontend domain
const corsOptions = {
  origin: 'https://appbynelify.onrender.com/', // Replace with your Netlify app domain
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import routes
const gameRoutes = require('./routes/gameRoutes');

// Use routes
app.use('/api/games', gameRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
