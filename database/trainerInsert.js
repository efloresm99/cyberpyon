const connection = require('./connectionPool.js');

const doQuery = (query) => {
    return new Promise((resolve, reject)=> {
        connection.query(query, (error, results, fields) => {
            if(error) return reject(error);

            return resolve(true);
        });
    });
};

module.exports.trainerInsert = async function(userId, serverid) {

    const countQuery = `INSERT INTO trainers(trainer_id, server_id, last_catch_date, wins) VALUES('${userId}','${serverid}', NULL, 0)`;
    const inserted = await doQuery(countQuery);
    return inserted;
};