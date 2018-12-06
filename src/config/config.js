const dotenv = require('dotenv');

dotenv.config();

const config = {
  development: {
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
    host: process.env.BD_HOST,
    dialect: process.env.BD_DIALECT,
  },
  test: {
    use_env_variable: 'TEST_DB',
    dialect: process.env.BD_DIALECT,
  },
  production: {
    use_env_variable: 'PROD_DB',
    dialect: process.env.BD_DIALECT,
  },
};

module.exports = config;
