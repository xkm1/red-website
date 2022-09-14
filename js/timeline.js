(function(){
    "use strict";
    var items = document.querySelectorAll('.timeLine li')
    // for(var i=0;i<items.length;i++){
    //     var scrollTop = items[i].offsetTop;
    //     console.log(scrollTop);
    // }
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function callbackFun(){
        for(let i=0;i<items.length;i++){
            if(isElementInViewport(items[i])){
                items[i].classList.add('in-view')
            }
        }
    }
    window.addEventListener('load', callbackFun);
    window.addEventListener('scroll', callbackFun);
    window.addEventListener('resize', callbackFun);
})()