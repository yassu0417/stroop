var par_info = {};

var informedConsent = {
  type: 'survey-text',
  questions: [{
      prompt: '<span style = "font-size: 14pt"><b>以上の内容をよく読んで、理解した上で実験参加に同意いただける方は下の空欄にお名前の入力をお願いします。同意されない方は、ウィンドウを閉じてください。</b></span>'+
      '<div style = "font-size: 14pt; text-align: left;"><p>この度は本実験に参加していただき、誠にありがとうございます。参加にあたり、以下の説明をスクロールしてお読みください。</p>' +
      '<p><b>1．研究目的</b>' +
      '<br>本研究は、認知課題を行う際に音楽を聴取することが与える影響について調査することを目的としております。</p>' +
      '<p><b>2．研究内容</b>' +
      '<br>本研究では、音楽を聴取しながらストループ課題を行っていただき、その後簡単な質問紙に答えていただきます。課題の実行と質問紙は合わせて15分程度で終了します。なお、これから行う質問紙や課題は、あなた個人の性格や能力を個別に評価することを目的とはしておりません。' +
      '<p><b>3．危険性ならびに不利益</b>' +
      '<br>質問紙への回答や課題中、もし不快感を感じることがあったら、ご自身の意志で研究参加をいつでも中止することができます。参加の中止はいつ、いかなる理由でも可能です。また、参加の中止、不参加に伴う不利益は一切生じません。</p>' +
      '<p><b>4．参加者の権利</b>' +
      '<br>本研究の参加は皆様の自由意志によるものです。本研究に参加することに同意しても、それはいつでも撤回することができます。同意を撤回しても、いかなる不利益を受けることはありません。参加に同意した後に、参加途中で撤回する場合は、そのままウェブブラウザを閉じていただけると同意撤回したとみなします。参加途中で参加を撤回された場合は、そのデータをその後の研究で使用いたしません。また、最後まで参加したもののご自身の研究データを研究に使用してほしくない場合は、以下の連絡先にその旨をご連絡いただければ、その後の研究でそのデータを使用いたしません。</p>' +
      '<p><b>5.謝礼</b>' +
      '<br>謝礼につきましては、参加点とさせていただきます。</p>' +
      '<p><b>6.研究結果の使用およびプライバシーの保護</b>' +
      '<br>参加された方の質問紙への回答や課題への反応は全て匿名で扱われ、データからあなたが特定されることはありません。本研究の結果は、学術論文や学会発表などを通じて公表される可能性があります。ただし、その際も統計的に処理した結果のみが公表されるため、特定の個人に焦点を当てた発表は行いません。' +
      '<br>なお，この研究参加にあたり，画面上に呈示する画像などを皆様のパソコンに一時的にダウンロードします。最後まで研究に参加いただいた場合は、ダウンロードしたファイルは削除し、反応などのデータのみを取得します。その他の情報には一切アクセスいたしません。予めご了承ください。</p>' +
      '<p><b>7.研究に関する問い合わせ先</b>' +
      '<br>研究責任者: 及川 昌典(同志社大学心理学部教授)' +
      '<br>Email: moikawa@mail.doshisha.ac.jp' +
      '<br>研究実施者: 安永 俊樹, 西村 知華, 上田 颯都(同志社大学及川ゼミ)' +
      '<br>Email: cgvb0181@mail2.doshisha.ac.jp</p></div>',
      columns: 10,
      required: true,
      name: 'participantname'
  }],
  button_label: '次へ',
  on_finish: function(data) {
    par_info.name = JSON.parse(data.responses).participantname
  }
};

var PC_check = {
  type: 'survey-multi-select',
  questions: [{
      prompt:'<p>本実験はスマートフォンでは実施できません。必ずPCで行うようにしてください。PCで行っている場合はチェックをお願いします。</p>',
      options: ['<span style = "font-size: 14pt">私はPCで本実験に参加しています。</span>'],
      required: true,
      name: 'approval_2'
  }],
  button_label: '次へ'
};


