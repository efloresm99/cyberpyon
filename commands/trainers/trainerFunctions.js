// Verify trainer: Verifies if an user is alreay a trainer.
module.exports.verifyTrainer = async function(trainer, serverid) {
    const trainerFind = require('./../../database/trainerSelect.js');
    const result = await trainerFind.trainerSelect(trainer.id, serverid);

    return result;
};

// addTrainer: Adds a user to the trainers list.
module.exports.addTrainer = async function(trainer, serverid) {
    const trainerIns = require('./../../database/trainerInsert.js');
    const inserted = await trainerIns.trainerInsert(trainer.id, serverid);

    return inserted;
};