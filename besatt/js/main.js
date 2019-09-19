function init(){
    var posterEl = document.getElementById("poster");

    var imgNames = ["johannes.png", "johannes2.jpg"];
    var mode;

    function randomArrayItem(arrayName){
        var randomItem = 1;
        mode = randomItem;
        return arrayName[mode];
    }

    var posterHtml = `<img src="img/${randomArrayItem(imgNames)}" />`;

    posterEl.innerHTML = posterHtml;
    document.body.setAttribute('data-mode', mode);
}

window.onload = function () {
    this.init();

    document.body.classList.add("loaded");
}