var par_id = {
  type: 'survey-text',
  questions: [
    {prompt: '学籍番号を入力してください', columns: 10, required: true, name: 'participantID'},
  ],
  button_label: '次へ',
  on_finish: function(data) {
    par_info.id = JSON.parse(data.responses).participantID // 一時保存
  }
};

var age = {
  type: 'survey-text',
  questions: [
    {prompt: '年齢を入力してください', columns: 3, required: true, name: 'age'},
  ],
  button_label: '次へ',
  on_finish: function(data) {
    par_info.age = JSON.parse(data.responses).age // 一時保存
  }
};

var gender = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "性別を選択してください", options: ['男性', '女性', 'その他'], required: true, horizontal: true, name: 'gender'},
  ],
  button_label: '次へ',
  on_finish: function(data) {
    par_info.gender = JSON.parse(data.responses).gender // 一時保存
  }
};

var fullscreen = {
  type: 'fullscreen',
  message: '<p>以下のボタンをクリックすると，画面は全画面表示に切り替わります。全画面表示を止めたい場合はEscキーを押してください。</p>' +
           '<p>全画面になると課題が開始されます。</p>',
  button_label: "全画面表示に切り替え",
  fullscreen_mode: true
};

var instructions = {
type: 'html-keyboard-response',
stimulus: "<p style = 'text-align:left'>これからストループ課題を行ってもらいます</p>" +
          "<p style = 'text-align:left'>この課題では、以下のような色のついた単語を見てもらいます</p>"+
          "<p style='color:red;font-size:80pt;'>あお</p>" +
          "<p style = 'text-align:left'>単語の意味は無視して、それぞれの単語の「色」を以下のキーボードを押して回答してください</p>"+
          "<p style = 'text-align:left'>・<span style = 'color red'>あか</span>の単語ならRを押す</p>" +
          "<p style = 'text-align:left'>・<span style = 'color blue'>あお</span>の単語ならBを押す</p>" +
          "<p style = 'text-align:left'>・<span style = 'color green'>みどり</span>の単語ならGを押す</p>" +
          "<p style = 'text-align:left'>・<span style = 'color yellow'>きいろ</span>の単語ならYを押す</p>" +
          "<p style = 'text-align:left'>上の例の場合だと、赤色で「あお」と書いてありますので、Rを押してください</p>"+
          "<p style = 'text-align:left'>まず練習を行います。準備ができたらいずれかのキーを押して課題を始めてください。</p>",
post_trial_gap:2000
};

