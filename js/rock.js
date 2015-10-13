var user_choice = '';
var options = ['rock','paper','scissors'];
var justus_choice = '';
var user_score = 0;
var justus_score = 0;

$('#user_score').append(user_score.toString());
$('#justus_score').append(justus_score.toString());

function evaluate_choices(choice1,choice2){
  if(choice1 == choice2){
    $('#game_message').empty();
    $('#game_message').append('Tie');
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#game_message').append('Who\'s gonna win...');$('#justus_choice').empty();
    $('#user_choice').empty(); }, 2500);
  }
  else if(choice1 == 'rock' && choice2 == 'paper'){
    $('#game_message').empty();
    $('#game_message').append('Justus Wins!');
    justus_score = justus_score + 1;
    $('#justus_score').empty();
    $('#justus_score').append(justus_score);
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#game_message').append('Who\'s gonna win...');$('#justus_choice').empty();
    $('#user_choice').empty(); }, 2500);
  }else if(choice1 == 'paper' && choice2 == 'scissors'){
    $('#game_message').empty();
    $('#game_message').append('Justus Wins!');
    justus_score = justus_score + 1;
    $('#justus_score').empty();
    $('#justus_score').append(justus_score);
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#game_message').append('Who\'s gonna win...');$('#justus_choice').empty();
    $('#user_choice').empty(); }, 2500);
  }else if(choice1 == 'scissors' && choice2 == 'rock'){
    $('#game_message').empty();
    $('#game_message').append('Justus Wins!');
    justus_score = justus_score + 1;
    $('#justus_score').empty();
    $('#justus_score').append(justus_score);
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#game_message').append('Who\'s gonna win...');$('#justus_choice').empty();
    $('#user_choice').empty(); }, 2500);
  }else if(choice1 == 'paper' && choice2 == 'rock'){
    $('#game_message').empty();
    $('#game_message').append('You Win!');
    user_score = user_score + 1;
    $('#user_score').empty();
    $('#user_score').append(user_score);
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#game_message').append('Who\'s gonna win...');$('#justus_choice').empty();
    $('#user_choice').empty(); }, 2500);
  }else if(choice1 == 'scissors' && choice2 == 'paper'){
    $('#game_message').empty();
    $('#game_message').append('You Win!');
    user_score = user_score + 1;
    $('#user_score').empty();
    $('#user_score').append(user_score);
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#game_message').append('Who\'s gonna win...');$('#justus_choice').empty();
    $('#user_choice').empty(); }, 2500);
  }else if(choice1 == 'rock' && choice2 == 'scissors'){
    $('#game_message').empty();
    $('#game_message').append('You Win!');
    user_score = user_score + 1;
    $('#user_score').empty();
    $('#user_score').append(user_score);
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#game_message').append('Who\'s gonna win...');$('#justus_choice').empty();
    $('#user_choice').empty(); }, 2500);
  }
}

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

$('#rock').on('click',function(e){
  e.preventDefault();
  user_choice = 'rock';
  justus_choice = options[Math.round(Math.random()*2) + 1].toString();
  $('#rock').removeClass('btn-active');
  evaluate_choices(user_choice,justus_choice);
});
$('#paper').on('click',function(e){
  e.preventDefault();
  user_choice = 'paper';
  justus_choice = options[Math.round(Math.random()*2) + 1].toString();
  $('#paper').removeClass('btn-active');
  evaluate_choices(user_choice,justus_choice);
});
$('#scissors').on('click',function(e){
  e.preventDefault();
  user_choice = 'scissors';
    justus_choice = options[Math.round(Math.random()*2) + 1].toString();
  $('#scissors').removeClass('btn-active');
  evaluate_choices(user_choice,justus_choice);
});
