const pg = require("pg");
const settings = require("./settings"); // settings.json


const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


const myArg = process.argv.slice(2);
function findPaul(input){
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT first_name, last_name FROM famous_people WHERE first_name ='${input}' `, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows); //output: 1
    client.end();
  });
});
}

function findPerson(input){
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT first_name, last_name, birthdate FROM famous_people WHERE first_name ='${input}' `, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].first_name + " " + result.rows[0].last_name + " " + result.rows[0].birthdate);
    console.log();
    client.end();
  });
});
}
findPerson(myArg);