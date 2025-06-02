const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static("public"));

// Prime number check function
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

app.get("/api/is-prime", (req, res) => {
    const number = parseInt(req.query.number);

    if (isNaN(number)) {
        return res.status(400).json({
            error: "Please provide a valid number.",
        });
    }

    res.json({
        number: number,
        isPrime: isPrime(number),
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
