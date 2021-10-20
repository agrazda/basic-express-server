'use strict';

function validator(request, response, next) {
    if(request.query.name) {
        next();
    } else {
        next("NOT GOOD");
    }
}

module.exports = validator;