const express = require("express");
// express 설치하고 불러오기
const app = express();
//변수로 저장
// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!");
//   // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE");
//   // res.send({ color: 'red' });
//   res.send('<h1>This is my webpage!</h1>');
// })
// req : 들어오는 요청을 의미하는 객체
// res : 응답을 의미하는 객체
app.get('/',(req, res) => {
	res.send("This is the home page!!!")
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>viewing Post ID: ${postId} on the ${subreddit} subreddit </h1>`)
})


app.post('/cats', (req, res) => {
  res.send('POST REQUEST TO /cats!!!!')
})

app.get('/cats', (req, res) => {
	res.send("MEOW!")
})

app.get('/dogs',(req, res) => {
	res.send("WOOF!")
})

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send('Nothing found if nothing searched!')
  }
  res.send(`<h1>Search results for: ${q}</h1>`)
})

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000")
})
//listen 메서드를 사용해 서버를 실행