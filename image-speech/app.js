var happyAudio = new Audio('sounds/happy.mp3');
var bathroomAudio = new Audio('sounds/bathroom.mp3');
var playAudio = new Audio('sounds/play.mp3');
var yesAudio = new Audio('sounds/yes.mp3');
var madAudio = new Audio('sounds/mad.mp3');
var tvAudio = new Audio('sounds/TV.mp3');
var noAudio = new Audio('sounds/no.mp3');
var sadAudio = new Audio('sounds/sad.mp3');
var foodAudio = new Audio('sounds/food.mp3');
var bedAudio = new Audio('sounds/bed.mp3');
var drinkAudio = new Audio('sounds/drink.mp3');
var outsideAudio = new Audio('sounds/outside.mp3');
var helpAudio = new Audio('sounds/help.mp3');
var momAudio = new Audio('sounds/mom.mp3');
var schoolAudio = new Audio('sounds/school.mp3');
var hurtAudio = new Audio('sounds/hurt.mp3');
var dadAudio = new Audio('sounds/dad.mp3');

        
function myAudioFunction(word) {
    if(word == 'happy') {
        happyAudio.play();
    } else if(word == 'bathroom') {
        bathroomAudio.play();
    } else if(word == 'play') {
        playAudio.play();
    } else if(word == 'yes') {
        yesAudio.play();
    } else if(word == 'no') {
        noAudio.play();
    } else if(word == 'mad') {
        madAudio.play();
    } else if(word == 'tv') {
        tvAudio.play();
    } else if(word == 'sad') {
        sadAudio.play();
    } else if(word == 'bed') {
        bedAudio.play();
    } else if(word == 'food') {
        foodAudio.play();
    } else if(word == 'drink') {
        drinkAudio.play();
    } else if(word == 'outside') {
        outsideAudio.play();
    } else if(word == 'help') {
        helpAudio.play();
    } else if(word == 'mom') {
        momAudio.play();
    } else if(word == 'school') {
        schoolAudio.play();
    } else if(word == 'hurt') {
        hurtAudio.play();
    } else if(word == 'dad') {
        dadAudio.play();
    }
    
}

