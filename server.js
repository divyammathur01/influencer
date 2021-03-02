const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose  = require ('mongoose');
const MONGO_URL =
  "mongodb+srv://userdivyam:divyam12@cluster0.rrn3u.mongodb.net/influencerdb?retryWrites=true&w=majority";
const PORT = 4000;
const app = express();


const createPageRoute = require('./routes/createpage');
const authRoute = require('./routes/auth');


//db connect

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connection to Database is Successful");
  })
  .catch((err) => {
    console.log(err);
  });


app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//routes
app.use('/',createPageRoute);
app.use('/',authRoute);



app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})
