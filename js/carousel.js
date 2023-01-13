var eprev = document.querySelector('.prev');
var enext = document.querySelector('.next');
var left = 0;
var timer;
run();
function run(){
    if(left <= -4800){
        left = 0;
    }
    imgList.style.marginLeft = left + 'px';
    var n = (left % 1200 == 0) ? n = 2000 : n = 10;
    left -= 10;
    timer = setTimeout(run,n);
}
function imgchange(n){
    let it = -(n*1200);
    imgList.style.marginLeft = it + 'px';
    left = it;
}
eprev.onclick = function(){
    let prevgo = Math.floor(-left / 1200) - 1;
    if(prevgo == -1){
        prevgo = 3;
    }
    imgchange(prevgo);
}
enext.onclick = function(){
    let nextgo = Math.floor(-left / 1200) + 1;
    if(nextgo == 4){
        nextgo = 1;
    }
    imgchange(nextgo);
}