const express = require('express');
const app = express();
const User = require('./db/User'); // Ensure the User model is correctly set up.
const connectDB = require('./db/dbConnection');
const port = 8000;
const cors = require('cors');
// Connect to the database
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port} successfully`);
});
app.use(cors());
// Registration endpoint
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        // Validate input
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }
        // Save user to the database
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: 'Registration Successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Registration Failed. Please try again later.' });
    }
});


// Login ka logic
// if the user name password from which it login is present then login successfukyy
// else login not succesfully
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username }); // Corrected `user` to `User`
        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        if (user.password != password) { // Comparison remains as is
            return res.status(401).json({ error: 'Invalid username or password' }); // Fixed typo in `erroor`
        }
        res.status(200).json({ message: 'Login Successful' });
    } catch (err) {
        res.status(500).json({ error: 'Login Failed' });
    }
});
