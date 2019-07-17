const express = require('express');
const app = express();
const port = 3001;

const circus = require('./routes/circus/route');

app.use('/circus', circus);


app.listen(port, (err) => {
  if (err) {
    throw new Error(`Something bad happened, server is not listening ${err}`);
  } else {
    console.log(`Server is listening on ${port}...`)
  }
});
