window.addEventListener('load', function(){
    // 视频
    var leftVideo = this.document.querySelector('.leftVideo').querySelector('video');
    var sections = this.document.querySelector('.rightVideo').querySelectorAll('section');
    for(let i = 0; i < sections.length; i++){
        sections[i].addEventListener('click', function(){
            switch(i){
                case 0:
                    leftVideo.src = "http://dianbo02.jxtvcn.com.cn/jxwlgbdst/vod/2020/06/09/a9110fe4ab7243ffa193e5600f437d57/h264_800k_mp4.mp4";
                    leftVideo.poster = './img/跨越时空的回信第三季.png';
                    break;
                case 1:
                    leftVideo.src = "http://dianbo02.jxtvcn.com.cn/jxwlgbdst/vod/2020/09/23/0ae10345113b474ca823e9e481ac1679/h264_800k_mp4.mp4"
                    leftVideo.poster = './img/跨越时空的回信第三季第一集.png';
                    break;
                case 2:
                    leftVideo.src = "http://dianbo02.jxtvcn.com.cn/jxwlgbdst/vod/2020/09/30/92b856054f8c4400981000f0ebddc325/h264_800k_mp4.mp4";
                    leftVideo.poster = './img/跨越时空的回信第三季第二集.png';
                    break;
                case 3:
                    leftVideo.src = "http://dianbo02.jxtvcn.com.cn/jxwlgbdst/vod/2020/10/07/8111efc2f02b4ab78a9cb9dbd25ee2c3/h264_800k_mp4.mp4";
                    leftVideo.poster = './img/跨越时空的回信第三季第三集.png';
                    break;
                case 4:
                    leftVideo.src = "http://dianbo02.jxtvcn.com.cn/jxwlgbdst/vod/2020/10/14/a1c18da00bc64d55a494a84fbb5b902e/h264_800k_mp4.mp4";
                    leftVideo.poster = './img/跨越时空的回信第三季第四集.png';
                    break;
                default:
            }
        })
    }
   

    // 返回按钮
    var backBtn = this.document.querySelector('.backBtn');
    var timer = -1;
    backBtn.addEventListener('click', function(){
        // 点击的时候获取整个页面的滚动距离
        var scrollTo = document.documentElement.scrollTop;
        if(timer === -1){
            timer = setInterval(function(){
                // 步长写在定时器里面
                var step = scrollTo / 30; 
                step = step > 0 ? Math.ceil(step) : Math.floor(step); // 正值取大，负值取小
                scrollTo -= step;
                if(scrollTo <= 0){
                    scrollTo = 0;
                    clearInterval(timer);
                    timer = -1;
                }
                window.scrollTo(0, scrollTo);
            },10)
        }
        
    })
 })