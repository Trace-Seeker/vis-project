if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore_prod');
} else {
  module.exports = require('./configureStore_dev');
}