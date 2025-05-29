const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
app.use(express.json()); // <-- THIS IS CRITICAL

// 🔥 CORRECT WAY TO USE CORS
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));
const connectDB = require('./config/db');
dotenv.config();
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
connectDB();
app.use('/api/auth', require('./routes/authRoutes'));
const PORT  = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    }  
);