var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.continuous = true;
//言語設定
recognition.lang = 'ja'; //japanese
//暫定認識出力
recognition.interimResults = true;
//代替候補数（2以上で代替候補リスト表示）
recognition.maxAlternatives = 1;

recognition.onresult = function (event) {
    var results = event.results;
    for (var i = event.resultIndex; i < results.length; i++)
        document.getElementById('result_text').innerHTML = results[i][0].transcript;
}
recognition.start();