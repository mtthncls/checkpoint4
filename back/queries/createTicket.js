const createTicket = `INSERT INTO tickets SET
spectator_id=?,
spectacle_id=?,
tarrif_id=?;`

module.exports = createTicket;
