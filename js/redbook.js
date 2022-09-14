window.addEventListener('load', function(){
    const ul = this.document.querySelector('section ul');
    const favorites01 = ul.querySelector('#aside-01').querySelectorAll('span');
    const favorites02 = ul.querySelector('#aside-02').querySelectorAll('span');
    const favorites03 = ul.querySelector('#aside-03').querySelectorAll('span');
    const favorites04 = ul.querySelector('#aside-04').querySelectorAll('span');
    const favorites05 = ul.querySelector('#aside-05').querySelectorAll('span');
    const favorites06 = ul.querySelector('#aside-06').querySelectorAll('span');
    
    for(let i = 0; i < favorites01.length; i++){
        favorites01[i].addEventListener('click', function(){
            // 星星之后
            if(this.style.color === 'red' && i < favorites01.length - 1 && favorites01[i+1].style.color === ''){
                for(var j = 0; j <= i; j++){
                    favorites01[j].className = 'iconfont icon-favorite';
                    favorites01[j].style.color = '';    
                }        
            }
            else if(this.style.color === 'red' && i === favorites01.length - 1){
                for(var j = 0; j <= i; j++){
                    favorites01[j].className = 'iconfont icon-favorite';
                    favorites01[j].style.color = '';    
                } 
            }
            // 星星之前
            else{
                // 排他
                for(var j = 0; j < favorites01.length; j++){
                    favorites01[j].className = 'iconfont icon-favorite';
                    favorites01[j].style.color = '';    
                }
                // 重新评价
                for(var j = 0; j <= i; j++){
                    favorites01[j].className = 'iconfont icon-shoucang';
                    favorites01[j].style.color = 'red';   
                }
            }
        })
    }

    
    for(let i = 0; i < favorites02.length; i++){
        favorites02[i].addEventListener('click', function(){
            // 星星之后
            if(this.style.color === 'red' && i < favorites02.length - 1 && favorites02[i+1].style.color === ''){
                for(var j = 0; j <= i; j++){
                    favorites02[j].className = 'iconfont icon-favorite';
                    favorites02[j].style.color = '';    
                }        
            }
            else if(this.style.color === 'red' && i === favorites01.length - 1){
                for(var j = 0; j <= i; j++){
                    favorites02[j].className = 'iconfont icon-favorite';
                    favorites02[j].style.color = '';    
                } 
            }
            else{
                // 评价
                for(var j = 0; j < favorites02.length; j++){
                    favorites02[j].className = 'iconfont icon-favorite';
                    favorites02[j].style.color = '';    
                }
                for(var j = 0; j <= i; j++){
                    favorites02[j].className = 'iconfont icon-shoucang';
                    favorites02[j].style.color = 'red';   
                }
            } 
        })
      
    }


    for(let i = 0; i < favorites03.length; i++){
        favorites03[i].addEventListener('click', function(){
            // 星星之后
            if(this.style.color === 'red' && i < favorites03.length - 1 && favorites03[i+1].style.color === ''){
                for(var j = 0; j <= i; j++){
                    favorites03[j].className = 'iconfont icon-favorite';
                    favorites03[j].style.color = '';    
                }        
            }
            else if(this.style.color === 'red' && i === favorites01.length - 1){
                for(var j = 0; j <= i; j++){
                    favorites03[j].className = 'iconfont icon-favorite';
                    favorites03[j].style.color = '';    
                } 
            }
            else{
                // 评价
                for(var j = 0; j < favorites03.length; j++){
                    favorites03[j].className = 'iconfont icon-favorite';
                    favorites03[j].style.color = '';    
                }
                for(var j = 0; j <= i; j++){
                    favorites03[j].className = 'iconfont icon-shoucang';
                    favorites03[j].style.color = 'red';   
                }
            }
        }) 
    }


    for(let i = 0; i < favorites04.length; i++){
        favorites04[i].addEventListener('click', function(){
            // 星星之后
            if(this.style.color === 'red' && i < favorites04.length - 1 && favorites04[i+1].style.color === ''){
                for(var j = 0; j <= i; j++){
                    favorites04[j].className = 'iconfont icon-favorite';
                    favorites04[j].style.color = '';    
                }        
            }
            else if(this.style.color === 'red' && i === favorites01.length - 1){
                for(var j = 0; j <= i; j++){
                    favorites04[j].className = 'iconfont icon-favorite';
                    favorites04[j].style.color = '';    
                } 
            }
            else{
                // 评价
                for(var j = 0; j < favorites01.length; j++){
                    favorites04[j].className = 'iconfont icon-favorite';
                    favorites04[j].style.color = '';    
                }
                for(var j = 0; j <= i; j++){
                    favorites04[j].className = 'iconfont icon-shoucang';
                    favorites04[j].style.color = 'red';   
                }
            }
        })    
    }


    for(let i = 0; i < favorites05.length; i++){
        favorites05[i].addEventListener('click', function(){
            // 星星之后
            if(this.style.color === 'red' && i < favorites05.length - 1 && favorites05[i+1].style.color === ''){
                for(var j = 0; j <= i; j++){
                    favorites05[j].className = 'iconfont icon-favorite';
                    favorites05[j].style.color = '';    
                }        
            }
            else if(this.style.color === 'red' && i === favorites01.length - 1){
                for(var j = 0; j <= i; j++){
                    favorites05[j].className = 'iconfont icon-favorite';
                    favorites05[j].style.color = '';    
                } 
            }
            else{
                // 评价
                for(var j = 0; j < favorites01.length; j++){
                    favorites05[j].className = 'iconfont icon-favorite';
                    favorites05[j].style.color = '';    
                }
                for(var j = 0; j <= i; j++){
                    favorites05[j].className = 'iconfont icon-shoucang';
                    favorites05[j].style.color = 'red';   
                }
            }
        })  
    }


    for(let i = 0; i < favorites06.length; i++){
        favorites06[i].addEventListener('click', function(){
            // 星星之后
            if(this.style.color === 'red' && i < favorites06.length - 1 && favorites06[i+1].style.color === ''){
                for(var j = 0; j <= i; j++){
                    favorites06[j].className = 'iconfont icon-favorite';
                    favorites06[j].style.color = '';    
                }        
            }
            else if(this.style.color === 'red' && i === favorites01.length - 1){
                for(var j = 0; j <= i; j++){
                    favorites06[j].className = 'iconfont icon-favorite';
                    favorites06[j].style.color = '';    
                } 
            }
            else{
                // 评价
                for(var j = 0; j < favorites06.length; j++){
                    favorites06[j].className = 'iconfont icon-favorite';
                    favorites06[j].style.color = '';    
                }
                for(var j = 0; j <= i; j++){
                    favorites06[j].className = 'iconfont icon-shoucang';
                    favorites06[j].style.color = 'red';   
                }
            }
        }) 
    }
})