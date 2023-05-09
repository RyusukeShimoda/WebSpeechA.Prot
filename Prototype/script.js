var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.continuous = true;
//言語設定
//recognition.lang = 'en-US';
//中途認識
recognition.interimResults = true;
//代替候補数（2以上で代替候補リスト表示）
recognition.maxAlternatives = 1;