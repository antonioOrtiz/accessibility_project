
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
