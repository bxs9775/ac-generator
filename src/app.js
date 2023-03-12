// imports
const path = require('path');
const express = require('express');
const controllers = require('./controllers');

// sets the port for the server to use
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

// static assets folder
app.use('/assets', express.static(path.resolve(`${__dirname}/../hosted/`)));

// disabling x-powered-by header
app.disable('x-powered-by');

// routing
app.get('/', controllers.Generator.getDialogue);
app.get('/rules', controllers.Grammer.getRulesTest);
app.get('/grammer', controllers.Grammer.getGrammers);

// start app listening
app.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Listening on port ${port}`);
  });