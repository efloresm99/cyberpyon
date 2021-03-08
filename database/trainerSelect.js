const connection = require('./connectionPool.js');

const doQuery = (query) => {
        return new Promise((resolve, reject)=> {
            connection.query(query, (error, results, fields) => {
                if(error) return reject(error);

                const countResults = results[0].result;

                if (countResults == 0) {
                    return resolve(false);
                } else {
                    return resolve(true);
                }

            });
        });
 };

 module.exports.trainerSelect = async function(userId, serverId) {
    const countQuery = `SELECT COUNT(trainerstable_id) as result FROM trainers WHERE trainer_id = ${userId} AND server_id = ${serverId}`;
    const found = await doQuery(countQuery);

    return found;
};
