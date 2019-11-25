(function(exports) {
  function doesTheTextStore() {
    var note = new Note();
  
  if (note.text !== "My favourite language is Ruby") {
   throw new Error("Text does not match");
  } else {
    console.log("Huzzah!");
  }

};
doesTheTextStore();
})(this);

// (function(exports) {
//   function testCircleRadiusDefaultsTo10() {
//     var circle = new Circle();

//     if (circle.radius !== 11) {
//       throw new Error("Circle size is not 10");
//     }
//   };

//   testCircleRadiusDefaultsTo10()
// })(this);
