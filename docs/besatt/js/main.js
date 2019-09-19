function init(){
    var posterEl = document.getElementById("poster");
    var mode = 0;
    var imgNames = [
        "johannes.png", 
        "johannes2.jpg"
    ];
    var posterHtml = `<img src="img/${randomArrayItem(imgNames)}" />`;

    posterEl.innerHTML = posterHtml;
    document.body.setAttribute('data-mode', mode);
}

function randomArrayItem(arrayName){
    randomItem = mode;
    return arrayName[mode];
}

window.onload = function () {
    this.init();
    document.body.classList.add("loaded");
}
