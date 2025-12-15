const { Sequelize } = require("sequelize");
// console.log(
//   "DB CONFIG →",
//   process.env.DB_USER,
//   process.env.DB_HOST,
//   process.env.DB_NAME
// );

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
 {
    host: process.env.DB_HOST,
    dialect: "mysql",

    dialectOptions: {
      authPlugins: {
        mysql_clear_password: () => () => Buffer.from(process.env.DB_PASSWORD + "\0"),
      },
    },

    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected successfully");
  } catch (error) {
    console.error("MySQL connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
