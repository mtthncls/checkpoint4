const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const connection = require('../../conf');
const getDates = require('../../queries/getdates')
const createSpectator = require('../../queries/createSpectator')
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


router.get('/', (req, res) => {
  res.send('toto');
});

router.get('/dates', (req, res) => {
  connection.query(getDates, (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des dates : ${err}`);
    } else {
      res.json(datas);
    }
  });
});

// router.post('/spectator', (req, res) => {
//   const formData = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     adults: req.body.adults,
//     children: req.body.children,


//   }

//   connection.query(createSpectator, [formData], (errorSpectator, result) => {
//     if (errorSpectator) {
//       res.status(500).send(`error when adding spectator : ${errorSpectator}`);
//     } else {
//       const resultSpectatorId = { spectator_id: result.insertId }
//       for
//     }
//   }
//   )
// }
// )

module.exports = router;
