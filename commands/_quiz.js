/*CMD
  command: /quiz
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

HTTP.get({
  url: "https://opentdb.com/api.php?amount=1&type=multiple",
  success: "/onQuizResult",
  error: "/onQuizError"
});

