const R = require('ramda');

const view = require('../views/product');
const repo = require('../models/repo/products');
const input = require('../input-filters/product');
const error = require('../views/error');
const { if_exists } = require('./helpers');

const list = (req, res) => {
  repo
    .list(req.query)
    // .then((products) => res.json(view.many(products)))
    .then(R.compose(res.json, view.many))
    .catch(error.generic(res))
}

const get = (req, res) => {
  repo
    .get(req.params.id)
    // .then(if_exists)
    .then(if_exists)
    .then((product) => res.json(view.one(product)))
    .catch(error.generic(res))
}

const create = (req, res) => {
  repo
    .create(req.body)
    .then((product) => res.json(view.one(product)))
    .catch(error.generic(res))
}

const patch = (req, res) => {
  repo
    .update(req.params.id, req.body)
    .then((product) => res.json(view.one(product)))
    .catch(error.generic(res))
}

let users = require('express').Router()

users.get('/',
  input.validate_products_input,
  list
);

users.get('/:id',
  input.validate_product_input,
  get
)

users.post('/',
  input.validate_create_product_input,
  create
)

users.patch('/:id',
  input.validate_patch_product_input,
  patch
)

module.exports = users
