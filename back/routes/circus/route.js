const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const connection = require('../../conf');
const getDates = require('../../queries/getdates')
const createSpectator = require('../../queries/createSpectator')
const createTicket = require('../../queries/createTicket')
const createOrder = require('../../queries/createOrder')
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

router.post('/order', (req, res) => {
  const spectatorData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
  }
  const showDateId = req.body.dateChosenId
  const adultTicketNumber = req.body.adults
  const childrenTicketNumber = req.body.children
  connection.query(createSpectator, [spectatorData], (errorSpectator, result) => {
    if (errorSpectator) {
      res.status(500).send(`error when adding spectator : ${errorSpectator}`);
    } else {
      const resultSpectatorId = { spectator_id: result.insertId }
      for (let i = 0; i < adultTicketNumber; i++) {
        connection.query(createTicket, [resultSpectatorId.spectator_id, showDateId, 1], (errorAdults, resultAdult) => {
          if (errorAdults) {
            res.status(500).send(`Error when adding adults tickets : ${errorAdults}`)
          }
          else {
            res.json(resultAdult);
          }
        }
        )
      }
      for (let i = 0; i < childrenTicketNumber; i++) {
        connection.query(createTicket, [resultSpectatorId.spectator_id, showDateId, 2], (errorChildren, resultChildren) => {
          if (errorChildren) {
            res.status(500).send(`Error when adding adults tickets : ${errorChildren}`)
          }
          else {
            res.json(resultChildren);
          }
        }
        )
      }
    }
  }
  )
}
)


router.post('/tickets', (req, res) => {

  // récupération des données envoyées
  // const ticketData = {
  //   spectator_id: req.body.spectator,
  //   spectacle_id: req.body.spectacle,
  //   tarrif_id: req.body.tarrif
  // }


  const spectator = req.body.spectator
  const spectacle = req.body.spectacle
  const tarrif = req.body.tarrif

  // connexion à la base de données, et insertion de l'employé
  connection.query(createTicket, [spectator, spectacle, tarrif], (err, results) => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});

router.post('/spectator', (req, res) => {

  // récupération des données envoyées
  const spectatorData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
  }

  // connexion à la base de données, et insertion de l'employé
  connection.query(createSpectator, [spectatorData], (err, results) => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});

module.exports = router;
