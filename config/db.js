/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const mongoose = require('mongoose');
const logger = require('winston');

const dbuser = 'asphel';
const dbpassword = '1eb54BD3';

const dbURI = 'mongodb://'+dbuser+':'+dbpassword+'@ds131237.mlab.com:31237/gcpmongo';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    logger.log('info', 'Mongoose connected to :', {
       URI : dbURI 
    });
});

mongoose.connection.on('error', function(err){
    logger.log('error', 'Mongoose default connection error :', {
       error : err 
    });    
});

mongoose.connection.on('disconnected', function(){
    logger.log('warn', 'Mongoose disconnected from :', {
       URI : dbURI 
    });      
});
