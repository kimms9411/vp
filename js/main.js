$(document).ready(function(){ 

   /* 메인 메뉴를 클릭하면 서브가 내려옴 */
   $('.gnb>ul>li>a').click(function(){

        $('.sub_wrap').slideUp();
     
     //  $(this).siblings('.sub_wrap').slideDown();       //A.siblings(B) :A의 형제레벨의 B를 찾는다

    if($(this).hasClass('active') == false){       
        $(this).siblings('.sub_wrap').slideDown(500);
        $(this).addClass('active'); 
        $(this).parent('li').addClass('on');  
    } else  {
        $(this).siblings('.sub_wrap').slideUp(200);
        $(this).removeClass('active'); 
        $(this).parent('li').removeClass('on'); 
    }
    
   });


    /*모바일 - 메뉴가 왼쪽에서 튀어나옴*/
    $('.btn_all').click(function(){
        $('.gnb').animate({left:0},500,'swing');
        $('.gnb_dim').animate({left:0},50,'swing');
    });
    $('.btnClose_m').click(function(){
        $('.gnb').animate({left:-350},500,'swing');
        $('.gnb_dim').animate({left:'-100%'},50,'swing');
    });

    /*모바일 서브메뉴를 누르면 서브의 서브가 나옴*/
    $('.subhas>a').click(function(){
        if($(this).hasClass('active2') == false) { //서브의서브가 닫혀있을때
             $(this).siblings('ul').slideDown();
             $(this).addClass('active2'); 
             $(this).parent('li').addClass('on');
         } else {
            $(this).siblings('ul').slideUp();
            $(this).removeClass('active2'); 
            $(this).parent('li').removeClass('on');
         }
    });
});