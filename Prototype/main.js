var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

var constrains = { video: true, audio: true }// �f���E�������擾���邩�̐ݒ�

// IFrame Player API �̓ǂݍ���
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube�̖��ߍ���
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(
        'youtube', // ���ߍ��ޏꏊ�̎w��
        {
            width: 640, // �v���[���[�̕�
            height: 390, // �v���[���[�̍���
            videoId: 'w281vHk0T_w', // YouTube��VideoID
            // �p�����[�^�̐ݒ�
         playerVars: {
                rel: 0, // �Đ��I����Ɋ֘A�����\�����邩�ǂ����ݒ�(0:OFF,1:ON)
             autoplay: 0, // �����Đ����邩�ǂ����ݒ�(0:OFF,1:ON)
             loop: 1, // ���[�v�Đ����邩�ǂ����ݒ�(0:OFF,1:ON)
            }
        }
    );
}

recognition.continuous = true;
//����ݒ�
recognition.lang = 'ja-JP'; //japanese
//�b��F���o��
recognition.interimResults = true;
//��֌�␔�i2�ȏ�ő�֌�⃊�X�g�\���j
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