exports.up = function(knex) {
  return knex.schema.createTable('meetings', table => {
    table.increments('id').primary()
    table.string('meeting_name')
    table.string('minutes', 500000)
    table.timestamp('time').defaultTo(knex.fn.now())
    table.integer('duration')
    table.integer('attendees')
    table.decimal('cost')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('meetings')
};
