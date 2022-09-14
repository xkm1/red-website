window.addEventListener('load', function(){
    var redBook = this.document.querySelector('.redBook');
    var ul = redBook.querySelector('ul');
    var lis = ul.querySelectorAll('li'); 
    var redBookHidden = this.document.querySelector('.redBookHidden');
    var closeBtn = this.document.querySelectorAll('.closeBtn');
    for(i=0;i<lis.length;i++){
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('click', function(){
            var index = this.getAttribute('index');
            switch(index){
                case '0':
                    redBook.children[index].style.display = 'block';
                    closeBtn[index].addEventListener('click', function(){
                        redBook.children[index].style.display = 'none';
                    })
                    break;
                case '1':
                    redBook.children[index].style.display = 'block';
                    closeBtn[index].addEventListener('click', function(){
                        redBook.children[index].style.display = 'none';
                    })
                    break;
                case '2':
                    redBook.children[index].style.display = 'block';
                    closeBtn[index].addEventListener('click', function(){
                        redBook.children[index].style.display = 'none';
                    })
                    break;
                case '3':
                    redBook.children[index].style.display = 'block';
                    closeBtn[index].addEventListener('click', function(){
                        redBook.children[index].style.display = 'none';
                    })
                    break;
                case '4':
                    redBook.children[index].style.display = 'block';
                    closeBtn[index].addEventListener('click', function(){
                        redBook.children[index].style.display = 'none';
                    })
                    break;
                case '5':
                    redBook.children[index].style.display = 'block';
                    closeBtn[index].addEventListener('click', function(){
                        redBook.children[index].style.display = 'none';
                    })
                    break;
                case '6':
                    redBook.children[index].style.display = 'block';
                    closeBtn[index].addEventListener('click', function(){
                        redBook.children[index].style.display = 'none';
                    })
                    break;
                case '7':
                    redBook.children[index].style.display = 'block';
                    closeBtn[index].addEventListener('click', function(){
                        redBook.children[index].style.display = 'none';
                    })
                    break;
                default:
            }
           
        }) 
    }
   
})