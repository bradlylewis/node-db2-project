exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable('cars', table => {
    table.increments() // this creates a primary key called id of auto inc integers
    table.string('vin', 17).unique().notNullable()
    table.string('make', 128).notNullable()
    table.string('model', 128).notNullable()
    table.numeric('mileage').notNullable()
    table.string('title')
    table.string('transmission')
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
