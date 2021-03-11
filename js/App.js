$(document).ready(function(){
    
    // login화면 버튼 클릭시 hidden 화면 나타남
    var loginClick = 0;
    $('#IDLogin').click(function () {
        var result = loginClick % 2;
        if (result == 0) {

            $('#IDLoginWrap').css({
                display: 'block'
            });
        } else if (result == 1) {
            $('#IDLoginWrap').css({
                display: 'none'
            });
        }
        loginClick++;
    });
    
    // location 지역선택 클릭시
    var a = 0;
    $('#locationAreaBtn').click(function () {
        var result = a % 2;
        if (result == 0) {

            $('#locationAreaBox').css({
                display: 'block'
            });

            
        } else if (result == 1) {
            $('#locationAreaBox').css({
                display: 'none'
            });
        }
        a++;
    });

    // location 서점선택 클릭시
    var b = 0;
    $('#locationStoreBtn').click(function () {
        var result = b % 2;
        if (result == 0) {

            $('#locationStoreBox1').css({
                display: 'block'
            });
            $('#locationStoreBox2').css({
                display: 'block'
            });
        } else if (result == 1) {
            $('#locationStoreBox1').css({
                display: 'none'
            });
            $('#locationStoreBox2').css({
                display: 'none'
            });
        }
        b++;
    });

    var c = 0;
    $('#inventoryStore').click(function () {
        var result = c % 2;
        if (result == 0) {

            $('#inventoryStoreWrap').css({
                display: 'block'
            });
          
        } else if (result == 1) {
            $('#inventoryStoreWrap').css({
                display: 'none'
            });
           
        }
        c++;
    });

    // main화면 , 실시간 검색어
    var liveSearchClick = 0;
    $('#realTimeSearchMask').click(function(){
        liveSearchClick++;
        if(liveSearchClick > 4){
            liveSearchClick = 0;
        }
        $('#realTimeSearchWarp').animate({
            top : -41*liveSearchClick,
        });
    });

    setInterval(function(){
        $('.realTimeSearchText:first').appendTo('#realTimeSearchWarp');
    },2000);

    //main Img 자동 슬라이드

    var mainImgClick = 0;;
    $('.mainImgContainer').click(function(){
        mainImgClick++;
        if(mainImgClick>2){
            mainImgClick=0;
        }
        $('.mainImgWrapper').animate({
            left : -500*mainImgClick,
        });
    });

    setInterval(function(){
        $('.mainImgContainer').trigger('click');
    },2000);

    // liveRank 버튼 클릭시 효과
    $('#liveRankStore li').eq(0).click(function(){
        $(this).addClass('on'),
        $('#liveRankStore li').eq(1).removeClass('on'),
        $('#liveRankStore li').eq(2).removeClass('on'),
        $('#liveRankStore li').eq(3).removeClass('on'),
        $('#liveRankStore li').eq(4).removeClass('on')
    });
    $('#liveRankStore li').eq(1).click(function(){
        $(this).addClass('on'),
        $('#liveRankStore li').eq(0).removeClass('on'),
        $('#liveRankStore li').eq(2).removeClass('on'),
        $('#liveRankStore li').eq(3).removeClass('on'),
        $('#liveRankStore li').eq(4).removeClass('on')
    });
    $('#liveRankStore li').eq(2).click(function(){
        $(this).addClass('on'),
        $('#liveRankStore li').eq(1).removeClass('on'),
        $('#liveRankStore li').eq(0).removeClass('on'),
        $('#liveRankStore li').eq(3).removeClass('on'),
        $('#liveRankStore li').eq(4).removeClass('on')
    });
    $('#liveRankStore li').eq(3).click(function(){
        $(this).addClass('on'),
        $('#liveRankStore li').eq(1).removeClass('on'),
        $('#liveRankStore li').eq(2).removeClass('on'),
        $('#liveRankStore li').eq(0).removeClass('on'),
        $('#liveRankStore li').eq(4).removeClass('on')
    });
    $('#liveRankStore li').eq(4).click(function(){
        $(this).addClass('on'),
        $('#liveRankStore li').eq(1).removeClass('on'),
        $('#liveRankStore li').eq(2).removeClass('on'),
        $('#liveRankStore li').eq(3).removeClass('on'),
        $('#liveRankStore li').eq(0).removeClass('on')
    });

    //login 자동 저장 버튼
    var loginCheckClick = 0;
    var loginCheckClickNum = 0;

    $('.loginID').click(function(){
        
        loginCheckClickNum = loginCheckClick % 2;

        if(loginCheckClickNum == 0){
            $('#loginIconCheck').css({
                display : 'block'
            });
            $('#loginIconNondCheck').css({
                display : 'none'
            });
        }
        else if (loginCheckClickNum == 1){
            $('#loginIconCheck').css({
                display : 'none'
            });
            $('#loginIconNondCheck').css({
                display : 'block'
            });
        }
        loginCheckClick++;
    });


    var AutologinCheckClick = 0;
    var AutologinCheckClickNum = 0;

    $('.loginAuto').click(function(){
        
        AutologinCheckClickNum = AutologinCheckClick % 2;

        if(AutologinCheckClickNum == 0){
            $('#loginAutoCheck').css({
                display : 'block'
            });
            $('#loginAutoNoneCheck').css({
                display : 'none'
            });
        }
        else if (AutologinCheckClickNum == 1){
            $('#loginAutoCheck').css({
                display : 'none'
            });
            $('#loginAutoNoneCheck').css({
                display : 'block'
            });
        }
        AutologinCheckClick++;
    });
   
    //다크모드 버튼

    var darkModeClick = 0;
    var darkModeClickNum = 0;

    $('.darkBtn').click(function(){
        
        darkModeClickNum = darkModeClick % 2;

        if(darkModeClickNum == 0){
            $('.darkmodeOff').css({
                display : 'block'
            });
            $('.darkmodeOn').css({
                display : 'none'
            });
            $('body').css({
                backgroundColor : '#252525'
            });
            $('.newBookPageContentRight').css({
                color : 'gray'
            });
            $('a').css({
                color : 'gray'
            });

        }
        else if (darkModeClickNum == 1){
            $('.darkmodeOff').css({
                display : 'none'
            });
            $('.darkmodeOn').css({
                display : 'block'
            });
            $('body').css({
                backgroundColor : 'white'
            });
            
                
        }
        darkModeClick++;
    });

    // 베스트 페이지 형태 변경 버트
    var transformIconClick = 0;
    var transformIconClickNum = 0;

    $('#bestPageTransformBtn').click(function(){
        
        transformIconClickNum = transformIconClick % 2;

        if(transformIconClickNum == 0){
            $('#transformIcon2').css({
                display : 'block'
            });
            $('#transformIcon1').css({
                display : 'none'
            });
        }
        else if (transformIconClickNum == 1){
            $('#transformIcon2').css({
                display : 'none'
            });
            $('#transformIcon1').css({
                display : 'block'
            });
        }
        transformIconClick++;
    });

    // 홈 실시간 인기순위 페이지
    $('.liveRankSwiper').eq(1).css({
        display : 'none'
    });
    $('.liveRankSwiper').eq(2).css({
        display : 'none'
    });
    $('.liveRankSwiper').eq(3).css({
        display : 'none'
    });
    $('.liveRankSwiper').eq(4).css({
        display : 'none'
    });

    $('#liveRankStore li').eq(0).click(function(){
        $('.liveRankSwiper').eq(0).css({
            display : 'block'
        });
        $('.liveRankSwiper').eq(1).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(2).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(3).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(4).css({
            display : 'none'
        });
    });
    $('#liveRankStore li').eq(1).click(function(){
        $('.liveRankSwiper').eq(1).css({
            display : 'block'
        });
        $('.liveRankSwiper').eq(0).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(2).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(3).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(4).css({
            display : 'none'
        });
    });
    $('#liveRankStore li').eq(2).click(function(){
        $('.liveRankSwiper').eq(2).css({
            display : 'block'
        });
        $('.liveRankSwiper').eq(1).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(0).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(3).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(4).css({
            display : 'none'
        });
    });
    $('#liveRankStore li').eq(3).click(function(){
        $('.liveRankSwiper').eq(3).css({
            display : 'block'
        });
        $('.liveRankSwiper').eq(1).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(2).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(0).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(4).css({
            display : 'none'
        });
    });
    $('#liveRankStore li').eq(4).click(function(){
        $('.liveRankSwiper').eq(4).css({
            display : 'block'
        });
        $('.liveRankSwiper').eq(1).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(2).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(3).css({
            display : 'none'
        });
        $('.liveRankSwiper').eq(0).css({
            display : 'none'
        });
    });

}); // End