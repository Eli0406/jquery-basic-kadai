
//読み込み完了した時「loadイベントが発生しました」メッセージ表示
$(window).on('load',function() {
    console.log('loadイベントが発生しました');
});
//画面スクロールした時「scrollイベントが発生しました」のメッセージ表示
$(document).on('scroll',function() {
    console.log('scrollイベントが発生しました');
});
