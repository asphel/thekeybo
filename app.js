/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const express = require('express');
const app = express();
const db = require('./config/db');


var EventController = require('./events/event.controller');
app.use('/events', EventController);


module.exports  = app;