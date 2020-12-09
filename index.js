/*
form-validator package
entry point of package

*/

// in this we will get a function  - 
// import {number_module} from @teamyourcircle/form-validator
// number_module([{"name":"not_more_than_10_digits","params":[12234343]}])
const number_module = require('./libs/numbers');


module.exports.number_module = number_module;