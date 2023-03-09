require('dotenv').config();


const Sequalize = requre('sequalize');
 const sequalize = process.env.JAWSDB_URL
 ? new Sequalize(process.env.JAWSDB_URL)
 : new Sequalize(process.env.DB_NAME, process.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOption: {
        decimalNumbers: true,
    }
 });

 module.exports = sequalize;