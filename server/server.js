import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'skin_edu',
});

app.post('/register', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const userType = req.body.userType;

    bcrypt.hash(password, 10, (err, hash) => { 
        db.query(
            "INSERT INTO users (`username`, `email`, `password`, `userType`) VALUES (?)",
            [username, email, hash, userType],
            (err, result) => {
                console.log(err);
            });
    });
});
app.get('/register', (req, res) => {
    // Your code here
    res.send('Hello World');
});

app.listen(8081, () => {
    console.log('Server started on port 8081');
});