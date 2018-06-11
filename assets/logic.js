var crystal = {
    'ruby': {
        'name': 'ruby',
        'value': 0
    },

    'sapphire': {
        'name': 'sapphire',
        'value': 0
    },

    'emerald': {
        'name': 'emerald',
        'value': 0
    },

    'diamond': {
        'name': 'diamond',
        'value': 0
    },
};

var wins = 0 ;
var losses = 0;
var randNum = 0;
var scoreMatch = 0;
var yourScore = 0;
var time;
function gameStart() {
    scoreMatch = randGen(19, 121);
    crystal.ruby.value = randGen(1, 12);
    crystal.sapphire.value = randGen(1, 13);
    crystal.emerald.value = randGen(1, 13);
    crystal.diamond.value = randGen(1, 13);

    console.log(`Ruby ${crystal.ruby.value} Sapphire ${crystal.sapphire.value} Emerald ${crystal.emerald.value} Diamond ${crystal.diamond.value }`)
    $('#score').html(scoreMatch);
    $('#total-match').html(yourScore);

}

function randGen(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function addCrystals(clicked){
    yourScore += clicked;
    $('#total-match').html(yourScore);
    checkWin();
    
}

function checkWin() {
    if(yourScore === scoreMatch){
        wins++
        $('#wins').html(wins);
        time = setTimeout(softReset, 1000);
    } else if (yourScore > scoreMatch) {
        losses++
        $('#losses').html(losses);
        time = setTimeout(softReset, 1000);
    }
}

function softReset(){
    scoreMatch = 0;
    yourScore = 0;
    $('#score').html(scoreMatch);
    $('#total-match').html(yourScore);
    gameStart();
}

function reset(){
    wins = 0 ;
    losses = 0;
    randNum = 0;
    scoreMatch = 0;
    yourScore = 0;

    scoreMatch = randGen(19, 121);
    crystal.ruby.value = randGen(1, 12);
    crystal.sapphire.value = randGen(1, 13);
    crystal.emerald.value = randGen(1, 13);
    crystal.diamond.value = randGen(1, 13);

    console.log(`Ruby ${crystal.ruby.value} Sapphire ${crystal.sapphire.value} Emerald ${crystal.emerald.value} Diamond ${crystal.diamond.value }`)
    $('#score').html(scoreMatch);
    $('#total-match').html(yourScore);
    $('#wins').html(wins);
    $('#losses').html(losses);
    
}
    
gameStart();
$("#ruby").on("click", function() {
    addCrystals(crystal.ruby.value)
});
$("#sapphire").on("click", function() {
    addCrystals(crystal.sapphire.value)
});
$("#emerald").on("click", function() {
    addCrystals(crystal.emerald.value)
});
$("#diamond").on("click", function() {
    addCrystals(crystal.diamond.value)
});

$('#reset').on("click", reset);
    

