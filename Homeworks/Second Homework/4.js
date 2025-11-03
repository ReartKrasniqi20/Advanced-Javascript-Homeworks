/* 
employ bind function that works as shown in usage
do not use ES 6
tip - use arguments, apply, closure  
*/

const user = {
  firstName: "Bill"
};
function add(a, b, c) {
  return `${this.firstName} adds ${a + b + c}`;
}
function bind(fn, args) {
  var context = arguments[1];
  var bindArgs = Array.prototype.slice.call(arguments, 2);
  return function() {
    var callArgs = Array.prototype.slice.call(arguments);
    return fn.apply(context, bindArgs.concat(callArgs));
  };  
}


// usage
console.log(bind(add, user)(1, 2, 3)); // Bill adds 6
console.log(bind(add, user, 1)(2, 3)); // Bill adds 6
console.log(bind(add, user, 1, 2, 3)()); // Bill adds 6
console.log(bind(add, user, 1, 2, 3)(4, 5, 6)); // Bill adds 6

