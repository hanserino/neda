var testData = {};

var isTouchDevice = function () {
    return (
        !!(typeof window !== 'undefined' &&
            ('ontouchstart' in window ||
                (window.DocumentTouch &&
                    typeof document !== 'undefined' &&
                    document instanceof window.DocumentTouch))) ||
        !!(typeof navigator !== 'undefined' &&
            (navigator.maxTouchPoints || navigator.msMaxTouchPoints))
    );
};


function init() {

    /*fetch('./data/testData.json').then(function (response) {
        return response.json().then(function (data) {
            testData = data;

            for (var i = 0; i < testData.length; i++) {
               // console.log(testData[i])
            }

        });
    }).catch(error => {
        console.log(error);
    });
    */

    var touchClass = isTouchDevice() ? "touch" : "no-touch";
    document.body.classList.add(touchClass);
}

window.onload = function () {
    init();
    document.body.classList.add("loaded");
}