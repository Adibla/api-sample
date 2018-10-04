const { assoc, ifElse, isNil, bind } = require('ramda');

const resolve = bind(Promise.resolve, Promise)
const reject = bind(Promise.reject, Promise)
const reject_because_already_exists = (product) => reject({status: 409, message: 'Already exists'})

const Product = require('../product');

module.exports = {
  list: (params = {}) => {
    return Product.query().where(params);
  },

  get: (id) => {
    return Product.query().where({id}).first();
  },

  create: (body) => {
    return Product.query()
      .insert(assoc('created_at', new Date(), body))
      .then((product) => Product.query().where({id: product.id}).first())
    ;
  },
  
  update: (id, content) => {
    content = assoc('updated_at', new Date(), content);

    return Product.query()
      .where({ id: id })
      .patch(content)
      .then(() => Product.query().where({id}).first())
    ;
  },
};
