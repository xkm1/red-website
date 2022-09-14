function animation(object, target, callback) {   
    var timer = null;
    // 实参时函数，相当于 callback = function() {}; 
    clearInterval(object.timer) 
    object.timer = setInterval(function() {
    // 步长写在定时器里面
    var step = (target - object.offsetLeft) / 20; 
    step = step > 0 ? Math.ceil(step) : Math.floor(step); // 正值取大，负值取小
    if(object.offsetLeft == target){
        clearInterval(timer); // 停止动画，本质是结束定时器
        if (callback){ 
            callback(); // 回调函数
        }
    }       
    else {object.style.left = object.offsetLeft + step + 'px'};
}, 15)
}