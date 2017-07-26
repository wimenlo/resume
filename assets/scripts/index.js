/**
 * Created by WimenLo on 2017/7/20.
 */
var $wrapper=document.getElementsByClassName("wrapper")[0];
var $pageWrapper=document.getElementsByClassName("page-wrapper")[0];
var $nav=document.getElementsByClassName("nav")[0];
//console.log($wrapper);
//判断用户端环境
if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
    $nav.style.display="block";
    console.log("移动端");
    //绑定滑动事件
    $wrapper.addEventListener("touchstart",function(){
        console.log("start");
    });
    $wrapper.addEventListener("touchmove",function(){
        console.log("move");
    });
    $wrapper.addEventListener("touchend",function(){
        console.log("end");
    });
}else{
    console.log("PC端");
    var $leftBtn=document.getElementsByClassName("arrow-left")[0];
    var $rightBtn=document.getElementsByClassName("arrow-right")[0];
    $leftBtn.style.display="block";
    $rightBtn.style.display="block";
    $leftBtn.addEventListener("click",function(){
        var w=document.getElementsByClassName("page")[0].offsetWidth;
        console.log(w);
        var l=$pageWrapper.offsetLeft;
        console.log($pageWrapper.offsetLeft);
        if(l>-2*w){
            console.log("ok");
            $pageWrapper.style.left=l-w+"px";
        }else{
            $pageWrapper.style.left=0;
        }
    });
}