//font değiştirmek için
var fontTurleri = ["Bebas Neue", "Caveat", "Rowdies", "Play", "Montserrat Alternates", "DynaPuff", "Mouse Memoirs", "Quicksand", "Bangers", "Mynerve", "kanit", "PT Sans Narrow", "Secular One", "Yatra One"];
var fontIndeksi = 0;

function fontDegistir() {
    var h1Element = document.getElementsByTagName("h1")[0];
    var seciliFont = fontTurleri[fontIndeksi];

    h1Element.style.fontFamily = seciliFont;

    fontIndeksi++;
    if (fontIndeksi >= fontTurleri.length) {
        fontIndeksi = 0;
    }
}
document.addEventListener("click", fontDegistir);

//ekran ilk açıldığında kısa süreli "ekrana dokun" yazısı için 
document.addEventListener("DOMContentLoaded", function () {
    var tiklaElementi = document.getElementById("tikla");
    tiklaElementi.style.display = "block";
    setTimeout(function () {
        var opacity = 1;
        var fadeTimer = setInterval(function () {
            if (opacity <= 0) {
                clearInterval(fadeTimer);
                tiklaElementi.style.display = "none";
            } else {
                opacity -= 0.03;
                tiklaElementi.style.opacity = opacity;
            }
        }, 50);
    }, 1500);
});

//tıklama animasyonu
document.addEventListener('click', function (e) {
    var circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = e.clientX + 'px';
    circle.style.top = e.clientY + 'px';
    document.body.appendChild(circle);

    setTimeout(function () {
        circle.style.transform = 'scale(10)';
        circle.style.opacity = '0';
    }, 10);

    setTimeout(function () {
        document.body.removeChild(circle);
    }, 500);
});
