var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

var constrains = { video: true, audio: true }// 映像・音声を取得するかの設定

// IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTubeの埋め込み
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(
        'youtube', // 埋め込む場所の指定
        {
            width: 640, // プレーヤーの幅
            height: 390, // プレーヤーの高さ
            videoId: 'w281vHk0T_w', // YouTubeのVideoID
            // パラメータの設定
         playerVars: {
                rel: 0, // 再生終了後に関連動画を表示するかどうか設定(0:OFF,1:ON)
             autoplay: 0, // 自動再生するかどうか設定(0:OFF,1:ON)
             loop: 1, // ループ再生するかどうか設定(0:OFF,1:ON)
            }
        }
    );
}

recognition.continuous = true;
//言語設定
recognition.lang = 'ja-JP'; //japanese
//暫定認識出力
recognition.interimResults = true;
//代替候補数（2以上で代替候補リスト表示）
recognition.maxAlternatives = 1;

recognition.onresult = function (event) {
    var results = event.results;
    for (var i = event.resultIndex; i < results.length; i++) {
        document.getElementById('result_text').innerHTML += results[i][0].transcript;
        if (results.isFinal) {
            document.getElementById('result_text').innerHTML = results[0].isFinal;
        }
    }
}

recognition.start();