/*CMD
  command: /stats
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

var score = User.getProperty("quizScore") || 0;
var total = User.getProperty("quizTotal") || 0;

if(total == 0){
  Bot.sendMessage("📊 You haven’t played yet! Type /quiz to start.");
} else {
  Bot.sendMessage("📊 Your Progress:\n\n✅ Correct: " + score + "\n❌ Total: " + total + "\n🎯 Accuracy: " + ((score/total)*100).toFixed(2) + "%");
}

