function accessFunc(e) {
    console.log('test');
    var event = EventUtility.getEvent(e),
        target = EventUtility.getTarget(event),
        doc = document;
        //createDiv = doc.createElement('div');
    // $('html').on('click', function(){
    //     console.log('clicked on the html');
    // });


    function modalUi() {
        var body = doc.getElementsByTagName('body');

             $.Mustache.load('../../../templates/index.html')
                .done(function() {
                $('body').mustache('templateID');
            });
    }
    modalUi();
}


EventUtility.addHandler(window, 'load', accessFunc);
