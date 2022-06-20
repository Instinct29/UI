const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt')
const saltRounds = 10;

const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'webApp',
})

app.post('/create', (req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const file = req.body.file;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash)=>{

        if(err){
            console.log(err)
        }
        db.query('INSERT INTO users (name,email,dob,gender,file,password) VALUES (?,?,?,?,?,?)',[name,email,dob,gender,file,hash],
        (err,result) =>{
        if(err){
            console.log(err)
        }else{
            res.send("Values Inserted")
        }
    })
             
    })
})

const verifyJWT = (req, res, next)=>{
    const token = req.headers["x-access-token"]
    if(!token) {
        res.send("Need a Token here!")
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded)=>{
            if (err) {
                res.json({
                    auth: false,
                    message: "Failed Authentication"
                })
            } else {
                req.userID = decoded.id;
                next();
            }
        })
    }
}


app.get('/isUserAuth',verifyJWT, (req, res)=>{
    res.send("Authenticated!")
})

app.post('/login', (req, res)=>{
    const email = req.body.email
    const password = req.body.password

    db.query('SELECT * FROM users WHERE email = ?;',email,(err,result)=>{
        if(err){
            res.send({err:err})
        } if (result.length>0){
            bcrypt.compare(password,result[0].password, (error, response)=>{
                if(response){
                    const id = result[0].id
                    const token = jwt.sign({id}, "jwtSecret", {
                        expiresIn: 300,
                    })
                    res.json({auth: true, token: token, result: result});     
                } else {
                    res.json({auth: false, message: "Wrong Email Password Combination"});}
            })
        } else {
            res.json({auth: false, message: "no user exist"});
        }
        
    })
})

app.listen(3001, ()=>{
    console.log("running")
});
