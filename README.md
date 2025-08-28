# 🤖 Trivia Quiz Bot (OpenTrivia API) - Bots.Business Bot ( Telegram Bot )

A fully working quiz bot built for **Bots.Business** that fetches live questions from the free [OpenTriviaDB](https://opentdb.com/) API.  
Users can play unlimited trivia questions across different categories like General Knowledge, Science, History, and Entertainment.  
The bot randomizes answers, checks user responses, and keeps track of scores and accuracy.

---

## ✨ Features
- 🎮 Unlimited random trivia questions  
- 📚 Multiple categories & difficulties  
- 🔀 Answers shuffled each time  
- 🏆 Tracks user score and accuracy  
- 📊 `/stats` command shows performance  
- 🌍 Works globally with free trivia API  

---

## 🚀 Commands
- `/start` → Welcome message  
- `/quiz` → Get a random trivia question  
- `/checkQuizAnswer` → Select an answer (auto-checks correct/wrong)  
- `/stats` → Show your score and accuracy  

---

## 🛠️ Setup
1. Create a new bot on **Bots.Business**.  
2. Add the provided BJS code with commands:  
   - `/start`  
   - `/quiz`  
   - `/onQuizResult`  
   - `/checkQuizAnswer`  
   - `/stats`  
3. That’s it! Start playing by typing `/quiz`.  

---

## 🔮 Ideas for Expansion
- Add difficulty selector (Easy, Medium, Hard).  
- Add category selector (Science, History, Games).  
- Add leaderboard using `topboardlib`.  
- Create a daily challenge mode (1 question per day).  
