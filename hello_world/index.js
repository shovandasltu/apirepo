//Require module
const express = require('express');
// Express Initialize
const app = express();
const port = 8000;
app.get('/hello_world', (req,res)=>{
    res.send('Hello World');
    })
app.listen(port,()=> {
    console.log('listen port 8000');
})