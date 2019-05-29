var p1 = ["Product 8", 86];
var p2 = ["Product 13", 110];
var p3 = ["Product 26", 123];
var p4 = ["Product 34", 77];
var p5 = ["Product 24", 67];
var p6 =  ["Product 1", 95];

$(document).ready(function () {
   var chart = c3.generate({
       bindto: "#clientsChoice",
       data: {
           columns: [
               p1,
               p2,
               p3,
               p4,
               p5,
               p6
           ],
           type: "bar"
       }
   });
});