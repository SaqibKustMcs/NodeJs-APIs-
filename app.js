var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bcrypt = require('bcryptjs');
const app=express();
const userController = require('./controller/user-controller');
const productController = require('./controller/productController');
const server=require('http').createServer(app);
const bodyParser = require('body-parser');
const addAppointments = require('./controller/appointments-controller.js');
//  const  AddProduct  = require('./models/productModel');
// mongoose.connect('mongodb://localhost:27017/nodejsDB', {
//   useNewUrlParser: true,
// })
// var conn = mongoose.connection
// conn.on('connected', function () {
//   console.log('Database connected')
// })
// conn.on('disconnected', function () {
//   console.log('MongoDB disconnected ')
// })
// conn.on('error', console.error.bind(console))
// module.exports = conn

mongoose.connect("mongodb://localhost:27017/nodejsDB").then(async () => {
  console.log(`Connected to DB: mongodb://localhost:27017/nodejsDB`);
}).catch(err =>console.log("connection errror"+err));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// app.use("/public", express.static("public"));

app.use(cors());

app.options("*", cors());
// app.use("/auth", authController);
app.use("/users", userController);
app.use("/appointments", addAppointments);
 app.use("/products", productController);


server.listen(5000, () => {
  console.log(`Server Running On Port: 5000`);
});