var stimuli = [
 {
   stimulus: "<p style='color:red;font-size:80pt;'>あか</p>",
   data: { no:'1', stim_type: 'congruent', correct_key_press: '82'}
 },
 {
   stimulus: "<p style='color:yellow;font-size:80pt;'>あか</p>",
   data: { no:'2', stim_type: 'incongruent', correct_key_press: '89'}
 },
 {
   stimulus: "<p style='color:blue;font-size:80pt;'>あか</p>",
   data: { no:'3', stim_type: 'incongruent', correct_key_press: '66'}
 },
 {
   stimulus: "<p style='color:green;font-size:80pt;'>あか</p>",
   data: { no:'4', stim_type: 'incongruent', correct_key_press: '71'}
 },
 {
   stimulus: "<p style='color:green;font-size:80pt;'>みどり</p>",
   data: { no:'5', stim_type: 'congruent', correct_key_press: '71'}
 },
 {
   stimulus: "<p style='color:red;font-size:80pt;'>みどり</p>" ,
   data: { no:'6', stim_type: 'incongruent', correct_key_press: '82'}
 },
 {
   stimulus: "<p style='color:yellow;font-size:80pt;'>みどり</p>",
   data: { no:'7', stim_type: 'incongruent', correct_key_press: '89'}
 },
 {
   stimulus: "<p style='color:blue;font-size:80pt;'>みどり</p>",
   data: { no:'8', stim_type: 'incongruent', correct_key_press: '66'}
 },
 {
   stimulus: "<p style='color:red;font-size:80pt;'>き</p>",
   data: { no:'9', stim_type: 'incongruent', correct_key_press: '82'}
 },
 {
   stimulus: "<p style='color:green;font-size:80pt;'>き</p>",
   data: { no:'10', stim_type: 'incongruent', correct_key_press: '71'}
 },
 {
   stimulus: "<p style='color:yellow;font-size:80pt;'>き</p>",
   data: { no:'11', stim_type: 'congruent', correct_key_press: '89'}
 },
 {
   stimulus: "<p style='color:blue;font-size:80pt;'>き</p>",
   data: { no:'12', stim_type: 'incongruent', correct_key_press: '66'}
 },
 {
   stimulus: "<p style='color:red;font-size:80pt;'>あお</p>",
   data: { no:'13', stim_type: 'incongruent', correct_key_press: '82'}
 },
 {
   stimulus: "<p style='color:green;font-size:80pt;'>あお</p>",
   data: { no:'14', stim_type: 'incongruent', correct_key_press: '71'}
 },
 {
   stimulus: "<p style='color:yellow;font-size:80pt;'>あお</p>",
   data: { no:'15', stim_type: 'incongruent', correct_key_press: '89'}
 },
 {
   stimulus: "<p style='color:blue;font-size:80pt;'>あお</p>",
   data: { no:'16', stim_type: 'congruent', correct_key_press: '66'}
 }
];

var fixation = {
 type: 'html-keyboard-response',
 stimulus: '<div style="font-size:60px;">+</div>',
 choices: jsPsych.NO_KEYS,
 trial_duration: 1000,
 post_trial_gap: 1000,
};

var pre_stroop = {
  timeline: [{
  type: "html-keyboard-response",
  trial_duration: 2000,
  stimulus: jsPsych.timelineVariable('stimulus'),
  prompt: '赤色ならR,  青色ならB,  緑色ならG,  黄色ならY',
  choices: [82, 66, 89, 71],
  }],
  timeline_variables:stimuli,
  post_trial_gap: 1000,
  sample: {type: 'fixed-repetitions',size: 2}
};

var go_main = {
  type: 'html-keyboard-response',
  stimulus: "<p style = 'text-align:left'>練習は以上です。ただいまより本番を行ってもらいます。</p>" +
  　　　　　 "<p style = 'text-align:left'>本番の課題は音楽を聴取しながら行っていただきます。</p>" +
            "<p style = 'text-align:left'>メールに記載したもう一つの実験(実験2)で音楽を再生してください。</p>" +
            "<p style = 'text-align:left'>準備ができたら<b>音楽を再生している状態で</b>いずれかのキーを押して課題を始めてください。</p>",
          };

var main_stroop = {
  timeline: [{
  type: "html-keyboard-response",
  trial_duration: 2000,
  stimulus: jsPsych.timelineVariable('stimulus'),
  prompt: '赤色ならR,  青色ならB,  緑色ならG,  黄色ならY',
  choices: [82, 66, 89, 71],
  }],
  timeline_variables:stimuli,
  post_trial_gap: 1000,
  data: jsPsych.timelineVariable('data'),
  on_finish: function(data){
    var correct = 0;
    if(data.correct_key_press == data.key_press){
      correct = 1;
    }
    data.correct = correct;
  },
  sample: {type: 'fixed-repetitions',size: 6}
};

var lead_questionnaire = {
  type: 'html-keyboard-response',
  stimulus: "<p style = 'text-align:left'>以上で課題は終了です。</p>" +
          "<p style = 'text-align:left'>続いて質問紙に回答していただきます。</p>"+
          "<p style = 'text-align:left'><b>Escキーを押して全画面表示を終了し、もう一つの実験のウィンドウを閉じて音楽聴取はここでやめて終了してください。</b></p>" +
           "<p style = 'text-align:left'>ヘッドホン,イヤホンも外して下さい。</p>" +
          "<p style = 'text-align:left'>上記の準備が終了したらいずれかのキーを押し、質問紙の回答に進んでください。</p>",
};

