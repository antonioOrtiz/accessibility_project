var EventUtility = {

    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },

    getEvent: function(event) {
        return event ? event : window.event;
    },

    getTarget: function(event) {
        return event.target || event.srcElement;
    },

    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },

    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};
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

//# sourceMappingURL=main.js.map