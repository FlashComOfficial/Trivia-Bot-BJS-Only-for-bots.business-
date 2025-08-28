/*CMD
  command: /checkQuizAnswer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var userAnswer = params;
var correct = User.getProperty("correctAnswer");
var question = User.getProperty("currentQuestion");

// Track score
var score = User.getProperty("quizScore") || 0;
var total = User.getProperty("quizTotal") || 0;

total++;

if(userAnswer == correct){
  score++;
  Bot.sendMessage("✅ Correct! 🎉\n\n" + question + "\nAnswer: " + correct);
} else {
  Bot.sendMessage("❌ Wrong!\n\n" + question + "\nCorrect Answer: " + correct);
}

User.setProperty("quizScore", score, "integer");
User.setProperty("quizTotal", total, "integer");

// Next question
Bot.runCommand("/quiz");

