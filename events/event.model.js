/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    id:                     Number,
    attending_count:        Number,
    can_guests_invite:      Boolean,
    can_viewer_post:        Boolean,
    category:               String, 
    cover:                  String, 
    declined_count:         Number,
    description:            String, 
    end_time:               Date,
    event_times:            [Date]
});

mongoose.model('Event', EventSchema);

module.exports = mongoose.model('Event');