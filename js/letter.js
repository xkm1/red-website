window.addEventListener('load', function(){
    this.setInterval(function(){
        let line = this.document.createElement('div');
        // 初始化rain属性
        line.style.position = 'fixed';
        line.style.height =  '300px';
        line.style.width = '2px';
        line.style.filter = 'blur(1px)';
        line.style.top = '0';
        line.style.backgroundColor = '#fffc00';
        line.style.left = Math.random()*this.window.screen.width + 'px';
        line.style.opacity = parseInt(Math.random()*10) / 10 + '';
        // 向body中添加子节点line
        this.document.body.appendChild(line);

       
       
        // 下雨特性
        var timer = this.setInterval(function(){
            var height = parseInt(line.style.top);
            var i = 1;
            i++;
            // 模拟重力
            line.style.top = height + 5 + Math.pow(i, 3) + 'px';
            if(line.style.top >= window.screen.height){
                clearInterval(timer);
                line.parentNode.removeChild(line);
            }
        },10)
    },500)
    
})