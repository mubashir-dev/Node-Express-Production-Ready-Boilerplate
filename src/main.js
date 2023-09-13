const http = require('http');
const express = require('express');
const cors = require('cors');
const { mainRouter } = require('./routes/index');
const {globalErrorHandler} = require("./config/response.config");

process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection Details::${err}`)
});
process.on('uncaughtException', (err) => {
    console.error(`Uncaught Exception Details::${err}`)
});

const app = express();
app.server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors());
app.use(mainRouter)

//global error handler
app.use((err, req, res, next) => globalErrorHandler(err, req, res, next));

app.server.listen(process.env.PORT || 4000, async () => {
    console.info(`🚀 Started server on => http://localhost:${app.server.address().port}`);
});
