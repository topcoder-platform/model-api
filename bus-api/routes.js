const sampleController = require('./controllers/Entity')

module.exports = {
  '/entities': {
    post: {
      method: sampleController.create
    }
  }
}
