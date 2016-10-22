import express from 'express';
const app = express();
let port = 3030;

app.use('/', express.static(__dirname + './../client'));

// app.get('/', function(req, res){
//   res.render('./../client/index.html');
// });

app.get('/test', function(req, res){
  res.send('test');
});

app.get('/hello', (req, res) => {
  return res.send("Can you hear me?");
});

// import posts from './routes/posts';
// app.use('/posts', posts);

const server = app.listen(port, () => {
  console.log("Express listening on port", port);
});
