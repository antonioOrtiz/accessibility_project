$(document).ready(function() {


    function altChecker() {
        var doc = document,
            out = [],
            getStartedBtn = doc.getElementById('getStartedBtn'),
            output = doc.createElement('p');
            output.setAttribute('id', 'output');
            getStartedBtn.parentNode.insertBefore(output, getStartedBtn.nextSibling);

        EventUtility.addHandler(getStartedBtn, 'click', function() {

            var all = doc.getElementsByTagName("IMG");

            for (var i = 0, max = all.length; i < max; i++) {
                var id = all[i].id;
                if (all[i].hasAttribute('alt')) {
                    out.push(id + ' has alt');
                    var value = all[i].getAttribute('alt');
                    if (value != "") {
                        out.push(id + ' alt="' + value + '"');
                    } else {
                        out.push(id + ' alt is empty');
                    }
                } else {
                    out.push(id + ' does not have alt');
                }
            }
            doc.getElementById('output').innerHTML = out.join("\n");


            // for (var i = 0; i < all.length; i++) {
            //     if (all[i].hasAttribute('alt')) {
            //         if (all[i].alt === '') {
            //             console.log('this has a ' + all[i].nodeName + ' tag BUT it is empty!');
            //         } else {
            //             console.log('Yes, this has a ' + all[i].nodeName + ' tag and it is NOT empty!');
            //         }
            //     } else {
            //         console.log('Sorry ' + all[i].nodeName + ' tag, doesn\'t have an alt tag!');
            //     }

            // }
        });
    }

    function modalUi() {

        var doc = document,
            body = doc.getElementsByTagName('body'),
            overlay = $('#overlay');
        $.Mustache.load('../../../templates/index.html')
            .done(function() {
                $('body').mustache('templateID');
            });

        $('body').prepend(overlay);

        EventUtility.addHandler(window, 'load', altChecker);


    }




    modalUi();
});
