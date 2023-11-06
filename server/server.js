const express = require('express');
const mysql = require('mysql');
const dbconfig = require('../config/database.js');
const cors = require('cros');
const db = mysql.createConnection(dbconfig);

db.connect();
const app = express();

app.use(cors());

const PORT =  process.env.PORT || 4000;

app.get('/', (req, res)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.send('Hello Root!!!');
});

app.get('/users',(req, res)=>{
  db.query("select * from user", (err,rows)=>{
    if(err) throw err;
    res.header('Access-Control-Allow-Origin', '*');
    res.send(rows);
  });
})

app.listen(PORT, ()=>{
  console.log('Express server Listening on port : ' + `http://localhost:${PORT}`);
});