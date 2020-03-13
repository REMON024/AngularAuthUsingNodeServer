const express = require('express');
const bodyparser = require('body-parser');
const PORT =3000
const api = require('../server/routes/api')
const app = express();

app.use(bodyparser.json());
app.use('/api',api)
app.get('/',function(req,res){

    res.send('Hello from Server');
})


app.listen(PORT,function(){

    console.log('Server Running on :'+ PORT)
})