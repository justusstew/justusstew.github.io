var user_choice = '';
var options = ['rock','paper','scissors'];
var justus_choice = '';
var user_score = 0;
var justus_score = 0;

$('#user_score').append(user_score.toString());
$('#justus_score').append(justus_score.toString());

function evaluate_choices(choice1,choice2){
  if(choice1 == choice2){
    return 'Tie!';
  }
  else if(choice1 == 'rock' && choice2 == 'paper'){
    return 'Justus wins!';
  }
}

$('#rock').on('click',function(){
  user_choice = 'rock';
  justus_choice = options[Math.floor(Math.random() * 3) + 1].toString();
  evaluate_choices(user_choice,justus_choice);
});
$('#paper').on('click',function(){
  user_choice = 'paper';
  justus_choice = options[Math.floor(Math.random() * 3) + 1].toString();
  evaluate_choices(user_choice,justus_choice);
});
$('#scissors').on('click',function(){
  user_choice = 'scissors';
  justus_choice = options[Math.floor(Math.random() * 3) + 1].toString();
  evaluate_choices(user_choice,justus_choice);
});
