// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

/**
 * Checks if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    // Check if the number is divisible by 2 or 3
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

app.get('/is-prime', (req, res) => {
    const number = parseInt(req.query.number);
    
    if (isNaN(number)) {
        return res.status(400).json({
            error: 'Invalid input. Please provide a valid number as a query parameter.'
        });
    }
    
    res.json({
        number: number,
        isPrime: isPrime(number)
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});