const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// Express specific stuff
app.use('/static',express.static('static')); // For serving static file

 
// Pug specific stuff
app.set('view engine','pug'); // Set the template engine as pug
app.set('views',path.join(__dirname,'views')); //Set the views directory
 

// Endpoints
app.get('/',(req,res)=>{
    res.status(200).render('login.pug');
});



// Start the server
app.listen(port,()=>{
    console.log(`The application started succesfully on port ${port}`);
});