var tit = getUrlParam("tit");//标题
console.log("tit=" + tit);
var score = getUrlParam("score");//星星数：1-5分
console.log("score=" + score);
var i = 0;
var t;
//点亮星星
function starlight() {
    if (score > 5) score = 5;
    if (score < 1) score = 1;
    if (i < score) {
        console.log("i=" + i);
        var slot = document.getElementById("slot");
        var stars = slot.getElementsByTagName("input");
        var labels = slot.getElementsByTagName("label");
        var styleStr = "background-position: 0 -240px;transition: background-position .7s;";//240px为星星图片宽度
        stars[i].setAttribute("style", styleStr);
        labels[i].setAttribute("style", styleStr);
        t = setTimeout("starlight()", 500);
        i++;
    }
}
//获取标题
function getTit(tit) {
    if (tit == "") {
        alert("请填写tit值");
        return false;
    };
    var h1 = document.getElementsByTagName("h1");
    h1[0].innerHTML = tit;
}
//获取url参数
function getUrlParam(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return decodeURI(results[1]);//浏览器会将url中的中文参数进行encodeURI编码，所以要通过js使用decodeURI进行解码，return unescape(results[1]);适合gb2312
}
//多事件执行函数
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(getTit(tit));
document.getElementById("btn").addEventListener("click", function () {
    starlight();
});
