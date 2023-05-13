var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.continuous = true;
//����ݒ�
recognition.lang = 'ja'; //japanese
//�b��F���o��
recognition.interimResults = true;
//��֌�␔�i2�ȏ�ő�֌�⃊�X�g�\���j
recognition.maxAlternatives = 1;

recognition.onresult = function (event) {
    var results = event.results;
    for (var i = event.resultIndex; i < results.length; i++)
        document.getElementById('result_text').innerHTML = results[i][0].transcript;
}
recognition.start();