const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'h4h',
	port: 3306,
	multipleStatements: true
})

db.connect((err) => {
	if(err)
		throw err;
	else
		console.log("Connected");
})

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res) => {
    res.json("Success");
    console.log("!!!");
})

function queryExec(sql,res) {
	db.query(sql, function (error, results) {
    if (error) {
        throw error;
        res.json("Error");
    }
    res.json(results);
	});
}

app.post('/login', (req, res) => {
	var username = req.body.username,
	password = req.body.password;
	let sql;
		sql = `SELECT * FROM users where username = '${username}' 
		AND password = '${password}';`
	queryExec(sql,res);
})

app.post('/signup', (req, res) => {
	var username = req.body.username,
	password = req.body.password,
	email = req.body.email;
	let sql = `INSERT INTO User (username, password, email)VALUES('${username}', '${password}', '${email}');`
	queryExec(sql,res);
})



app.listen(3001, err => {
	console.log("The app is running at port 3001");
});