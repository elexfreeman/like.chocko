

import * as express from 'express';



var router = express.Router();

/**
 * Контроллер проверки отвечает API или нет
 */
class IndexController{

    constructor(){

        console.log('Проверка работы API Ser');
    }
}

/**
 * Проверка на работоспособность
 */
router.post('/', function(req, res, next) {
    let self = new IndexController();
    res.send('POST API сервер работает');
});

/**
 * Проверка на работоспособность
 */
router.get('/', function(req, res, next) {
    let self = new IndexController();
    res.render('index', { title: 'Express' });
});

export {router};