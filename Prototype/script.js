var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.continuous = true;
//����ݒ�
//recognition.lang = 'en-US';
//���r�F��
recognition.interimResults = true;
//��֌�␔�i2�ȏ�ő�֌�⃊�X�g�\���j
recognition.maxAlternatives = 1;