var scale_1 = ["音楽を<br>聴取しなかった","非常に<br>愉快", "かなり<br>愉快", "やや<br>愉快", "どちらでもない", "やや<br>不快", "かなり<br>不快", "非常に<br>不快"];

var scale_2 = ["音楽を<br>聴取しなかった","非常に<br>気持ちがよくなる", "かなり<br>気持ちがよくなる", "やや<br>気持ちがよくなる", "どちらでもない", "やや<br>気持ちが悪くなる", "かなり<br>気持ちが悪くなる", "非常に<br>気持ちが悪くなる"];

var scale_3 = ["音楽を<br>聴取しなかった","非常に<br>元気が出る", "かなり<br>元気が出る", "やや<br>元気が出る", "どちらでもない", "やや<br>気持ちが落ち込む", "かなり<br>気持ちが落ち込む", "非常に<br>気持ちが落ち込む"];

var scale_4 = ["音楽を<br>聴取しなかった","非常に<br>騒々しい", "かなり<br>騒々しい", "やや<br>騒々しい", "どちらでもない", "やや<br>穏やか", "かなり<br>穏やか", "非常に<br>穏やか"];

var scale_5 = ["音楽を<br>聴取しなかった","非常に<br>楽", "かなり<br>楽", "やや<br>楽", "どちらでもない", "やや<br>疲れる", "かなり<br>疲れる", "非常に<br>疲れる"];

var scale_6 = ["音楽を<br>聴取しなかった","非常に<br>積極的な気分", "かなり<br>積極的な気分", "やや<br>積極的な気分", "どちらでもない", "やや<br>消極的な気分", "かなり<br>消極的な気分", "非常に<br>消極的な気分"];

var questionnaire_1 = {
  type: 'survey-likert',
  questions: [
    {prompt: "音楽を聴いていた時の気分は", name: 'feelings_1', labels: scale_1, required: true},
    {prompt: "音楽を聴いていた時の気分は", name: 'feelings_2', labels: scale_2, required: true},
    {prompt: "音楽を聴いていた時の気分は", name: 'feelings_3', labels: scale_3, required: true},
    {prompt: "音楽を聴いていた時の気分は", name: 'feelings_4', labels: scale_4, required: true},
    {prompt: "音楽を聴いていた時の気分は", name: 'feelings_5', labels: scale_5, required: true},
    {prompt: "音楽を聴いていた時の気分は", name: 'feelings_6', labels: scale_6, required: true},
],
  button_label:'次へ',
};

var scale_2_1 = ["音楽を<br>聴取しなかった","非常に<br>心地よい", "かなり<br>心地よい", "やや<br>心地よい", "どちらでもない", "やや<br>心地悪い", "かなり<br>心地悪い", "非常に<br>心地悪い"];

var scale_2_2 = ["音楽を<br>聴取しなかった","非常に<br>目がさえる", "かなり<br>目がさえる", "やや<br>目がさえる", "どちらでもない", "やや<br>眠くなる", "かなり<br>眠くなる", "非常に<br>眠くなる"];

var scale_2_3 = ["音楽を<br>聴取しなかった","非常に<br>落ち着く", "かなり<br>落ち着く", "やや<br>落ち着く", "どちらでもない", "やや<br>イライラする", "かなり<br>イライラする", "非常に<br>イライラする"];

var scale_2_4 = ["音楽を<br>聴取しなかった","非常に<br>緊張する", "かなり<br>緊張する", "やや<br>緊張する", "どちらでもない", "やや<br>リラックスする", "かなり<br>リラックスする", "非常に<br>リラックスする"];

