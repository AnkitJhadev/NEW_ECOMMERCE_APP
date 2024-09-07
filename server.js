require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth/auth-routes')

const app = express();
app.use(cookieParser());

// Use environment variables from process.env
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL; // Access the MONGO_URI from the environment variables

app.use(cors({
  origin : 'http://localhost:5173',
  methods : ['GET','PUT','POST',"DELETE"],
  allowedHeaders : [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma"
  ],
  credentials : true

}))

console.log('MONGO_URL:', MONGO_URL); // Debugging line to check MONGO_URI

// Connect to MongoDB
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use("/api/auth",authRouter)

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
