const R = require('ramda')

const fields = ['id', 'title', 'price', 'quantity', 'category', 'created_at']

module.exports = {
  one: (user) => {
    return R.pick(fields, user)
  },
  many: (products) => {
    console.log('prod', products)
    return R.map(R.pick(fields))(products)
  }
}
