const crypto = require("crypto");

console.log(Object.getOwnPropertyNames(crypto).sort());

const uuid = crypto.randomUUID();

console.log(uuid);
