window.addEventListener('load', function(){
    var hybIntroduction = this.document.querySelector('#hybIntroduction');
    var hybFriends = this.document.querySelector('#hybFriends');
    var hybSlogan = this.document.querySelector('#hybSlogan');
    
    var hyb_introduction = this.document.querySelector('#hyb_introduction');
    var hyb_friends = this.document.querySelector('#hyb_friends');
    var hyb_slogan = this.document.querySelector('#hyb_slogan');

    var lis = this.document.querySelector('#topNavigation').querySelector('ul').querySelectorAll('li');
    lis[0].style.borderBottom = '2px solid #2ebf91';
    lis[0].style.color = 'rgb(255, 255, 255)';
    for(let i = 0; i < lis.length; i++){
        lis[i].addEventListener('click', function(){
            for(let j = 0; j < lis.length; j++){
                lis[j].style.color = 'rgb(174, 170, 170)';
                lis[j].style.borderBottom = '2px solid transparent';
            }
            this.style.color = 'rgb(255, 255, 255)';
            this.style.borderBottom = '2px solid #2ebf91';
        })
    }
    

    // 人物介绍
     hybIntroduction.addEventListener('click', function(){
        // document.styleSheets[0].insertRule('#hybIntroduction:after{  background-color: #2ebf91; }');
        this.style.color = 'white';
        hyb_introduction.style.display = 'block'; 
        hyb_friends.style.display = 'none';
        hyb_slogan.style.display = 'none';
    })
  
    // 亲友情深   
    hybFriends.addEventListener('click', function(){
        hyb_introduction.style.display = 'none';
        hyb_friends.style.display = 'block';
        hyb_slogan.style.display = 'none';
    })
    
    // 人物标语  
    hybSlogan.addEventListener('click', function(){
        hyb_introduction.style.display = 'none';
        hyb_friends.style.display = 'none';
        hyb_slogan.style.display = 'block';
    })

    // 滚轮条设置
    var bottomIntroduction = this.document.querySelector('#bottomIntroduction');
    var webkitScrollbar = this.document.querySelector('-webkit-scrollbar');
    bottomIntroduction.addEventListener('mouseover', function(){
        
    })


    // 轮播图-人物介绍   
    var icon_left1 = this.document.querySelector('.leftArrow1');
    var icon_right1 = this.document.querySelector('.rightArrow1');
    var imgBox1 = this.document.querySelector('.banner1');
    var ul1 = imgBox1.querySelector('ul'); 
    let index = 0;

    imgBox1.addEventListener('mouseover', function(){
        icon_left1.style.opacity = 1;
        icon_right1.style.opacity = 1;
        clearInterval(timer1);
        timer1 = null; //清除定时器变量
    })
    imgBox1.addEventListener('mouseout', function(){
        icon_left1.style.opacity = 0;
        icon_right1.style.opacity = 0;
        // timer1 = setInterval(function(){
        //     icon_right1.click();
        // },4000)
    })

    icon_right1.addEventListener('click', function(){
        if(index == ul1.children.length -1){
            ul1.style.left = 0;
            index = 0;
        }
        index++;
        animation(ul1, -index*imgBox1.offsetWidth) 
    })
  
    icon_left1.addEventListener('click', function(){
        if(index == 0){
            index = ul1.children.length - 1;
            ul1.style.left = -index*imgBox1.offsetWidth + 'px'; 
        }
        index--;
        animation(ul1, -index*imgBox1.offsetWidth)
    })
    // if(this.document.getElementById('#hyb_introduction')){
    //     var timer1 = this.setInterval(function(){
    //         icon_right1.click();
    //     },4000)
    // }else{
    //     this.clearInterval(timer1);
    // }
    

    // 轮播图-亲友深情
    var icon_left2 = this.document.querySelector('.leftArrow2');
    var icon_right2 = this.document.querySelector('.rightArrow2');
    var imgBox2 = this.document.querySelector('.banner2');
    var ul2 = imgBox2.querySelector('ul'); 
    let index2 = 0;

    imgBox2.addEventListener('mouseover', function(){
        icon_left2.style.opacity = 1;
        icon_right2.style.opacity = 1;
        clearInterval(timer1);
        timer1 = null; //清除定时器变量
    })
    imgBox2.addEventListener('mouseout', function(){
        icon_left2.style.opacity = 0;
        icon_right2.style.opacity = 0;
        // timer1 = setInterval(function(){
        //     icon_right2.click();
        // },4000)
    })

    icon_right2.addEventListener('click', function(){
        if(index2 == ul2.children.length -1){
            ul2.style.left = 0;
            index2 = 0;
        }
        index2++;
        animation(ul2, -index2*imgBox2.offsetWidth) 
    })
  
    icon_left2.addEventListener('click', function(){
        if(index2 == 0){
            index2 = ul2.children.length - 1;
            ul2.style.left = -index2*imgBox2.offsetWidth + 'px'; 
        }
        index2--;
        animation(ul2, -index2*imgBox2.offsetWidth)
    })
    // var timer1 = this.setInterval(function(){
    //     icon_right2.click();
    // },4000)

    // 轮播图-亲友深情
    var icon_left3 = this.document.querySelector('.leftArrow3');
    var icon_right3 = this.document.querySelector('.rightArrow3');
    var imgBox3 = this.document.querySelector('.banner3');
    var ul3 = imgBox3.querySelector('ul'); 
    let index3 = 0;

    imgBox3.addEventListener('mouseover', function(){
        icon_left3.style.opacity = 1;
        icon_right3.style.opacity = 1;
        clearInterval(timer1);
        timer1 = null; //清除定时器变量
    })
    imgBox3.addEventListener('mouseout', function(){
        icon_left3.style.opacity = 0;
        icon_right3.style.opacity = 0;
        // timer1 = setInterval(function(){
        //     icon_right3.click();
        // },4000)
    })

    icon_right3.addEventListener('click', function(){
        if(index3 == ul3.children.length -1){
            ul3.style.left = 0;
            index3 = 0;
        }
        index3++;
        animation(ul3, -index3*imgBox3.offsetWidth) 
    })

    icon_left3.addEventListener('click', function(){
        if(index3 == 0){
        index3 = ul2.children.length - 1;
            ul3.style.left = -index3*imgBox3.offsetWidth + 'px'; 
        }
        index3--;
        animation(ul3, -index3*imgBox3.offsetWidth)
    })
    var timer1 = this.setInterval(function(){
        icon_right3.click();
    },4000)

    //移动动画
    function animation(object, target, callback) {   
        var timer = null;
        // 实参时函数，相当于 callback = function() {}; 
        clearInterval(object.timer) 
        object.timer = setInterval(function() {
        // 步长写在定时器里面
        var step = (target - object.offsetLeft) / 10; 
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
})