<<<<<<< HEAD
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
          var body = doc.getElementsByTagName('body'),
              overlay = doc.createElement('div');
              overlay.setAttribute('id', 'overlay');

              doc.body.appendChild(overlay);
          
      }
      func();
=======
function accessFunc(e) {
    console.log('test');
    var event = EventUtility.getEvent(e),
        target = EventUtility.getTarget(event),
        doc = document,
        createDiv = doc.createElement('div'),
        containerDiv = doc.createElement('div'),
        rowDiv = doc.createElement('div'),
        twelveColumnDiv = doc.createElement('div'),
        overlayDiv = doc.createElement('div'),
        modalDiv = doc.createElement('div');


    function modalUi() {
        var body = doc.getElementsByTagName('body');
            overlayDiv.setAttribute('id', 'overlay');

            doc.body.appendChild(overlayDiv),
            containerDiv.classList.add('container'),
            overlayDiv.appendChild(containerDiv),
            rowDiv.classList.add('row'),
            containerDiv.appendChild(rowDiv),
            twelveColumnDiv.classList.add('twelve', 'columns'),
            rowDiv.appendChild(twelveColumnDiv),
            modalDiv.classList.add('modal'),
            twelveColumnDiv.appendChild(modalDiv);

    }
    modalUi();
>>>>>>> made modal in js file

}


EventUtility.addHandler(window, 'load', accessFunc);
