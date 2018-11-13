const pg = require("pg");
const settings = require("./settings"); // settings.json

var knex = require('knex')({
  client: 'pg',
  connection: {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
  }
});

const myArg = process.argv.slice(2);
function addPerson(arr) {
	knex('famous_people').insert({first_name: `${arr[0]}`, last_name: `${arr[1]}`, birthdate: `${arr[2]}`})
.asCallback(function(err, rows) {
  if (err) return console.error(err);
      console.log(rows);
}).then(() =>{
	setTimeout(function () {
		process.exit();
	}, 2000)
})
}

console.log('hello');

addPerson(myArg);


//another way with promises
// knex('famous_people')
// .insert({first_name: args[0], last_name: args[1], birthdate: args[2] })
// .finally(function() {
//   knex.destroy();
// });