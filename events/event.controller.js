/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const logger = require('winston');
const request = require('request-promise');

router.use(bodyParser.urlencoded({
    extended:true
}));


module.exports = router;
