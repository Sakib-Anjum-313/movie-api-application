// External Import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
dotenv.config();

// Internal Import
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const adminRouter = require("./router/adminRouter");
const regUserRouter = require("./router/regUserRouter");
const guestUserRouter = require("./router/guestUserRouter");

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connection successful!!!");
    // const sakib = "sakib.pdf";
    // const fileExt = path.extname(sakib);
    // console.log(fileExt);
  })
  .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/", loginRouter);
app.use("/admin", adminRouter);
app.use("/regUser", regUserRouter);
app.use("/guestUser", guestUserRouter);

// 404 not found handler
app.use(notFoundHandler);

// error handling
app.use(errorHandler);

// port listening
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
