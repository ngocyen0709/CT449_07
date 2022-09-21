const express = require("express");
const cors = require("cors");

const contactsRouter = require("./App/routes/contact.route");
const app = express();

app.use(cors());
app.use(express.json());


app.get("/",(req, res) => {
    res.json({message:"Welcome to contact book application."});
});


app.use("/api/contacts",contactsRouter);

module.exports =app;



//const { BadRequestError, errorHandler } = require("./app/errors");
//const setupContactRoutes = require("./app/routes/contact.routes");
// setupContactRoutes(app);
// app.use((req, res, next) => { next(new BadRequestError(404, "Resource not found"));
//     });
//     app.use((error, req, res, next) => {
//      errorHandler.handleError(error, res);
//     });