var scale_2_5 = ["音楽を<br>聴取しなかった","非常に<br>楽", "かなり<br>楽", "やや<br>楽", "どちらでもない", "やや<br>疲れる", "かなり<br>疲れる", "非常に<br>疲れる"];

var scale_2_6 = ["音楽を<br>聴取しなかった","非常に<br>不安", "かなり<br>不安", "やや<br>不安", "どちらでもない", "やや<br>安心", "かなり<br>安心", "非常に<br>安心"];


var  questionnaire_2 = {
 type: 'survey-likert',
 questions: [
   {prompt: "音楽を聴いていた時の心身の自覚は", name: 'feelings_2_1', labels: scale_2_1, required: true},
   {prompt: "音楽を聴いていた時の心身の自覚は", name: 'feelings_2_2', labels: scale_2_2, required: true},
   {prompt: "音楽を聴いていた時の心身の自覚は", name: 'feelings_2_3', labels: scale_2_3, required: true},
   {prompt: "音楽を聴いていた時の心身の自覚は", name: 'feelings_2_4', labels: scale_2_4, required: true},
   {prompt: "音楽を聴いていた時の心身の自覚は", name: 'feelings_2_5', labels: scale_2_5, required: true},
   {prompt: "音楽を聴いていた時の心身の自覚は", name: 'feelings_2_6', labels: scale_2_6, required: true},
],
 button_label:'次へ',
};

var scale_3_1 = ["音楽を<br>聴取しなかった","非常に<br>好き", "かなり<br>好き", "やや<br>好き", "どちらでもない", "やや<br>嫌い", "かなり<br>嫌い", "非常に<br>嫌い"];

var scale_3_2 = ["音楽を<br>聴取しなかった","非常に<br>遅い", "かなり<br>遅い", "やや<br>遅い", "どちらでもない", "やや<br>速い", "かなり<br>速い", "非常に<br>速い"];

var  questionnaire_3 = {
 type: 'survey-likert',
 questions: [
   {prompt: "音楽の印象は", name: 'feelings_3_1', labels: scale_3_1, required: true},
   {prompt: "音楽の印象は", name: 'feelings_3_2', labels: scale_3_2, required: true},
],
 button_label:'次へ',
};

var scale_4_1 = ["音楽を<br>聴取しなかった","非常に<br>当てはまる", "かなり<br>当てはまる", "やや<br>当てはまる", "どちらでもない", "やや<br>当てはまらない", "かなり<br>当てはまらない", "非常に<br>当てはまらない"];

var  questionnaire_4 = {
 type: 'survey-likert',
 questions: [
   {prompt: "音楽に明るい印象を持った", name: 'feelings_4_1', labels: scale_4_1, required: true},
   {prompt: "音楽に悲しい印象を持った", name: 'feelings_4_2', labels: scale_4_1, required: true},
   {prompt: "音楽に優しい印象を持った", name: 'feelings_4_3', labels: scale_4_1, required: true},
   {prompt: "音楽に刺激的な印象を持った", name: 'feelings_4_4', labels: scale_4_1, required: true},
   {prompt: "音楽に浮かれた印象を持った", name: 'feelings_4_5', labels: scale_4_1, required: true},
   {prompt: "音楽に厳かな印象を持った", name: 'feelings_4_6', labels: scale_4_1, required: true},
   {prompt: "音楽に楽しい印象を持った", name: 'feelings_4_7', labels: scale_4_1, required: true},
   {prompt: "音楽に暗い印象を持った", name: 'feelings_4_8', labels: scale_4_1, required: true},
   {prompt: "音楽に穏やかな印象を持った", name: 'feelings_4_9', labels: scale_4_1, required: true},
   {prompt: "音楽に強い印象を持った", name: 'feelings_4_10', labels: scale_4_1, required: true},
   {prompt: "音楽に落ち着きのない印象を持った", name: 'feelings_4_11', labels: scale_4_1, required: true},
   {prompt: "音楽に気高い印象を持った", name: 'feelings_4_12', labels: scale_4_1, required: true},
 ],
 button_label:'次へ',
};

