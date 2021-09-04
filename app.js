const quiz = [
    {
        question: 'Javaは○○片付け言語である',
        answers: ['公的','私的','動的','静的'],
        correct: '静的'
    },{
        question: 'JavaScriptは○○片付け言語である',
        answers: ['公的','私的','動的','静的'],
        correct: '動的'
    },{
        question: 'この中で変数名として適切なものはどれ？',
        answers: ['super','1name','Gorilla','catch'],
        correct: 'Gorilla'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score =0;

//const question = 'Javaは○○片付け言語である';
//const answers = ['公的','私的','動的','静的'];
//const correct = '静的';


const $button = document.getElementsByTagName('buttonQ');
const buttonLength = $button.length;
//定数の文字列をHTMLに反映
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
      while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e)=>{
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    }else{
        window.alert('不正解！');
    }
    quizIndex++;
    if(quizIndex < quizLength){
       // 問題がまだならこちらを実行
       setupQuiz();
    }else{
        //問題が終了したらこちらを実行
        window.alert('終了！あなたの正解数は'+ score +'/'+ quizLength + 'です');

    }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e) =>{
        clickHandler(e);
    });
    handlerIndex++;
}
/*$button[0].addEventListener('click',(e) =>{
    clickHandler(e);
});
$button[1].addEventListener('click',(e) =>{
    clickHandler(e);
});
$button[2].addEventListener('click',(e) =>{
    clickHandler(e);
});
$button[3].addEventListener('click',(e) =>{
    clickHandler(e);
});*/
