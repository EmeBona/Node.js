const pgPromise = require("pg-promise");

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

async function setupDB() {
  await db.none(`

        DROP TABLE IF EXISTS users;

        CREATE TABLE users(
        id SERIAL NOT NULL PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT
        )
        `);

  await db.none(`INSERT INTO users (username, password) VALUES ('Maria', 'hola')`);
  await db.none(`INSERT INTO users (username, password) VALUES ('Ona', 'holaa')`);
  await db.none(`INSERT INTO users (username, password) VALUES ('Cinthya', 'holaaa')`);
  
}

setupDB();

module.exports = db;
