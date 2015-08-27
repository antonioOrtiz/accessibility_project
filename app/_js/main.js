//   var calculate = function() {

//           var fn = Array.prototype.pop.apply(arguments);
//           return fn.apply(null, arguments);

//       },

//       sum = function() {
//           var i = 0, sum = 0;
//           while(i < arguments.length){
//            sum += arguments[i];
//            i++;
//           }
//           return sum;
//       },

//       diff = function(x, y) {

//           return x - y;

//       };

// console.log(calculate(100, 10, 15, sum));

function accessFunc(e){
  console.log('test');
  var event = EventUtility.getEvent(e),
      target = EventUtility.getTarget(event),
      doc = document;

      function func(){
          var body = getElementsByTagName('body'),
              overlay = doc.createElement('div');
              overlay.setAttribute('id', 'overlay');

              body.appendChild(overlay);
          
      }
      func();

}


EventUtility.addHandler(window, 'load', accessFunc);
