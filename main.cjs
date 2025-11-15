// 1. Import necessary modules
const express = require('express');


const cors = require('cors');


const { Pool } = require('pg');
const app = express();
const port = 3000;



app.use(cors({
    // Allow requests from the frontend's development URL (Vite default)
    origin: 'http://localhost:5173', 
    credentials: true,
}));
app.use(express.json());




// 2. Configure the database connection pool
const pool = new Pool({
    user: 'postgres',      // <<-- CHANGE THIS
    host: 'localhost',
    database: 'Landlord',// <<-- CHANGE THIS
    password: '12345',  // <<-- CHANGE THIS
    port: 5432, 
});

// 3. Simple Test Route (API Endpoint)
app.get('/api/status', async (req, res) => {
    try {
        // Query PostgreSQL to get the current time (a simple, guaranteed query)
        const result = await pool.query('SELECT NOW()');
        
        res.status(200).json({
            status: 'Database Connected',
            currentTime: result.rows[0].now,
            message: 'Your backend is talking to PostgreSQL successfully!'
        });
    } catch (err) {
        // If there's an error connecting to PostgreSQL
        console.error('Error connecting to PostgreSQL:', err.message);
        res.status(500).json({
            status: 'Database Error',
            message: 'Could not connect to PostgreSQL. Check your credentials and server status.'
        });
    }
});

// 4. Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Test your connection here: http://localhost:${port}/api/status`);
});