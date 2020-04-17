const _ = require('lodash'); 
//whenever installed a module and you want to use it in your app set a varaible and set it to require('modulename');

// use each function from lodash module
const numbers = [33,46,76,44,32,31];
_.each(numbers, function(number, index){
    console.log(number);
});