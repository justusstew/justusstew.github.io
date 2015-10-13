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
    setTimeout(function(){ $('#game_message').empty();$('#justus_choice').empty();
    $('#user_choice').empty(); }, 1500);
  }
  else if(choice1 == 'rock' && choice2 == 'paper'){
    $('#game_message').empty();
    $('#game_message').append('Justus Wins!');
    justus_score = parseInt($('#justus_score').val()) + 1;
    $('#justus_score').val(justus_score);
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#justus_choice').empty();
    $('#user_choice').empty(); }, 1500);
  }else if(choice1 == 'paper' && choice2 == 'scissors'){
    $('#game_message').empty();
    $('#game_message').append('Justus Wins!');
    justus_score = parseInt($('#justus_score').val()) + 1;
    $('#justus_score').val(justus_score);
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#justus_choice').empty();
    $('#user_choice').empty(); }, 1500);
  }else if(choice1 == 'scissors' && choice2 == 'rock'){
    $('#game_message').empty();
    $('#game_message').append('Justus Wins!');
    justus_score = parseInt($('#justus_score').val()) + 1;
    $('#justus_score').val(justus_score);
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#justus_choice').empty();
    $('#user_choice').empty(); }, 1500);
  }else if(choice1 == 'paper' && choice2 == 'rock'){
    $('#game_message').empty();
    $('#game_message').append('You Win!');
    user_score = parseInt($('#user_score').val()) + 1;
    $('#user_score').val(user_score);
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#justus_choice').empty();
    $('#user_choice').empty(); }, 1500);
  }else if(choice1 == 'scissors' && choice2 == 'paper'){
    $('#game_message').empty();
    $('#game_message').append('You Win!');
    user_score = parseInt($('#user_score').val()) + 1;
    $('#user_score').val(user_score);
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#justus_choice').empty();
    $('#user_choice').empty(); }, 1500);
  }else if(choice1 == 'rock' && choice2 == 'scissors'){
    $('#game_message').empty();
    $('#game_message').append('You Win!');
    user_score = parseInt($('#user_score').val()) + 1;
    $('#user_score').val(user_score);
    $('#justus_choice').empty();
    $('#user_choice').empty();
    $('#justus_choice').append(justus_choice);
    $('#user_choice').append(user_choice);
    setTimeout(function(){ $('#game_message').empty();$('#justus_choice').empty();
    $('#user_choice').empty(); }, 1500);
  }
}

$('#rock').on('click',function(e){
  e.preventDefault();
  user_choice = 'rock';
  justus_choice = options[Math.floor(Math.random() * 3) + 1].toString();
  $('#rock').removeClass('active');
  evaluate_choices(user_choice,justus_choice);
});
$('#paper').on('click',function(e){
  e.preventDefault();
  user_choice = 'paper';
  justus_choice = options[Math.floor(Math.random() * 3) + 1].toString();
  $('#paper').removeClass('active');
  evaluate_choices(user_choice,justus_choice);
});
$('#scissors').on('click',function(e){
  e.preventDefault();
  user_choice = 'scissors';
  justus_choice = options[Math.floor(Math.random() * 3) + 1].toString();
  $('#scissors').removeClass('active');
  evaluate_choices(user_choice,justus_choice);
});
