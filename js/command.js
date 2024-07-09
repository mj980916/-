$(function(){

    $(".main li, .sub_bg").mouseover(function(){
        $(".sub, .sub_bg").stop() .slideDown();

    })//mouseover

    $(".main li, .sub_bg").mouseout(function(){
        $(".sub, .sub_bg").stop() .slideUp();

    })//mouseout

    // ---- 이미지 영역 ---- 

    // $(".fade li").eq(0).siblings().hide();
            //or ↓
    $(".fade li").hide()
    $(".fade li").eq(0).show();

    var n = 0;  //이미지가 3개뿐이라 인덱스번호는 0~2까지

    setInterval(function(){

        // $(".fade li").eq(n).fadeOut();   or 
        if(n == 2){
            n=0;
        }else{
            n++;
        } //if
        $(".fade li").eq(n).fadeIn().siblings().fadeOut();

        console.log(n);

    }, 2500)//setInterval

})//jQ fin.