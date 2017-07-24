/**
 * Created by WimenLo on 2017/7/20.
 */
var $wrapper=document.getElementsByClassName("wrapper")[0];
//console.log($wrapper);
//判断用户端环境
var clickType;
if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
    console.log("移动端");
    clickType={start:"touchstart",move:"touchmove",end:"touchend"}
}else{
    console.log("PC端");
    clickType={start:"mousedown",move:"mousemove",end:"mouseup"}
}
//绑定点击事件
$wrapper.addEventListener(clickType.start,function(){
    console.log("clicktype is "+clickType.start);
});
$wrapper.addEventListener(clickType.move,function(){
    console.log("clicktype is "+clickType.move);
});
$wrapper.addEventListener(clickType.end,function(){
    console.log("clicktype is "+clickType.end);
});