$(document).ready(function() {

    function nextChecker(newBtnName) {
        var doc = document,

             appButtonNextChecker = doc.getElementById('appButtonNextChecker');

            EventUtility.addHandler(appButtonNextChecker, 'click', function(e) {

                $noRemove = $('#output').find('#appButtonNextChecker');
                var text = 'flim-flam </br> ' + $('<div/>').html( $noRemove ).html();

                $('#output').html(text);

            console.log('next Checker, button!');
        });

    }

    function altChecker() {
        var doc = document,
            out = [],
            appButton = doc.getElementById('appButton'),
            output = doc.createElement('p');

        output.setAttribute('id', 'output');

        EventUtility.addHandler(appButton, 'click', function(e) {
            var all = doc.getElementsByTagName("IMG");

            for (var i = 0, max = all.length; i < max; i++) {
                var id = all[i].id;
                if (all[i].hasAttribute('alt')) {
                    out.push('\nYour image element, with the id of <strong>' + id + '</strong>, has an <strong> alt </strong> tag.<br>');
                    var value = all[i].getAttribute('alt');
                    if (value != "") {
                        out.push(id + ' alt="' + value + '"');
                    } else {
                        out.push('But <strong>' + id + '\'s alt </strong> is empty.<br>');
                    }
                } else {
                    out.push(id + ' does not have alt');
                }
            }
            var modalEl = $('#modal').clone().removeClass();
            $('#modal').remove();
            $('.modal-container').append(modalEl);
            $('#modal').addClass('modal-animation');

            $('#modal > p').remove();

            $('#modal').append(output);

            output.innerHTML = out.join("\n");

            appButton.innerHTML = 'continue';
            $('#modal > p').append(appButton);
            appButton.id = 'appButtonNextChecker';
            $(appButton).unbind();

            nextChecker(appButtonNextChecker);

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
