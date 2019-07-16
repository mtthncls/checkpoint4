const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const connection = require('../../conf');

// Support JSON-encoded bodies
router.use(bodyParser.json());

// Support URL-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true,
}));

router.use(express.static('public'));

// allow to get and post content from localhost to localhost
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

router.use((req, res, next) => {
    let { send } = res;
    let sent = false;
    res.send = function (data) {
      if (sent) return;
      send.bind(res)(data);
      sent = true;
    };
    next();
  });

  