window.addEventListener('load', function(){
    var imgBox = this.document.querySelector('.imgBox');
    var personImg = document.querySelector('#personImg');
    personImg.addEventListener('mouseenter', function(){
        imgBox.className = 'imgBox navRightZoom';
        personImg.className = 'personImg navRightZoom';
    })
    personImg.addEventListener('mouseout', function(){
        // imgBox.className = 'imgBox';
        personImg.className = 'personImg';
    })
    
})
