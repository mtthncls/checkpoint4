const createOrder = `INSERT INTO tickets SET
spectator_id=?
spectacle_id=?,
tarrif_id=?;`

module.exports = createOrder;
