'use strict';

angular.module("fantasticBoxCo")

.factory('orderService', function () {

    var order = {
        width: 0,
        height: 0,
        length: 0,
        quantity: 0,
        grade: 0,
        quality: 0,
        handles: false, 
        bottom: false
    };

    var addStep1 = function(width, height, length, quantity) {
        //validate that all params are correct
        order.width    = width;
        order.height   = height;
        order.length   = length;
        order.quantity = quantity;
    }

    var addStep2 = function(grade) {
        //validate that all params are correct
        order.grade = grade;
    }

    var addStep3 = function(quality) {
        //validate that all params are correct
        order.quality = quality;
    }

    var addStep4 = function(handles, bottom) {
        //validate that all params are correct
        order.handles = handles;
        order.bottom  = bottom;
    }

    var getQuote = function() {
        return 1;
    }
    
    return {
        addStep1: addStep1,
        addStep2: addStep2,
        addStep3: addStep3,
        addStep4: addStep4,
        getQuote: getQuote
    }

});