var scale_5_1 = ["非常に<br>楽しかった", "かなり<br>楽しかった", "やや<br>楽しかった", "どちらでもない", "やや<br>辛かった", "かなり<br>辛かった", "非常に<br>辛かった"];

var scale_5_2 = ["非常に<br>長く感じた", "かなり<br>長く感じた", "やや<br>長く感じた", "どちらでもない", "やや<br>短く感じた", "かなり<br>短く感じた", "非常に<br>短く感じた"];

var scale_5_3 = ["非常に<br>落ち着いてできた", "かなり<br>落ち着いてできた", "やや<br>落ち着いてできた", "どちらでもない", "やや<br>イライラした", "かなり<br>イライラした", "非常に<br>イライラした"];

var scale_5_4 = ["非常に<br>面白かった", "かなり<br>面白かった", "やや<br>面白かった", "どちらでもない", "やや<br>つまらなかった", "かなり<br>つまらなかった", "非常に<br>つまらなかった"];

var scale_5_5 = ["非常に<br>好き", "かなり<br>好き", "やや<br>好き", "どちらでもない", "やや<br>嫌い", "かなり<br>嫌い", "非常に<br>嫌い"];

var scale_5_6 = ["非常に<br>集中してできた", "かなり<br>集中してできた", "やや<br>集中してできた", "どちらでもない", "やや<br>気が散った", "かなり<br>気が散った", "非常に<br>気が散った"];

var scale_5_7 = ["非常に<br>心地よかった", "かなり<br>心地よかった", "やや<br>心地よかった", "どちらでもない", "やや<br>不快だった", "かなり<br>不快だった", "非常に<br>不快だった"];

var scale_5_8 = ["非常に<br>緊張した", "かなり<br>緊張した", "やや<br>緊張した", "どちらでもない", "やや<br>リラックスしてできた", "かなり<br>リラックスしてできた", "非常に<br>リラックスしてできた"];


var　questionnaire_5 = {
 type: 'survey-likert',
 questions: [
   {prompt: "本実験で行った課題は", name: 'feelings_5_1', labels: scale_5_1, required: true},
   {prompt: "本実験で行った課題は", name: 'feelings_5_2', labels: scale_5_1, required: true},
   {prompt: "本実験で行った課題は", name: 'feelings_5_3', labels: scale_5_1, required: true},
   {prompt: "本実験で行った課題は", name: 'feelings_5_4', labels: scale_5_1, required: true},
   {prompt: "本実験で行った課題は", name: 'feelings_5_5', labels: scale_5_1, required: true},
   {prompt: "本実験で行った課題は", name: 'feelings_5_6', labels: scale_5_1, required: true},
   {prompt: "本実験で行った課題は", name: 'feelings_5_7', labels: scale_5_1, required: true},
   {prompt: "本実験で行った課題は", name: 'feelings_5_8', labels: scale_5_1, required: true},
 ],
 button_label:'次へ',
};

var finish = {
 type: 'html-keyboard-response',
 stimulus: "<p style = 'text-align:left'>以上で質問紙は終了です。</p>" +
         "<p style = 'text-align:left'>本日は実験にご参加いただきありがとうございました。</p>",
         }

var timeline = [];
timeline.push(informedConsent);
timeline.push(PC_check);
timeline.push(par_id);
timeline.push(age);
timeline.push(gender);
timeline.push(instructions);
timeline.push(fixation);
timeline.push(pre_stroop);
timeline.push(go_main);
timeline.push(fullscreen);
timeline.push(fixation);
timeline.push(main_stroop);
timeline.push(lead_questionnaire);
timeline.push(questionnaire_1);
timeline.push(questionnaire_2);
timeline.push(questionnaire_3);
timeline.push(questionnaire_4);
timeline.push(questionnaire_5);
timeline.push(finish);
