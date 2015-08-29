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
        modalDiv = doc.createElement('div'),
        buttonText = doc.createTextNode('click-me'),
        anchorButton = doc.createElement('a'),
        childOfBodyDiv = doc.createElement('div');


    function modalUi() {
        var body = doc.getElementsByTagName('body');
            doc.body.insertBefore(childOfBodyDiv, doc.body.firstChild);
            childOfBodyDiv.insertBefore(overlayDiv, childOfBodyDiv.firstChild);
            overlayDiv.setAttribute('id', 'overlay');

            containerDiv.classList.add('container'),
            overlayDiv.appendChild(containerDiv),
            rowDiv.classList.add('row'),
            containerDiv.appendChild(rowDiv),
            twelveColumnDiv.classList.add('twelve', 'columns'),
            rowDiv.appendChild(twelveColumnDiv),
            twelveColumnDiv.appendChild(modalDiv),
            modalDiv.classList.add('modal'),
            anchorButton.appendChild(buttonText),
            anchorButton.classList.add('button', 'button-primary', 'modal-button'),
            modalDiv.appendChild(anchorButton);

    }
    modalUi();
}


EventUtility.addHandler(window, 'load', accessFunc);

//# sourceMappingURL=main.js.map