
exports.up = function(knex, Promise) {
  return knex.schema.createTable("products", function(t) {
    t.increments('id').unsigned().primary();
    t.string('title').notNull();
    t.decimal('price').notNull();
    t.integer('quantity').notNull();
    t.string('category');
    t.dateTime('created_at').notNull();
    t.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
