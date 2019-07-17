const createTicket = `INSERT INTO tickets SET
spectator_id=?
spectacle_id=?,
tarrifs_id=?;`

module.exports = createTicket;
