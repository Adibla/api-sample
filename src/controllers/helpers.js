const view = require('../views/product')

const { bind, unary, pipe, ifElse, isNil, not, tap, identity, assoc, compose } = require('ramda');
const reject = bind(Promise.reject, Promise);
const resolve = bind(Promise.resolve, Promise);

const exists = compose(not, isNil);

const not_found = pipe(assoc('status', 404), reject);

module.exports = {
  if_exists: ifElse(exists, resolve, not_found)
}
