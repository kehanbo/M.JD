window.onload = function () {

search();



};

var search = function(){
    //获取元素
    var search = document.getElementsByClassName("jd-header-box")[0];
    var banner =document.getElementsByClassName("jd_banner")[0];
    var height = banner.offsetHeight;
    //绑定屏幕滚动事件
    window.onscroll = function () {
        var num = document.body.scrollTop;
        if (num>height){
            search.style.background="rgba(201,21,35,0.85)";
        }else {
            var op=num/height*0.85;
            search.style.background="rgba(201,21,35,op)";
        }
    }


}