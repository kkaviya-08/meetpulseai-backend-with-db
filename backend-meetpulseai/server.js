const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const logger = require('./middleware/logger');

const meetingRoutes =
    require('./routes/meetingRoutes');

const app = express();

app.use(express.json());

app.use(cors());

app.use(logger);


// DATABASE CONNECTION
connectDB();


// TEST ROUTE
app.get('/', (req, res) => {

    res.send("MeetingMind Backend Running");

});


// ROUTES
app.use('/meetings', meetingRoutes);


app.listen(3000, () => {

    console.log("Server Started");

});