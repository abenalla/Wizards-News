const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");

const app = express();

app.use(morgan('dev'));

app.get("/", (req, res) => {
//First, get the list of posts.
const posts = postBank.list();

//Then, prepare some html to send as output.
const html = `<! DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
  </head>
  <body>
    <ul>
      ${posts.map(post => `<li>${/*You have access to the past data here*/}</li>`)}
    <ul>
  </body>
  </html>`;

// Finally, send a response
res.send(html);

});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
