import * as express from 'express';
import { Response } from "express";
let path = require('path');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
//app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));


const cors = require('cors');
/*для подкл к API*/
app.use(cors());
app.options('*', cors());




// Базовый модуль
import * as IndexController from './Controler/IndexController';
app.use(IndexController.router);

/* 
// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err: any;
    err = new Error('Not Found');
    err.status = 404;
    next(err);
}); */


console.log('server start at http://localhost:3005');
app.listen(3005);