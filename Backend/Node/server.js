const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const userRoutes = require('./routes/userRoutes.js');
const imageRoutes = require('./routes/imageRoutes.js');
const connectDB = require('./config/database.js')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/images', imageRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
