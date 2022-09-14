window.addEventListener('load', function(){
    var btnJump = this.document.querySelector('.btnJump');
    var scrollTo = this.document.documentElement.screenTop || this.document.body.scrollTop;
    var timer = -1;
    btnJump.addEventListener('click', function(){
        if(timer == -1){
            timer = setInterval(() => {
                scrollTo += 8;
                if(scrollTo >= 530){
                    clearInterval(timer);
                    timer = -1;
                }
                window.scrollTo(0, scrollTo)
            },20)
        }
        scrollTo = 0;
    })
})