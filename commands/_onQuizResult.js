/*CMD
  command: /onQuizResult
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

function decodeEntities(text){
  if(!text) return "";
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&eacute;/g, "é")
    .replace(/&rsquo;/g, "’")
    .replace(/&shy;/g, "-")
    .replace(/&hellip;/g, "…")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

var res = JSON.parse(content);

if(res.response_code !== 0 || !res.results || res.results.length === 0){
  Bot.sendMessage("⚠️ Could not fetch a quiz question. Try again.");
  return;
}

var q = res.results[0];

// Decode question and answers
var question = decodeEntities(q.question);
var correct = decodeEntities(q.correct_answer);
var answers = q.incorrect_answers.map(decodeEntities);
answers.push(correct);

// Shuffle answers
function shuffle(array){
  for (var i = array.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffle(answers);

// Save correct answer
User.setProperty("currentQuestion", question, "string");
User.setProperty("correctAnswer", correct, "string");

// Build buttons
var buttons = [];
for(var i=0; i<answers.length; i++){
  buttons.push([{title: answers[i], command: "/checkQuizAnswer " + answers[i]}]);
}

// Show question
Bot.sendInlineKeyboard(
  buttons,
  "🎮 *Category:* " + decodeEntities(q.category) +
  "\n\n❓ *Question:* " + question,
  { parse_mode: "Markdown" }
);

