const Joi = require('joi')
const validator = require('express-joi-validation')({})

exports.validate_product_input = validator.query({

})

exports.validate_products_input = validator.query({
  title: Joi.string().min(5).max(12),
  category: Joi.string().min(5).max(12),
  quantity: Joi.number().max(10000),
})

exports.validate_create_product_input = validator.body({
  title: Joi.string().min(5).max(100).required(),
  price: Joi.number().precision(2).required(),
  quantity: Joi.number().default(1),
  category: Joi.string().min(5).max(12).required(),
})

exports.validate_patch_product_input = validator.body({
  title: Joi.string().min(5).max(100).required(),
})