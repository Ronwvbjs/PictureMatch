// app.js


var btn = document.getElementById('btn');
var content = document.getElementById('content');




//音声認識APIの使用
var speech = new webkitSpeechRecognition();


//言語を日本語に設定
speech.lang = "ja";




btn.addEventListener('click', function () {


    // ➀ボタンをクリックした時の処理

    // 音声認識をスタート
    speech.start();

});




speech.addEventListener('result', function (e) {


    // ➁音声認識した結果を得る処理
    // 音声認識で取得した情報を、コンソール画面に表示
    console.log(e);

});