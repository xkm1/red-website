window.addEventListener('load', function(){
    var regions = this.document.querySelectorAll('.region');
    var rightMap1 = this.document.querySelector('.rightMap1');
    var rightMap2 = this.document.querySelector('.rightMap2');
    var rightMap3 = this.document.querySelector('.rightMap3');
    for(var i = 0; i < regions.length; i++){
        regions[i].setAttribute('index', i);
        regions[i].addEventListener('click', function(){
            var index = this.getAttribute('index');
            if(index == 0){
                moveAnimation(rightMap1, 360);
                rightMap1.style.zIndex = 1;
                rightMap2.style.zIndex = 0;
                rightMap3.style.zIndex = 0;

                rightMap1.style.opacity = 1;           
                rightMap2.style.opacity = 0;
                rightMap3.style.opacity = 0;
            }
            if(index == 1){
                moveAnimation(rightMap2, 360);   
                rightMap1.style.zIndex = 0;
                rightMap2.style.zIndex = 1;
                rightMap3.style.zIndex = 0;

                rightMap1.style.opacity = 0;
                rightMap2.style.opacity = 1;
                rightMap3.style.opacity = 0;

            }
            if(index == 2){
                moveAnimation(rightMap3, 360);
                rightMap1.style.zIndex = 0;
                rightMap2.style.zIndex = 0;
                rightMap3.style.zIndex = 1;

                rightMap1.style.opacity = 0;
                rightMap2.style.opacity = 0;
                rightMap3.style.opacity = 1;

            }
        })
    }

    var timer = null;
    function moveAnimation(object, target, callback){
        clearInterval(timer);
        object.timer = setInterval(function() {
            var step = (target - object.offsetLeft) / 10; 
            step = step > 0 ? Math.ceil(step) : Math.floor(step); // 正值取大，负值取小
            if(object.offsetLeft == target){
                clearInterval(timer);
                if (callback){ 
                    callback(); // 回调函数
                }
            }
            else{
                object.style.left = object.offsetLeft + step + 'px';
            }
        }, 30)
    }
})