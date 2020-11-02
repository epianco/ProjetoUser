// module.exports = {
//     development: {
//         database: {
//             host:'ls-824412b76eea84571aa100217f8ab601f6994596.cwbqxhxk4wof.us-east-1.rds.amazonaws.com',
//             port: 3306,
//             name: 'db_usuario',
//             dialect: 'mysql',
//             user: 'dbmasteruser',
//             password: 'v_Y2UK0-m]`b7Df{p,_1kh0K&CkdpfYY'

//         }
//     },

//     production:{
//         database:{
//             host: process.env.DB_HOST,
//             host: process.env.DB_PORT
//         }
//     }
// }


require('dotenv/config');
 
// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        }
    }
}
