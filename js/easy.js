'use strict'

function exercise (activity){
  function output(){
    return `Today's exercise: ${activity}`
  }
  return output
};

var run = exercise('running');
var swim = exercise('swimming');

console.log(run());
console.log(swim());