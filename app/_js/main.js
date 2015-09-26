$(document).ready(function() {

    function nextChecker() {
        EventUtility.addHandler(getStartedBtn, 'click', function(e) {
          console.log('next Checker, button!')
        });

    }

    function altChecker() {
        var doc = document,
            out = [],
            getStartedBtn = doc.getElementById('getStartedBtn'),
            //re = /click-me/gi,
            output = doc.createElement('p');

        output.setAttribute('id', 'output');


        EventUtility.addHandler(getStartedBtn, 'click', function(e) {
            var all = doc.getElementsByTagName("IMG");


            //EventUtility.preventDefault(event);


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

            getStartedBtn.innerHTML = 'continue';
            $('#modal > p').append(getStartedBtn);

            nextChecker();
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
