
exports.up = function(knex, Promise) {
	console.log("1")
  return Promise.all([
  	knex.schema.createTable('milestones', function (table) {
	  	table.increments('id');
	  	table.string('decription');
	  	table.date('date_achieved');
	})
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};
