
import app from './index'
const serverless = require('serverless-http');

module.exports.helloDev = serverless(app)