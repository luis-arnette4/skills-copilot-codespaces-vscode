// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const comments = {
  1: [{ id: 1, body: 'some comment' }],
  2: [{ id: 1, body: 'some comment' }],
};

app.get('/posts/:id/comments', (req, res) => {
  const postId = req.params.id;
  res.send(comments[postId]);
});

app.post('/posts/:id/comments', (req, res) => {
  const postId = req.params.id;
  const comment = req.body;
  comment.id = comments[postId].length + 1;
  comments[postId].push(comment);
  res.send(comment);
});

app.listen(3001, () => {
  console.log('Comments service started on port 3001');
});



