$(function () {
    //id属性change-colorがクリックされたら
    $('#change-color').on('click',function(){
        //id属性target要素をcolorをredにする
        $('#target').css('color','red');  
        });
    
    //id属性change-textがクリックされたら
        $('#change-text').on('click',function(){
        //こんにちは→Helloへ変換
            $('#target').text('Hello!');
        });
    //id属性fade-outがクリックされたら
    $('#fade-out').on('click',function(){
        //フェードアウトする
        $('#target').fadeOut();
    });
    //id属性がfade-inがクリックされたら
    $('#fade-in').on('click',function(){
        //フェードインする
        $('#target').fadeIn();
    });
    });