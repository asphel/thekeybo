/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const app = require('./app');
const port = 3000;
const logger = require('winston');

var server = app.listen(port, function(){
    logger.log('info', 'Express server listening on port', {
        port : port
    });
});