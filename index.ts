import "reflect-metadata";
require('dotenv').config({ path: `.env` });
import * as morgan from "morgan";
import * as express from "express";
import * as BodyParser from "body-parser";
import * as cors from "cors";
import logger from './logger/index';
import countryRoutes from "./routes/countryRoutes";
import CONFIG from './config/application.config'


const NODE_ENV = CONFIG.NODE_ENV; 
const PORT = CONFIG.PORT;
const app = express();
app.use(cors());
app.options('*', cors());
app.use(morgan("dev"));
app.use(BodyParser.json());

app.use("/", countryRoutes);

// app.use((req, res, next) => {
//     /** Log the req */
//     logger.info(NODE_ENV, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

//     res.on('finish', () => {
//         /** Log the res */
//         logger.info(NODE_ENV, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
//     })
    
//     next();
// });

module.exports = app

// app.listen(PORT, () => logger.info(NODE_ENV,`Server Running in ${PORT}`));